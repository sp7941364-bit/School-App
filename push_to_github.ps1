param (
    [Parameter(Mandatory=$false)]
    [string]$RepoUrl
)

$git = "$env:LOCALAPPDATA\Programs\Git\cmd\git.exe"
if (-not (Test-Path $git)) {
    $git = "git"
}

if (-not $RepoUrl) {
    $RepoUrl = Read-Host "Enter your GitHub Repository URL (e.g. https://github.com/username/repo.git)"
}

if (-not $RepoUrl) {
    Write-Host "No URL entered. Exiting." -ForegroundColor Red
    exit 1
}

Write-Host "Setting remote origin to $RepoUrl..." -ForegroundColor Cyan
& $git remote remove origin 2>$null
& $git remote add origin $RepoUrl

Write-Host "Pushing main branch to GitHub..." -ForegroundColor Cyan
& $git branch -M main
& $git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nSuccessfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "GitHub Actions is now automatically building your Android APK." -ForegroundColor Green
    Write-Host "You can watch the build progress and download the APK at:" -ForegroundColor Yellow
    
    # Clean URL to get repo web URL
    $webUrl = $RepoUrl -replace '\.git$', ''
    Write-Host "1. Releases: $webUrl/releases" -ForegroundColor Cyan
    Write-Host "2. Actions:  $webUrl/actions" -ForegroundColor Cyan
} else {
    Write-Host "`nPush encountered an issue. If authentication was requested, ensure you have a GitHub Personal Access Token or SSH setup." -ForegroundColor Red
}
