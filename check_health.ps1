$urls = @(
    'http://127.0.0.1:3000/',
    'http://localhost:3000/',
    'http://127.0.0.1:3000/assets/basavanna.png',
    'http://127.0.0.1:3000/manifest.json',
    'http://127.0.0.1:3000/extracted.js'
)

Write-Host "========================================="
Write-Host "Basava Shrees School Portal Diagnostic"
Write-Host "========================================="

$allOk = $true
foreach ($u in $urls) {
    try {
        $sw = [System.Diagnostics.Stopwatch]::StartNew()
        $res = Invoke-WebRequest -Uri $u -TimeoutSec 4 -UseBasicParsing
        $sw.Stop()
        Write-Host "[PASS] $u -> HTTP $($res.StatusCode) in $($sw.ElapsedMilliseconds)ms ($($res.Content.Length) bytes)"
    } catch {
        Write-Host "[FAIL] $u -> $($_.Exception.Message)"
        $allOk = $false
    }
}

Write-Host "-----------------------------------------"
if ($allOk) {
    Write-Host "DIAGNOSTIC RESULT: ALL SYSTEMS OPERATIONAL (100% HEALTHY)"
} else {
    Write-Host "DIAGNOSTIC RESULT: SOME CHECKS FAILED"
}
Write-Host "========================================="
