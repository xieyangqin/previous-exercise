/**
 * Created by user on 2017/11/6.
 */
const avgs=process.argv.slice(2);
let a=avgs[0];
let c=avgs[1];
let b =avgs[2];
let result;
const calc=require('./module.js');
if(avgs.length!==3){
    console.log('参数不合法');
    throw new Error('参数不合法哦');
}
switch(c){
    case '+':
        result= calc.add(a,b);
        break;
    case '-':
        result= calc.sub(a,b);
        break;
        default:
        throw new Error('无该算法');
}
console.log(result);