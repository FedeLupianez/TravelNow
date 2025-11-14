@echo off
echo Installing dependencies...
cd /d "%~dp0..\Backend"
python -m venv .venv
.\.venv\Scripts\pip.exe install --no-cache-dir -r requirements.txt
echo Dependencies are installed!


echo Deploying Backend...
.\.venv\Scripts\uvicorn.exe app.main:main_app --host 0.0.0.0 --port 8080
echo Backend deploying in http://localhost:8080