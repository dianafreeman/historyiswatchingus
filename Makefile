
# Developer Actions
# ------------------------------------------------------------------------------
.PHONY: install
install: 
	@docker-compose build

.PHONY: dev-env
dev-env: install
	@docker-compose up --build

.PHONY: storybook
storybook: 
	@docker-compose up --build storybook

.PHONY: bash-client
bash-client: 
	@docker-compose run --rm client bash

.PHONY: bash-web
bash-client: 
	@docker-compose run --rm web bash
