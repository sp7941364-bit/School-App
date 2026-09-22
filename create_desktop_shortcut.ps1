$WshShell = New-Object -comObject WScript.Shell
$desktop = [Environment]::GetFolderPath('Desktop')
$icoPath = Join-Path $PSScriptRoot "assets\favicon.ico"
$url = "http://127.0.0.1:3000/"

$batPath = Join-Path $PSScriptRoot "Open_Portal.bat"

# 1. Create Desktop .lnk shortcut
$shortcutDesktop = $WshShell.CreateShortcut((Join-Path $desktop "Basava Shrees School.lnk"))
$shortcutDesktop.TargetPath = $batPath
$shortcutDesktop.WorkingDirectory = $PSScriptRoot
$shortcutDesktop.IconLocation = "$icoPath,0"
$shortcutDesktop.Description = "Basava Shrees School - Official Portal"
$shortcutDesktop.Save()

# 2. Create Workspace .lnk shortcut
$shortcutWorkspace = $WshShell.CreateShortcut((Join-Path $PSScriptRoot "Basava Shrees School.lnk"))
$shortcutWorkspace.TargetPath = $batPath
$shortcutWorkspace.WorkingDirectory = $PSScriptRoot
$shortcutWorkspace.IconLocation = "$icoPath,0"
$shortcutWorkspace.Description = "Basava Shrees School - Official Portal"
$shortcutWorkspace.Save()

# 3. Create Windows .url shortcuts with explicit IconFile
$urlContent = @"
[InternetShortcut]
URL=$url
IconFile=$icoPath
IconIndex=0
"@

[System.IO.File]::WriteAllText((Join-Path $desktop "Basava Shrees School.url"), $urlContent)
[System.IO.File]::WriteAllText((Join-Path $PSScriptRoot "Basava Shrees School.url"), $urlContent)
[System.IO.File]::WriteAllText((Join-Path $PSScriptRoot "Open_Portal.url"), $urlContent)

Write-Host "Created Desktop & Workspace shortcuts with Basavanna icon."
