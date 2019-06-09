/**
 * Created by user on 2017/11/9.
 */

const fs=require('fs');
const path=require('path');

console.time('tb');
fs.readFile(path.join(__dirname,'list.txt'),(err,content)=>{
    if(err) throw err;
    console.log(content.toString('utf8'));
});
console.timeEnd('tb');

console.time('yb');
try{
   var content = fs.readFileSync(path.join(__dirname,'list.txt'));
    console.log(content.toString('utf8'));
}catch(err){
    throw err;
}


console.timeEnd('yb');
