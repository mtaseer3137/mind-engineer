@echo off
set PATH=D:\MINDSET website\.tools\node-v20.18.0-win-x64;D:\MINDSET website\node_modules\.bin;%PATH%
set NODE_OPTIONS=--dns-result-order=ipv4first
call npm %*
