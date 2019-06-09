/**
 * Created by user on 2017/11/24.
 */

const ProgressBar=require('progress');
const bar=new  ProgressBar('process:[:bar]',{total:50,width:20});

const timer=setInterval(function(){
    bar.tick(5);//
    if(bar.complete){
        console.log('\ncomplete\n');
        clearInterval(timer);
    }
},100);


// width: 显示宽度, total: 总数据量, tick: 每次的数据量. 当所有tick的值加起来等于total则为100%.
// var ProgressBar = require('progress');
//
// var cols = parseInt(sh.exec("echo $COLUMNS").stdout); // 获取终端列数
// var progressBar = new ProgressBar(':bar :percent ', { width: cols-5, total: 300, complete: "#" });
// var timer = setInterval(function () {
//     progressBar.tick(10);
//     if (progressBar.complete) {
//         console.log('\ncomplete\n');
//         clearInterval(timer);
//     }
// }, 100);