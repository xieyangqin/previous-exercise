/**
 * Created by user on 2017/11/10.
 */

const fs=require('fs');
const path=require('path');

/*
fs.writeFile(path.join(__dirname,'/文件写入文本.txt'),JSON.stringify([1,2,3]),(err)=>{
    if(err){throw err;}
    console.log('yes')
});
*/


// fs.writeFileSync('./文件写入文本.txt', new Date());

/*
try {
    fs.writeFileSync('./文件写入文本.txt', new Date());
} catch (error) {
    // 文件夹不存在，或者权限错误
    console.log(error);
}
*/

/*
var streamWriter=fs.createWriteStream('./文件写入文本.txt');
setInterval(()=>{
    streamWriter.write(new Date()+'\n')
},1000);
*/

/*
fs.appendFile('./文件写入文本.txt','追加',(err)=>{
    if(err){ throw err}
});
*/
