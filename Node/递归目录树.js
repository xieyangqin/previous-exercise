/**
 * Created by user on 2017/11/10.
 */
const fs = require('fs');
const path = require('path');

var target=path.join(__dirname,process.argv[2]||'./');
print(target,0);
function print(target,deep){
    var prefix=new Array(deep++).join('|   ');
    var dirinfos=fs.readdirSync(target);
    var dir=[];
    var files=[];
    dirinfos.forEach((item)=>{
        // console.log(item)
        var ite=fs.statSync(path.join(target,item));
        if(ite.isFile()){
            files.push(item);
        }
        else{
            dir.push(item);
        }
    });
    dir.forEach(dir=>{
        console.log(prefix+'┣━'+dir);
        print(path.join(target,dir),deep+1);
    });
    var length=files.length;
    var i=0;
    files.forEach(dir=>{
        i++;
        if(i<length){
            console.log(prefix+'┣'+dir);
        }else{
            console.log(prefix+'┗'+dir);
        }
    });
}