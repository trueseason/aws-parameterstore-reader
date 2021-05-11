"use strict";
const aws = require('aws-sdk');
const configReader = require('../index');

let test = async () => {
    aws.config.update({
        region: 'ap-southeast-2',
    });
    let cr = new configReader();
    let params = await cr.read('/Test');
    console.log(params);
}
test();
