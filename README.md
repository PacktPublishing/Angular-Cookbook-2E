# Angular Cookbook Second Edition

## Getting Started
Make sure you have [NodeJS](https://nodejs.org) installed in your machine.
Then from the project root, run the following:

```bash
npm install
```
This should install the dependencies of both the `start` and `final` monorepos.
## Serve Projects
Serve both the start and final projects, or one of them as follows:

```bash
npm run serve APP_NAME
## example
npm run serve cc-inputs-outputs # runs the starter app on localhost:4200
npm run serve cc-inputs-outputs final # runs the final app on localhost:4200
npm run serve cc-inputs-outputs both # runs both start and final apps on localhost:4200 and localhost:4201
```


## For Author/Maintainers

### Generate Projects
```shell
# Create starter app
npm run create CHAPTER_NO APP_NAME "APP_TITLE"
# Example
npm run create 01 cc-inputs-outputs "CC Inputs Outputs"
# Create apps for both start and final folders
npm run create 01 cc-inputs-outputs "CC Inputs Outputs" both
```

### Remove Projects (from both start and final folders)
```shell
# Create starter app
npm run remove CHAPTER_NO APP_NAME
# Example
npm run remove 01 cc-inputs-outputs
```

### Copy project from 'start' to 'final' mono repo
```shell
# Create starter app
npm run copy CHAPTER_NO APP_NAME
# Example
npm run copy 01 cc-inputs-outputs
```
