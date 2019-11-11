
# Developer Actions
# ------------------------------------------------------------------------------
.PHONY: build
install: 
	@docker-compose build

.PHONY: dev-env
dev-env: build
	@docker-compose up

.PHONY: dev-storybook
	@docker-compose run --rm client 

.PHONY: bash-client
bash-client: build
	@docker-compose run --rm client bash
