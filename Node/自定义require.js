/**
 * Created by user on 2017/11/6.
 */
'use strict';
function $require(id){
    const fs=require('fs');
    // const filename=__dirname+id;
    const path=require('path');
    const filename=path.join(__dirname,id);//拼接
    const dirname=path.dirname(filename);
    let code = fs.readFileSync(filename,'utf8');
    let module={
        id:filename,
        exports:{ }
    };
    let exports=module.exports;
    code=`(function($require,module,exports,__dirname,__filename){
        ${code};
    })($require,module,exports,dirname,filename)`;
    eval(code);
    return module.exports;
}

var m=$require('自定义require2.js');
m.say('hi');