.DEFAULT_GOAL := all
MAKEFLAGS += --no-builtin-rules
SHELL         := bash

all:

# check files
CFILES :=                                 \
    .gitignore                            \
    .gitlab-ci.yml  					  \
	README.md                      

# check existence of build files
check: $(CFILES)

# remove temporary files
clean:
	rm -f  *.tmp

# build backend Docker image
build-backend:
	docker build -t backend-container ./backend

# run backend Docker image
docker-backend:
	docker run -p 5000:5000 backend-container

# Runs Python unit tests
make python-tests:
	echo "Running Python unit tests..."
	python backend/tests.py

# Runs Selenium GUI tests
make selenium-tests:
	echo "Running Selenium unit tests..."
	python frontend/guitests.py

status: 
	make clean
	@echo
	git pull
	git status

pull:
	make clean
	@echo
	git pull
	git status