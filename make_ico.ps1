Add-Type -AssemblyName System.Drawing

$srcPath = Join-Path $PSScriptRoot ".vscode\basavanna.png"
$assetsIco = Join-Path $PSScriptRoot "assets\favicon.ico"

$img = [System.Drawing.Bitmap]::FromFile($srcPath)

# Create 128x128 high quality square image
$size = 128
$bmp = New-Object System.Drawing.Bitmap($size, $size)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

$ratio = [Math]::Min($size / $img.Width, $size / $img.Height)
$w = [int]($img.Width * $ratio)
$h = [int]($img.Height * $ratio)
$x = [int](($size - $w) / 2)
$y = [int](($size - $h) / 2)

$g.DrawImage($img, $x, $y, $w, $h)
$g.Dispose()
$img.Dispose()

# Save as ICO
$hIcon = $bmp.GetHicon()
$icon = [System.Drawing.Icon]::FromHandle($hIcon)

$fs2 = New-Object System.IO.FileStream($assetsIco, [System.IO.FileMode]::Create)
$icon.Save($fs2)
$fs2.Close()

$icon.Dispose()
$bmp.Dispose()

Write-Host "Favicon created at $assetsIco"
