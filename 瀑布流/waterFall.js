/**
 * Created by user on 2017/8/5.
 */

window.onload=function(){
    //完善图片布局，根据浏览器的宽度除以图片的宽度，
    imgLocation('container','box');
    var imgData={'data':[{"src":"14.jpg"},{"src":"15.jpg"},{"src":"18.jpg"},{"src":"17.jpg"}]};//模拟后台传入图片
    window.onscroll=function(){
        if(checkFlag()){
            var cparent=document.getElementById('container');
            for(var i=0;i<imgData.data.length;i++){
                var ccontent=document.createElement('div');
                ccontent.className='box';
                cparent.appendChild(ccontent);
                var boximg=document.createElement('div');
                boximg.className='box-img';
                ccontent.appendChild(boximg);
                var img=document.createElement('img');
                img.src='images/image-human/'+imgData.data[i].src+'';
                img.style.cssText='opacity:0;transform:scale(0)';
                boximg.appendChild(img);
                (function(img){//自执行//  作用域
                    setTimeout(function(){
                        img.style.cssText='opacity:1;transform:scale(1)';
                    },300);
               })(img)
            }
            imgLocation('container','box');
        }
    }
};

function checkFlag(){
    var cparent=document.getElementById('container');
    var ccontent=getChildElement(cparent,'box');
    var lastContentHeight=ccontent[ccontent.length-1].offsetTop;
    var scorllTop=document.documentElement.scrollTop||document.body.scrollTop;
   // console.log(scorllTop);
    var pageHeight=document.documentElement.clientHeight||document.body.clientHeight;
    //console.log(pageHeight);
    if(scorllTop+pageHeight>lastContentHeight){
        return true;
    }
}
function imgLocation(parent,content){
    //将container下所有的box取出来
    var cparent=document.getElementById(parent);
    var ccontent=getChildElement(cparent,content);//box
    //console.log(ccontent);


    var imgWidth=ccontent[0].offsetWidth;//classname为box的宽度、图片宽度
    var num=Math.floor(document.documentElement.clientWidth/imgWidth);//浏览器宽度；横排个数
    //console.log(num);
    cparent.style.cssText='width:'+num*imgWidth+'px;margin:0 auto';

    //获得图片高度
    var boxHeightArr=[];
    for(var i=0;i<ccontent.length;i++) {
        if (i < num) {
            boxHeightArr .push(ccontent[i].offsetHeight);//push??
        }else{
            var minHeight=getMin(boxHeightArr); //得到图片最小高度；
            console.log("hcjvl"+minHeight);
            var minIndex=getMinheightLocation(boxHeightArr,minHeight);
            ccontent[i].style.position='absolute';
            ccontent[i].style.top=minHeight+'px';
            ccontent[i].style.left=ccontent[minIndex].offsetLeft+'px';
            boxHeightArr[minIndex]=boxHeightArr[minIndex]+ ccontent[i].offsetHeight;//更新最小的高度
        }
    }
    //console.log(boxHeightArr);
}

function getMinheightLocation(boxHeightArr,minHeight){//图片最小高度的序列号
    for(var i in boxHeightArr){
        if(boxHeightArr[i]==minHeight){
            return i;
        }
    }
}
function getMin(boxHeightArr){
   var arrlength=boxHeightArr.length;
   for(var i=0,ret=boxHeightArr[0];i<arrlength;i++){
       ret=Math.min(ret,boxHeightArr[i]);
   }
   console.log(ret);
   return ret;
}

function getChildElement(parent,content){//得到子集空间
    var contentArr=[];
    var allcontent=parent.getElementsByTagName('*');
    for(var i=0;i<allcontent.length;i++){
        if(allcontent[i].className==content){
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}

