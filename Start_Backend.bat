@echo off
setlocal
title Basava Shree School - Official Server & Database Backend
color 0b
echo ========================================================
echo    Basava Shree School - SQLite REST API & Web Server
echo ========================================================
echo.

set "PATH=%LOCALAPPDATA%\Programs\NodeJS;%ProgramFiles%\nodejs;%PATH%"

where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js runtime not found.
    pause
    exit /b 1
)

cd /d "%~dp0backend"

echo [INFO] Verifying database...
if not exist "database\school.db" (
    echo [INFO] Initializing SQLite database and seed records...
    node seed.js
)

echo [INFO] Launching unified portal and database server...
echo [INFO] Web Portal:    http://localhost:3000/
echo [INFO] REST API:      http://localhost:3000/api and http://localhost:5000/api
echo [INFO] Real-Time Bus: http://localhost:3000/api/sync/events
echo.
echo Press Ctrl+C to stop the server at any time.
echo.

node server.js

pause
