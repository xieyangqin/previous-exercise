/**
 * Created by user on 2017/11/25.
 */

//建立一个客户端
const net =require('net');
const socket=net.connect({port:8888},(err)=>{
    if(err){throw err}
    console.log('connected to server');

    process.stdout.write('clien>');
    process.stdin.on('data',chunk=>{
       socket.write(chunk.toString().trim());
        process.stdout.write('clien>');
    });

    socket.on('data',(data)=>{
        console.log('\n'+data.toString());
    })
});


// socket.on('data',(data)=>{
//     console.log(data.toString());
//     socket.end();
// });
// socket.on('end',()=>{
//     console.log('disconnected from server')
// })