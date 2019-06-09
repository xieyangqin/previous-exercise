/**
 * Created by user on 2017/11/15.
 */
const fs=require('fs');
const path=require('path');

function mkdir(pathname,callback){
    var root=path.dirname(module.parent.filename);
    pathname=path.isAbsolute(pathname)?pathname:path.join(root,pathname);
    // pathname=pathname.replace(__dirname,'');
    var relativepath=path.relative(root,pathname);
    console.log(relativepath);
    var folders=relativepath.split(path.sep);
    try{
        var pre='';
        folders.forEach(folder=>{
            // console.log(folder);
            try{
                fs.statSync(path.join(root,pre,folder))
            }catch(err){
                fs.mkdirSync(path.join(root,pre,folder));
            }
            pre=path.join(pre,folder);
        });
        // callback&&callback(null);
    }catch (err){
        callback&&callback(err);

    }
}
module.exports={ mkdir };