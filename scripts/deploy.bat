@echo off

echo iniciando deploy
start cmd /k "call backend.bat"

start cmd /k "call frontend.bat"
