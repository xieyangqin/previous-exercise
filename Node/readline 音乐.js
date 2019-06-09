/**
 * Created by user on 2017/11/10.
 */

const fs= require('fs');
const path=require('path');
const readline=require('readline');

var filename=path.join(__dirname,'血染的风采.txt');
var streamReader=fs.createReadStream(filename);


var rl=readline.createInterface({input:streamReader});
var begin=new Date().getTime();
rl.on('line',(line)=>{
    tesk(line);
})

var regex = /\[(\d{2})\:(\d{2})\.(\d{2})\]\s(.+)/;
function tesk(line){
    var matches=regex.exec(line);
    if(matches){
        var m=parseFloat(matches[1]);
        var s=parseFloat(matches[2]);
        var ms=parseFloat(matches[3]);
        var time=m*60*1000+s*1000+ms;
        var singWord=matches[4];
        var time2=new Date().getTime()-begin;
        setTimeout(()=>{

            console.log(singWord);
        },(time-time2));
    }
}