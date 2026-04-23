# Identity Alchemy - Local Server Launcher
# This script ensures microphone permissions are persisted by running the app on 'localhost'.

Write-Host "---" -ForegroundColor Cyan
Write-Host "IDENTITY ALCHEMY: TRANSMUTATION LOADING..." -ForegroundColor Magenta
Write-Host "---" -ForegroundColor Cyan

# 1. Start the Python local server in the background
$serverProcess = Start-Process python -ArgumentList "-m http.server 8000" -NoNewWindow -PassThru

# 2. Wait a moment for the server to spin up
Start-Sleep -Seconds 2

# 3. Open the browser to localhost
Start-Process "http://localhost:8000"

Write-Host "ALCHEMICAL WORKSPACE ACTIVE: http://localhost:8000" -ForegroundColor Green
Write-Host "Press Ctrl+C in this terminal to shut down the server when finished." -ForegroundColor Yellow

# Keep the script running to maintain the server process
try {
    $serverProcess.WaitForExit()
}
finally {
    # Ensure the server closes if the script is interrupted
    Stop-Process -Id $serverProcess.Id -ErrorAction SilentlyContinue
}
