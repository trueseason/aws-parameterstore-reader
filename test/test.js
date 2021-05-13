"use strict";
const configReader = require('../index');

const cr = new configReader();

async function sampleFunction(path) {
    let config = await cr.read(path);
    console.log(config);
}

sampleFunction('/test');
