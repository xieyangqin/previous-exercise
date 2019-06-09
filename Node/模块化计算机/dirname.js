/**
 * Created by user on 2017/11/6.
 */
console.log(__dirname);
console.log(__filename);

const fs=require('fs');
fs.readFile('../list.txt','utf8',(err,content)=>{
    if(err){
        throw err;
    }
    console.log(content);
})
console.log(module);