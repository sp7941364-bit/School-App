@echo off
title Basava Shree School - Backend Database Server
color 0b
echo ========================================================
echo    Basava Shree School - SQLite REST API Server
echo ========================================================
echo.

set "PATH=%LOCALAPPDATA%\Programs\NodeJS;%PATH%"

if not exist "%LOCALAPPDATA%\Programs\NodeJS\node.exe" (
    echo [ERROR] Node.js runtime not found in %LOCALAPPDATA%\Programs\NodeJS.
    pause
    exit /b 1
)

cd /d "%~dp0backend"

echo [INFO] Verifying database...
if not exist "database\school.db" (
    echo [INFO] Initializing SQLite database and seed records...
    "%LOCALAPPDATA%\Programs\NodeJS\node.exe" seed.js
)

echo [INFO] Launching REST API on http://localhost:5000/api ...
echo [INFO] Press Ctrl+C to stop the server at any time.
echo.

"%LOCALAPPDATA%\Programs\NodeJS\node.exe" server.js

pause
