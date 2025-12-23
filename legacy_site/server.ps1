# Simple HTTP Server for Static Files
$port = 8080
$url = "http://localhost:$port/"

# Check if port is already in use
$portInUse = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
if ($portInUse) {
    Write-Host "Port $port is already in use. Server may already be running." -ForegroundColor Yellow
    Write-Host "If you want to start a new server, please stop the existing one first." -ForegroundColor Yellow
    Write-Host "Server should be available at: $url" -ForegroundColor Cyan
    exit
}

# Create HTTP Listener
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($url)

try {
    $listener.Start()
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  Local Web Server Started!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "Server running at: $url" -ForegroundColor Cyan
    Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host "Error starting server: $_" -ForegroundColor Red
    Write-Host "Port $port may already be in use." -ForegroundColor Yellow
    exit
}

# Get the current directory
$rootPath = Get-Location

# Function to get MIME type
function Get-MimeType {
    param([string]$filePath)
    $extension = [System.IO.Path]::GetExtension($filePath).ToLower()
    $mimeTypes = @{
        '.html' = 'text/html'
        '.css'  = 'text/css'
        '.js'   = 'application/javascript'
        '.json' = 'application/json'
        '.png'  = 'image/png'
        '.jpg'  = 'image/jpeg'
        '.jpeg' = 'image/jpeg'
        '.gif'  = 'image/gif'
        '.svg'  = 'image/svg+xml'
        '.ico'  = 'image/x-icon'
        '.pdf'  = 'application/pdf'
    }
    if ($mimeTypes.ContainsKey($extension)) {
        return $mimeTypes[$extension]
    }
    return 'application/octet-stream'
}

# Main server loop
try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $localPath = $request.Url.LocalPath
        if ($localPath -eq '/') {
            $localPath = '/index.html'
        }
        
        $filePath = Join-Path $rootPath $localPath.TrimStart('/')
        
        if (Test-Path $filePath -PathType Leaf) {
            $content = [System.IO.File]::ReadAllBytes($filePath)
            $mimeType = Get-MimeType -filePath $filePath
            
            $response.ContentType = $mimeType
            $response.ContentLength64 = $content.Length
            $response.StatusCode = 200
            
            $response.OutputStream.Write($content, 0, $content.Length)
            Write-Host "$($request.HttpMethod) $localPath - 200" -ForegroundColor Green
        } else {
            $response.StatusCode = 404
            $notFoundHtml = @"
<!DOCTYPE html>
<html>
<head><title>404 Not Found</title></head>
<body><h1>404 - File Not Found</h1><p>The requested file was not found on this server.</p></body>
</html>
"@
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($notFoundHtml)
            $response.ContentType = 'text/html'
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
            Write-Host "$($request.HttpMethod) $localPath - 404" -ForegroundColor Red
        }
        
        $response.Close()
    }
} catch {
    Write-Host "Server stopped: $_" -ForegroundColor Red
} finally {
    if ($listener -and $listener.IsListening) {
        try {
            $listener.Stop()
        } catch {
            # Ignore errors when stopping
        }
    }
    if ($listener) {
        $listener.Close()
    }
}

