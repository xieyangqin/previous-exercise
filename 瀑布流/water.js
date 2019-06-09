/**
 * Created by user on 2017/8/7.
 */
window.onload=function() {
    imageLocation();
    var imgData={'data':[{"src":"9.png"},{"src":"10.png"},{"src":"11.png"},{"src":"12.png"},{"src":"13.png"},{"src":"14.png"}]};//模拟后台
    console.log("00000"+imgData.length);
    window.onscroll = function () {
        if (checkFlag()) {
           console.log('ddd');
            var container=document.getElementById('container');
            //console.log("saaaa"+imgData.length);错误！！！！！错误！错误！
           // console.log(imgData.length);
            for (var i = 0; i < imgData.data.length; i++) {//注意：：：
                console.log(i);
                var createDiv = document.createElement('div');
                createDiv.className = 'box';
                container.appendChild(createDiv);
                var createDivImg = document.createElement('div');
                createDivImg.className = 'box-img';
                createDiv.appendChild(createDivImg);
                var img = document.createElement('img');
                createDivImg.appendChild(img);
                img.src = 'images/image-animal/' + imgData.data[i].src+"";
                img.style.cssText="opacity:0;transform:scale(0)";
                (function(img){
                    setTimeout(function(){
                        img.style.cssText='opacity:1;transform:scale(1)';
                    },100)
                })(img);
            }
            imageLocation();//!!!!!!!!
        }
    }
}

function checkFlag(){
    var container=document.getElementById('container');
    var box=getChildElement();
    var lastTop=box[box.length-1].offsetTop;
    console.log(lastTop);
    var scroll=document.documentElement.scrollTop||document.body.scrollTop;
    //console.log(scroll);
    var documentHeight=document.documentElement.clientHeight||document.body.clientHeight;
    //console.log(documentHeight);
    if(documentHeight+scroll>lastTop){
        return true;
    }
}

function imageLocation(){
    var container=document.getElementById('container');
    var box=getChildElement();//
    //console.log(box);
    var boxWidth=box[0].offsetWidth;
    var boswerWidth=document.body.clientWidth;
    var n=Math.floor(boswerWidth/boxWidth);
   // console.log(n);
    //console.log(boswerWidth)
    container.style.width=n*boxWidth+'px';

    var boxHeightArray=[];
    // for(var i=0;i<box.length;i++) {
    //     boxHeightArray.push(box[i].offsetHeight);
    //     // console.log(boxHeightArray.length);
    //     console.log( boxHeightArray);
    // }
    //var boxMinHeight=getBoxMinHeight(boxHeightArray);
        for( var i=0;i<box.length;i++) {
            if(i<n){
                boxHeightArray.push(box[i].offsetHeight);
            }
            else{
                var boxMinHeight=getBoxMinHeight(boxHeightArray);
                console.log(boxMinHeight);
                var minIndex=minBoxHeightIndex(boxMinHeight,boxHeightArray);
                console.log(minIndex);
                box[i].style.position='absolute';
                box[i].style.top=boxMinHeight+'px';
                box[i].style.left=box[minIndex].offsetLeft+'px';
                boxHeightArray[minIndex]=boxHeightArray[minIndex]+box[i].offsetHeight;//boxHeightArray存放位置
                //console.log( boxHeightArray[minIndex]);
            }
        }
}

function minBoxHeightIndex(boxMinHeight,boxHeightArray) {
    for (var i in boxHeightArray) {
        if (boxMinHeight == boxHeightArray[i]) {
            //console.log(i);
            return i;
        }
    }
}

function getBoxMinHeight(boxHeightArray) {
    for (var i=0 ,ret =boxHeightArray[0];i<boxHeightArray.length;i++) {
         ret = Math.min(ret, boxHeightArray[i]);
    }
    return ret;
}

function getChildElement(){
    var boxArray=[];
    var allBox=document.querySelectorAll('.box');
    for(var i=0;i<allBox.length;i++){
        boxArray.push(allBox[i]);
    }
    return boxArray;
}