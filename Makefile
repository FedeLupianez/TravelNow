BACKEND_DIR=./Backend
FRONTEND_DIR=./Frontend
VENV_DIR=.venv
UVICORN=./$(VENV_DIR)/bin/uvicorn
APP_MODULE=main:app
HOST=http://localhost:8000
OS=$(shell uname)

# Deploy backend
back:
	@echo "deploying backend"
	@cd $(BACKEND_DIR) && $(UVICORN) $(APP_MODULE) --host 0.0.0.0 --port 8080 --reload

front:
	@echo "deploying frontend"
	@cd $(FRONTEND_DIR)
	@if [ "$(OS)" = "Linux" ]; then \
		@echo "starting browser in linux"; \
		brave "$(HOST)/Frontend"; \
	elif [ "$(OS)" = "Windows" ]; then \
		@echo "starting browser in windows"; \
		start "$(HOST)/Frontend"; \
	elif [ "$(OS)" = "Darwin" ]; then \
		@echo "starting browser in macos"; \
		open "$(HOST)/Frontend"; \
	fi
	@python3 ./server.py


# Deploy both frontend and backend
all:
	@echo "deploying all"
	@make back &
	@make front

# Initialize virtual environment
init:
	@echo "creating virtual environment"
	@cd $(BACKEND_DIR)
	@python3 -m venv $(VENV_DIR)
	@echo "installing requirements"
	@$(VENV_DIR)/bin/pip install -r requirements.txt
	@echo "requirements installed"
	@echo "run 'make all' to start"
