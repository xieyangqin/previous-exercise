/**
 * Created by user on 2017/11/6.
 */
'use strict';
const http=require('http');
let count=0;
const server=http.createServer((request,response)=>{
    response.write(`你是第${count++}个访问用`);
    while(true);
    response.end();
});
server.listen(2080,(error)=>{
    if(error){
        throw error;

    }console.log('成功启动web服务');
})