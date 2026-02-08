@echo off
set "NODE_PATH=C:\Program Files\nodejs\node.exe"
set "NPM_PATH=C:\Program Files\nodejs\npm.cmd"

echo Stopping existing Node processes...
taskkill /F /IM node.exe

echo Installing dependencies...
call "%NPM_PATH%" install @radix-ui/react-slot

echo Starting Next.js Development Server...
echo Open http://localhost:3000 in your browser when ready.
call "%NPM_PATH%" run dev
pause
