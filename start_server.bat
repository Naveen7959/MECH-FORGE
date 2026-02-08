@echo off
set "NODE_DIR=C:\Program Files\nodejs"
set "NODE_EXE=%NODE_DIR%\node.exe"
set "NPM_CMD=%NODE_DIR%\npm.cmd"

if not exist "%NODE_EXE%" (
    echo Node.js not found at "%NODE_EXE%". Please install Node.js manually.
    pause
    exit /b 1
)

:: Add Node.js to PATH for this session
set "PATH=%NODE_DIR%;%PATH%"

echo Using Node at: %NODE_EXE%
echo Added Node.js to PATH for this session.

echo Installing dependencies...
call "%NPM_CMD%" install

if %ERRORLEVEL% NEQ 0 (
    echo npm install failed.
    pause
    exit /b %ERRORLEVEL%
)

echo Starting Next.js Development Server...
echo Open http://localhost:3000 in your browser when ready.
call "%NPM_CMD%" run dev
pause
