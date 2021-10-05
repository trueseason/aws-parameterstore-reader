# aws-parameterstore-reader

This repository is a sample of AWS Parameter Store Config Reader, originally from aws-parameterstore-json-reader with some improvements.

aws-adk has been moved to dev-dependencies for smaller size of output package. Please add it to your dependencies if required.

## dependencies
aws-sdk

## Usage

```javascript
const configReader = require('aws-parameterstore-reader');

//AWS.config.apiVersions = { ssm: '2014-11-06' };
const cr = new configReader();
 
async function sampleFunction(path) {
    return await cr.read(path);
}
```