BACKEND_DIR=./Backend
FRONTEND_DIR=./Frontend
APP_MODULE=app.main:main_app
HOST=http://localhost:8000
OS=$(shell uname)

# Configuración de paths según el OS
EXE_DIR=.venv/Scripts
ifeq ($(OS),Linux)
	EXE_DIR = .venv/bin
endif

UVICORN=./$(EXE_DIR)/uvicorn

back:
	@echo "Deploying Backend"
	@cd $(BACKEND_DIR) && $(UVICORN) $(APP_MODULE) --host 0.0.0.0 --port 8080 --reload

front:
	@echo "Deploying Frontend"
	@echo "view page in $(HOST)/Frontend"
	@python ./server.py


# Deploy both frontend and backend
all:
	@echo "deploying all"
	@make back &
	@make front

# Initialize virtual environment
init:
	@if [ ! -d .venv ]; then \
		echo "Creating virtual environment..."; \
		cd $(BACKEND_DIR); \
		python -m venv .venv; \
	else \
		echo "Virtual environment already exists."; \
	fi
	@echo "Installing requirements..."
	$(BACKEND_DIR)/$(EXE_DIR)/pip install -r $(BACKEND_DIR)/requirements.txt;
	@echo "Requirements installed"
	@echo "Run 'make all' to start"

