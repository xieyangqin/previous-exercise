/**
 * Created by user on 2017/11/10.
 */

'use strict';
const fs=require('fs');
const path=require('path');
fs.readFile(path.join(__dirname,'./血染的风采.txt'),(err,content)=>{
    if(err){ throw err;}
    var lines=content.toString().split('\n');
    //[01:52.73] 也许我的眼睛 再不能睁开
    var regex = /\[(\d{2})\:(\d{2})\.(\d{2})\]\s(.+)/;
    // console.log(regex.test('[01:52.73] 也许我的眼睛 再不能睁开'));
    lines.forEach((line=>{
        var begin=new Date().getTime();
        // console.log(regex.exec(line));
        var matches=regex.exec(line);
        if(matches){
            var m=parseFloat(matches[1]);
            var s=parseFloat(matches[2]);
            var ms=parseFloat(matches[3]);
            var time=m*60*1000+s*1000+ms;
            var singWord=matches[4];
            setTimeout(()=>{
                time=new Date().getTime()-begin;
                console.log(singWord);
            },time)
        }
    }));
});
