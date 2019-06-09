/**
 * Created by user on 2017/11/8.
 */
'use strict';
function $require(id){
    const fs= require('fs');
    const path=require('path');
    const filename=path.join(__dirname,id);

    $require.cache=$require.cache||{};
    if($require.cache[filename]){
        return $require.cache[filename].exports;
    }

    const dirname=path.dirname(filename);
    let code=fs.readFileSync(filename,'utf8');

    let module={
        id:filename,
        exports:{}
    };
    let exports=module.exports;
    code=`(function(){
    ${code};
    
    /*    
    function add(){
            console.log('hi')
        }
    module.exports={ add };
    */
   
    })()`;
    eval(code);
    $require.cache[filename]=module;
    return module.exports;
}
var m=$require('require2.js');
setInterval(()=>{
    console.log(m);
},1000);

