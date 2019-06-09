/**
 * Created by user on 2017/11/6.
 */
'use strict';
const args=process.argv.slice(2);
const args1=process.argv;
console.log(args1);
let parameter1=args[0];
let  parameter2=args[1];
let parameter3=args[2];
console.log(args);
let result=eval(`${parameter1} ${parameter2} ${parameter3}`);
console.log(result);