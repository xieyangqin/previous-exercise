/**
 * Created by user on 2017/11/5.
 */
/*var  argv=process.argv;
console.log(argv);

var argvs=process.argv.slice(2);
console.log(argvs.toString());
var msg='hello';
process.stdout.write('${msg} world');*/


// 每个成员就是帧
/*

var frames = [];

frames[frames.length] = `
╭~~~╮
(o^.^o)
`;
frames[frames.length] = `
╭~~~╮
(o~.~o)
`;
frames[frames.length] = `
╭~~~╮
(o@.@o)
`;
frames[frames.length] = `
╭ ﹌╮
(o'.'o)
`;


var fps = 10;
// 当前显示哪一帧
var current = 0;
var render = () => {
    // 将当前控制台清空
    //var height = process.stdout.getWindowSize()[1];

    process.stdout.write('\033[2J');
    process.stdout.write('\033[0f');

    // 输出新的内容
    if (current === frames.length) { current = 0; }
    process.stdout.write(frames[current++]);
   /!* for (var i = 0; i < height; i++) {
        process.stdout.write('\r\n');
    }*!/
};

setInterval(render, 1000 / fps);
*/

//
/*
 var size = process .stdout.getWindowSize();
 console.log(size)*/;

 /*
setInterval(function(){
    console.log(1);
},1000);

var exiting=false;
process.on('SIGINT',()=>{
    if(exiting){
        console.log('推出');
        process.exit();
    }else{
        console.log('第一次按下');
        exiting=true;
        setTimeout(()=>{
            exiting=false;
        },1000)
    }
})*/


/*

 var user={
     'admin':'123',
     'user1':'321'
 };
 var flag=true;
 var username=''
 process.stdout.write('输入用户名'+'\n');
 process.stdin.on('data',(input)=>{
     input=input.toString().trim();

     if(flag){
         //process.stdout.write(`*${input}*`);
         if(Object.keys(user).indexOf(input)==-1){
             process.stdout.write('用户不存在'+'\n');
             process.stdout.write('输入用户名'+'\n');
             flag=true;
             username=''
         }
         else{
             flag=false;
             // console.log('存在')
             process.stdout.write('输入密码'+'\n');
             username=input;
         }
     }else{
         console.log('传入的是密码');
         if(input==user[username]){
             console.log('登陆成功');
         }else{
             process.stdout.write('输入密码'+'\n');
         }
     }
 })
*/



// console.time('m');
//
// setTimeout(()=>{
//     console.log('执行完了')
// },0)
// console.timeEnd('m')

/*

function isEvenOrOdd(number, callback){
    if(typeof number ==='number'){
        if(number % 2){
            // 奇数
            callback(null, '当前传入的是奇数');
        } else{
            callback(null, '当前传入的是偶数');
        }
    }else{
        throw new Error('你传入的不是数字1');
        callback(new Error('你传入的不是数字2'));
    }
}

// 约定将错误信息作为回调的第一个参数
isEvenOrOdd(10, (error,data)=>{
    if(error) throw error;
    console.log(data);
});


isEvenOrOdd(11, (error,data)=>{
    if(error) throw error;
    console.log(data);
});

isEvenOrOdd('asda', (error,data)=>{
    if(error) throw error;
    console.log(data);
});*/


console.time('start');
const fs= require('fs');
fs.stat('./list.txt',(err,stats)=>{
    if(err){
        console.log(err+'文件不存在');
        fs.writeFile('./list.txt',new Date(),(err)=>{
            if(err){
                console.log(err+'创建失败');
                return false;
            }
            console.log('文件创建成功');
        });
        return false;
    }
    fs.unlink('./list.txt',(err)=>{
        if(err){
            console.log(err+'删除失败');
            return false;
        }
        fs.writeFile('./list.txt',new Date(),(err)=>{
            if(err){
                console.log(err+'创建失败');return false;
            }
            console.log('删除后再次创建成功');
        })
    })
})
console.timeEnd('start');