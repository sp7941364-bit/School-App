@echo off
setlocal
title Basava Shree School Portal Launcher

cd /d "%~dp0"

echo ==========================================================
echo    Basava Shree School - Official Campus Portal
echo ==========================================================
echo.

:: 1. Check if server is already running on port 3000
powershell -NoProfile -ExecutionPolicy Bypass -Command "$c = New-Object System.Net.Sockets.TcpClient; try { $c.Connect('127.0.0.1', 3000); $c.Close(); exit 0 } catch { exit 1 }" >nul 2>&1

if %ERRORLEVEL% NEQ 0 (
    echo [1/2] Starting local campus portal server...
    powershell -NoProfile -ExecutionPolicy Bypass -Command "Start-Process powershell -ArgumentList @('-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', '%~dp0serve.ps1') -WindowStyle Hidden"
    powershell -NoProfile -Command "Start-Sleep -Milliseconds 1500"
) else (
    echo [1/2] Local server is already running!
)

:: 2. Open portal in default browser
echo [2/2] Opening portal in default browser...
start "" "http://127.0.0.1:3000/"

echo.
echo ==========================================================
echo Portal launched successfully at http://127.0.0.1:3000/
echo ==========================================================
ping -n 3 127.0.0.1 >nul

