const express = require("express");
const path = require('path');
const routes = require('../routes/index')

module.exports = function(app) {

    app.use('/', express.static(path.resolve(__dirname, '../../public')));
    app.set('views', path.join(__dirname, '../views'));
    
    app.use(routes());
}