
/**
 * Created by user on 2017/11/24.
 */


const fs = require('fs');
const path = require('path');
var reader=fs.createReadStream('E:\\前端\\js\\node基础班czbk\\04-2016-03-08\\videos\\上午05-自动刷新.avi');
var writer= fs.createWriteStream('E:\\前端\\js\\node基础班czbk\\04-2016-03-08\\videos\\上午05-自动刷新z.avi');
var writer2= fs.createWriteStream('E:\\前端\\js\\node基础班czbk\\04-2016-03-08\\videos\\上午05-自动刷新3.avi');
reader.pipe(writer);
reader.pipe(writer2);