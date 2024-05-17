console.log(global.luckyNum);
global.luckyN ='23';
console.log(global.luckyNum)

process.on('exit', function(){
    //do somthing
    })
    const { EventEmitter } = require('events');
    const eventemitter = new EventEmitter();
 eventemitter.on('lunch', () => {
    console.log('Eat sleep code repeat')
 })
 eventemitter.emit('lunch');
 eventemitter.emit('lunch');

 const express = require('express');
 const app = express();
 app.get('/', (request, response )=> {


 })
 const {readFile} = required('fs');
 
 