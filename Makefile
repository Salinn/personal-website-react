

AWS_DEFAULT_REGION = us-east-1

.PHONY: deploy

default: deploy

deploy: build echo ## Deploy Serverless Service
	serverless deploy \
		--verbose \
		--stage $(PREFIX) \
		--region $(AWS_DEFAULT_REGION)