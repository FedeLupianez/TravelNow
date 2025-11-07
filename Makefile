BACKEND_DIR=./Backend
FRONTEND_DIR=./Frontend
VENV_DIR=.venv
UVICORN=$(VENV_DIR)/bin/uvicorn
APP_MODULE=main:app


back:
	@echo "deploying backend"
	@cd $(BACKEND_DIR) && $(UVICORN) $(APP_MODULE) --host 0.0.0.0 --reload

front:
	@echo "deploying frontend"
	@cd $(FRONTEND_DIR) && live-server ./ --port=8080 --reload

all:
	@echo "deploying all"
	@make back &
	@make front
