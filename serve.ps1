param (
    [int]$Port = 3000,
    [string]$Path = $PSScriptRoot
)

$mimeTypes = @{
    ".html"  = "text/html; charset=utf-8"
    ".htm"   = "text/html; charset=utf-8"
    ".css"   = "text/css; charset=utf-8"
    ".js"    = "application/javascript; charset=utf-8"
    ".json"  = "application/json; charset=utf-8"
    ".svg"   = "image/svg+xml"
    ".png"   = "image/png"
    ".jpg"   = "image/jpeg"
    ".jpeg"  = "image/jpeg"
    ".ico"   = "image/x-icon"
    ".webp"  = "image/webp"
    ".woff"  = "font/woff"
    ".woff2" = "font/woff2"
    ".ttf"   = "font/ttf"
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://127.0.0.1:$Port/")
$listener.Prefixes.Add("http://localhost:$Port/")

try {
    $listener.Start()
} catch {
    Write-Host "Port $Port failed or busy. Error: $($_.Exception.Message)"
    exit 1
}

Write-Host "=========================================================="
Write-Host "Basava Shrees School Portal Server running!"
Write-Host "  -> Localhost: http://localhost:$Port/"
Write-Host "  -> 127.0.0.1:  http://127.0.0.1:$Port/"
Write-Host "Serving files from: $Path"
Write-Host "=========================================================="

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawUrl = $request.Url.LocalPath
        if ([string]::IsNullOrWhiteSpace($rawUrl) -or $rawUrl -eq "/") {
            $rawUrl = "/index.html"
        }

        $relPath = [System.Uri]::UnescapeDataString($rawUrl.TrimStart("/").Replace("/", [System.IO.Path]::DirectorySeparatorChar))
        $localFilePath = [System.IO.Path]::Combine($Path, $relPath)

        $response.Headers.Add("Access-Control-Allow-Origin", "*")
        $response.Headers.Add("Cache-Control", "no-cache, no-store, must-revalidate")

        if ([System.IO.File]::Exists($localFilePath)) {
            $ext = [System.IO.Path]::GetExtension($localFilePath).ToLower()
            $mime = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
            $response.ContentType = $mime
            $bytes = [System.IO.File]::ReadAllBytes($localFilePath)
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $notFoundBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $rawUrl")
            $response.ContentType = "text/plain"
            $response.StatusCode = 404
            $response.ContentLength64 = $notFoundBytes.Length
            $response.OutputStream.Write($notFoundBytes, 0, $notFoundBytes.Length)
        }
        $response.Close()
    } catch {
        # Continue serving on individual request error
    }
}

