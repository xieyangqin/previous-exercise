/**
 * Created by user on 2017/11/8.
 */
const path=require('path');
const p=path.join(__dirname,'./path.js');
console.log(p);
console.log(path.extname(p));
console.log(path.parse(p));
console.log(path.format(path.parse(p)));
console.log(path.isAbsolute(p));
console.log(path.relative(__dirname, 'D:\\WebStorm 2016.3.3\\workplace\\summer\\Node\\模块化计算机\\testdir.js'));
console.log(path.resolve(__dirname,'D:\\WebStorm 2016.3.3'));
console.log(path.sep);