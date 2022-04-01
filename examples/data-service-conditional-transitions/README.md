# Data service conditional transitions
This small application shows you how to leverage the transitions functionality of the data service to trigger tasks based. 

This example uses the following ExH services: 
* Data service 
* Task service
* Mail service
* Template service

## Prerequisites
* The `exh` CLI tool must be installed ([link](https://github.com/ExtraHorizon/exh-cli))
* Your ExH environment credentials are added to `~/.exh/credentials`

## Application Setup
### Data Schema's

#### `actual-heartstats`
This schema keeps record of the added heartrate measurements. The schema also includes a condition that wil trigger a transition from `normal` to `critical` when the `heartrate` property is above `200`

### Tasks

#### `alert-task`
This task will be triggered by the data service and is responsible for sending a mail to the user that reported a high heartrate.

### Demo Web App
In the folder `demo-webapp` you can find a [Next.JS](https://nextjs.org/) application that has a small form to fill in a measurement.


## How to run

### Step 1: Configure the ExH backend
```bash
# Make sure the exh-cli is installed
npm i -g exh-cli

# Synchronise the schemas
exh data schemas sync --dir ./schemas 

# Create / Update the task
exh tasks update --name alert-task \
  --code=output.zip \
  --entryPoint=build/index.handler \
  --runtime="nodejs14.x" \
  --env="API_HOST=${API_HOST}" \
  --env="API_OAUTH_CONSUMER_KEY=${API_OAUTH_CONSUMER_KEY}" \
  --env="API_OAUTH_CONSUMER_SECRET=${API_OAUTH_CONSUMER_SECRET}" \
  --env="API_OAUTH_TOKEN=${API_OAUTH_TOKEN}" \
  --env="API_OAUTH_TOKEN_SECRET=${API_OAUTH_TOKEN_SECRET}"

```


### Step 2: Run the front-end webapp

Add an `.env.local` file in the folder `demo-webapp/` with the following environment variables: 

```
API_HOST=...
API_OAUTH_CONSUMER_KEY=...
API_OAUTH_CONSUMER_SECRET=...
API_OAUTH_TOKEN=...
API_OAUTH_TOKEN_SECRET=...
```

Then navigate into the `demo-webapp/` folder and execute following commands

```bash
# Install dependencies 
npm i
# Run the development server
npm run dev
```

The webapp is now available at `http://localhost:3000`
