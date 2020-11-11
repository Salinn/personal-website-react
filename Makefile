.PHONY: start exportConfig installDependencies help
default: start

##
#### Variables used for local development
##
INJECT_FILE_SRC="inject.template.js"
INJECT_FILE_DST="public/env.js"

# export REACT_APP_ENV = Dev
export REACT_APP_ENV = Prod
# export REACT_APP_API_URL = http://localhost
export REACT_APP_API_URL = https://1twuds1wg0.execute-api.us-east-1.amazonaws.com

start: exportConfig installDependencies
	npm run start

exportConfig:
	envsubst < "$(INJECT_FILE_SRC)" > "$(INJECT_FILE_DST)"

installDependencies: ## Installs the dependencies required 
	npm install --prefer-offline --no-audit --loglevel silent --no-optional

help:  ## Prints the names and descriptions of available targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
