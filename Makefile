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

# Deploy backend
back:
	@echo "deploying backend"
	@cd $(BACKEND_DIR) && $(UVICORN) $(APP_MODULE) --host 0.0.0.0 --port 8080 --reload

front:
	@echo "deploying frontend"
	@echo "view page in $(HOST)/Frontend"
	@python ./server.py
	@cd $(FRONTEND_DIR)
	@if [ "$(OS)" = "Linux" ]; then \
		echo "starting browser in linux"; \
		brave "$(HOST)/Frontend"; \
	else \
		echo "starting browser in windows"; \
		cmd /c start "" "$(HOST)/Frontend"; \
	fi


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
	@if [ "$(OS)" = "Linux" ]; then \
		$(BACKEND_DIR)/$(EXE_DIR)/bin/pip install -r $(BACKEND_DIR)/requirements.txt; \
	else \
		$(BACKEND_DIR)/$(EXE_DIR)/Scripts/pip install -r $(BACKEND_DIR)/requirements.txt; \
	fi
	@echo "Requirements installed"
	@echo "Run 'make all' to start"

