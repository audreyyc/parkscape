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

