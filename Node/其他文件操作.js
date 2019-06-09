/**
 * Created by user on 2017/11/10.
 */
const fs=require('fs');
const path=require('path');
/*

fs.rename('./模块化计算机/01.txt','./frames/1.txt',()=>{
    console.log(1)
});*/
/*
var target=path.join(__dirname,process.argv[2]||'./');
test(target);
function test(target){
    fs.readdir(target, (err, file) => {
        // console.log(file);
        file.forEach((item) => {
            fs.stat(path.join(target, item), (err, stats) => {
                if (err) {
                    throw err
                }
                console.log(stats.mtime + '\t' + stats.size + '\t' + item);
                if (stats.size == 0) {
                    console.log('ooo');
                    // console.log(path.join(target, item));
                    test(path.join(target, item));
                }
            });
        })
    });
}

  */

//递归目录树

