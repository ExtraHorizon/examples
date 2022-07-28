# Data Service Models 
This folder contains the example code that was used in the introductory ExH Explainer video on the data service.

## Prerequisites
* Credentials to an ExH Environment. You can request sandbox access [here](https://www.extrahorizon.com/onboarding-extra-horizon-medical-baas-platform#1882979070).
* `nodejs` and `npm` installed

## Configuring the CLI tool
In this example we use the `exh` CLI tool to synchronise our configuration with an ExH Environment. 

You can install the CLI through `npm`:

```sh
npm install -g @extrahorizon/exh-cli
```

To point the CLI tool to the correct environment, create a credentials file in the following location:

```sh
~/.exh/credentials
```

The file should have the following contents:
```
API_HOST=https://api.dev.exh-sandbox.extrahorizon.io
API_OAUTH_CONSUMER_KEY=
API_OAUTH_CONSUMER_SECRET=
API_OAUTH_TOKEN=
API_OAUTH_TOKEN_SECRET=
```

Use `exh --help` to get more information on how to use the tool.


## Create and synchronise a data schema 

This folder already contains a schema `vitals-measurements`. You can add more schema's by adding more JSON files to the `schemas` folder. Execute the following command to synchronise the schema's:

```
exh data schemas sync --dir schemas
```


## Resources
* [Data Service Documentation](https://docs.extrahorizon.com/extrahorizon/services/manage-data/data-service)