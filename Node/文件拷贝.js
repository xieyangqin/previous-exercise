/**
 * Created by user on 2017/11/23.
 */

const fs = require('fs');
const path = require('path');

var reader=fs.createReadStream('E:\\前端\\js\\node基础班czbk\\04-2016-03-08\\videos\\上午05-自动刷新.avi');
var writer= fs.createWriteStream('E:\\前端\\js\\node基础班czbk\\04-2016-03-08\\videos\\上午05-自动刷新z.avi');
fs.stat('E:\\前端\\js\\node基础班czbk\\04-2016-03-08\\videos\\上午05-自动刷新.avi',(err,stats)=>{
    if(err) {throw err;}
    if(stats){
        var total=0;
        reader.on('data',(chunk)=>{
            writer.write(chunk,(err)=>{
                console.log('读取了'+(total+=chunk.length)/(stats.size)*100+"%");
            })
        })
    }
})