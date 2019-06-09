/**
 * Created by user on 2017/11/21.
 */

const fs=require('fs');
const path=require('path');
const marked=require('marked');
const target=path.join(__dirname,process.argv[2]||'./1.txt');
fs.watchFile(target,{interval:200},(curr,prev)=>{
   if(curr.mtime===prev.mtime){
       return false;
   }
   fs.readFile(target,'utf-8',(err,content)=>{
        if(err){
            throw err;
        }
        var html=marked(content);
        fs.readFile(path.join(__dirname,'./1.css'),'utf8',(err,content)=>{
            if(err) throw err;
            html=template.replace(' {{{content}}}',html).replace('{{{style}}}',content);
            fs.writeFile(target.replace(path.extname(target),'.html'),html,'utf8')
        });

   });
});

var template=`<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <style>{{{styles}}}</style>
</head>
<body>
<div class="vs">
    {{{content}}}
</div>
</body>
</html>
`;
