@echo off
setlocal enabledelayedexpansion
title Basava Shree School Portal Launcher

cd /d "%~dp0"

echo ==========================================================
echo    Basava Shree School - Official Campus Portal
echo ==========================================================
echo.

:: 1. Find Node.js executable
set "NODE_EXE=node"
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    if exist "%LOCALAPPDATA%\Programs\NodeJS\node.exe" (
        set "NODE_EXE=%LOCALAPPDATA%\Programs\NodeJS\node.exe"
    ) else if exist "%ProgramFiles%\nodejs\node.exe" (
        set "NODE_EXE=%ProgramFiles%\nodejs\node.exe"
    ) else if exist "%ProgramFiles(x86)%\nodejs\node.exe" (
        set "NODE_EXE=%ProgramFiles(x86)%\nodejs\node.exe"
    )
)

:: 2. Check if server is already running on port 3000
powershell -NoProfile -ExecutionPolicy Bypass -Command "$c = New-Object System.Net.Sockets.TcpClient; try { $c.Connect('127.0.0.1', 3000); $c.Close(); exit 0 } catch { exit 1 }" >nul 2>&1

if %ERRORLEVEL% NEQ 0 (
    echo [1/2] Launching unified campus server and database backend...
    powershell -NoProfile -ExecutionPolicy Bypass -Command "Start-Process -FilePath '%NODE_EXE%' -ArgumentList '%~dp0backend\server.js' -WorkingDirectory '%~dp0backend' -WindowStyle Hidden"
    powershell -NoProfile -Command "Start-Sleep -Milliseconds 1800"
) else (
    echo [1/2] Unified campus server is already running!
)

:: 3. Open portal in default browser
echo [2/2] Opening portal in default browser...
start "" "http://127.0.0.1:3000/"

echo.
echo ==========================================================
echo  Basava Shree School Portal launched at http://127.0.0.1:3000/
echo  SQLite Database & Live Sync active!
echo ==========================================================
ping -n 3 127.0.0.1 >nul
