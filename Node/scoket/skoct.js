/**
 * Created by user on 2017/11/25.
 */

//建立服务端
const net=require('net');
var server=net.createServer(function(scoket){
    scoket.write(`hello  你来了`);
    scoket.on('data',chunk=>{
        console.log(chunk.toString());
        scoket.write('你说啥?')
    })
});
    server.listen(8888, (err)=>{
    if(err){console.log('端口被占用')}
    console.log('服务器启动')
});