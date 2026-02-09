$nodePath = "C:\Program Files\nodejs"
$nodeExe = "$nodePath\node.exe"
$npmCmd = "$nodePath\npm.cmd"

if (!(Test-Path $nodeExe)) {
    Write-Host "Node.js not found at $nodeExe. Please restart your terminal if installed." -ForegroundColor Red
    exit 1
}

# Add Node.js to PATH for this session so post-install scripts can find 'node'
$env:Path = "$nodePath;$env:Path"

Write-Host "Using Node at: $nodeExe" -ForegroundColor Gray
Write-Host "Added $nodePath to PATH for this session." -ForegroundColor Gray
Write-Host "Installing dependencies... (This may take a minute)" -ForegroundColor Cyan

# Run npm install using the command directly now that it's in PATH, or via full path
& $npmCmd install --legacy-peer-deps
if ($LASTEXITCODE -ne 0) {
    Write-Host "npm install failed with exit code $LASTEXITCODE" -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host "Starting Next.js Development Server..." -ForegroundColor Green
Write-Host "Open http://localhost:3000 in your browser when ready." -ForegroundColor Yellow
& $npmCmd run dev
