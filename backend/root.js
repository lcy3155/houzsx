var express = require('express');
var mysql=require('mysql')
var connection=mysql.createPool({
    host:"localhost",
    user:'root',
    password:'123456',
    database:'test',
})
module.exports = connection;