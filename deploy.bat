@echo off

echo iniciando deploy
echo instalando dependencias...
cd Backend
python -m venv .venv
.venv/Scripts/activate
pip install --no-cache-dir -r requirements.txt


echo Desplegando Backend...
uvicorn app.main:main_app --reload --host 0.0.0.0 --port 8080
echo Backend desplegado en http://localhost:8080

cd ..

echo Desplegando Frontend...
python server.py
echo Frontend desplegado en http://localhost:8000

pause
