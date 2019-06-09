/**
 * Created by user on 2017/11/8.
 */


setInterval(function(){
     Object.keys(require.cache).forEach((key)=>{
        delete require.cache[key];
    })
    var date=require('./缓存2');
    // console.log(require.cache);
    console.log(date);
},1000);
