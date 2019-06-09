/**
 * Created by user on 2017/8/3.
 */
EventUtil.addHander(window,'load',test);
var input=document.getElementsByTagName("input");
function test(){
    for(var i=0;i<input.length;i++){
        switch(input[i].value){
            case "左侧入":
                EventUtil.addHander(input[i],'click',leftIn);
                break;
            case "右侧入":
                EventUtil.addHander(input[i],'click',rightIn);
                break;
            case "左侧出":
                EventUtil.addHander(input[i],'click',leftOut);
                break;
            case "右侧出":
                EventUtil.addHander(input[i],'click',rightOut);
                break;
            case "排序":
                EventUtil.addHander(input[i],'click',sortLi);
                break;
            default:
                break;
        }
    }
}

var flag=false;
function judge() {
    var text = input[0].value;
    var liCount=ul.childElementCount;
    var re = /^[0-9]+.?[0-9]*$/;
    if (!re.test(text)) {
        alert("输入了非数字");
        input[0].focus();
    } else if (parseFloat(text) > 200) {
        alert("超过了一百了哦");
        input[0].value = "";
        input[0].focus();
    }else if(liCount>=10){
            alert("已超过最多数量");
    }
    else {
        var liElement = document.createElement("li");
        var textValueNode = document.createTextNode(text);
        liElement.appendChild(textValueNode);
        liElement.style.height=parseFloat(text)+10+"px";
        flag = true;
        return liElement;
    }
    return;
}

function leftIn(){
    var ul = document.getElementById("ul");
    // var text= input[0].value;
    // if (text.match("[^1-9]")||text==""){
    //     alert("输入了非数字");
    //     input[0].focus();
    // }else if(parseFloat(text)>100){
    //     alert("超过了一百了哦");
    //     input[0].value = "";
    //     input[0].focus();
    // }
    // else {
    //     var liElement = document.createElement("li");
    //     var textValueNode = document.createTextNode(text);
    //     liElement.appendChild(textValueNode);
    //     var ul = document.getElementById("ul");
    //     ul.insertBefore(liElement, ul.firstChild);
    // }
    var lie = judge();
    if(flag==true){

          ul.insertBefore(lie, ul.firstChild);
    }
}

function rightIn() {
    var lie = judge();
    if(flag==true){
        var ul = document.getElementById("ul");
        ul.appendChild(lie);
    }
}

function leftOut(){
    var ulElement=document.getElementById("ul");
    if(ulElement.childNodes.length<=0){
        alert("无数据可删了");
        return ;
    }
    else {
        alert("确定删除左边的？" + ulElement.firstChild.innerHTML);
        var ulFirstChild = ulElement.firstChild;
        ulElement.removeChild(ulFirstChild);
    }
}

function rightOut(){
    var ulElement=document.getElementById("ul");
    var ulLastChild=ulElement.lastChild;
    ulElement.removeChild(ulLastChild);
}

// function sort(){
//     var li=document.getElementsByTagName("li");
//     // var liNu=[];
//     // for(var i=0;i<li.length;i++){
//     //      liNu[i]=li[i].style.height;
//     // }
//
//     for(var i=0;i<li.length-1;i++){
//         console.log("一循环"+li[i].style.height);
//         for(var j=i+1;j<li.length;j++){
//             console.log("I:"+li[i].style.height);
//             console.log("J:"+li[j].style.height);
//
//             if(li[i].style.height >li[j].style.height){
//                 var temp="";
//                 temp=li[i].style.height;
//                 li[i].style.height=li[j].style.height;
//                               //console.log("小"+li[i].style.height);
//                 li[j].style.height=temp;
//                               //console.log("大"+li[j].style.height);
//             }
//         }
//     }
//
// }
function sortLi(){
    var li=document.getElementsByTagName("li");
    var data=[];
    for(var i=0;i<li.length;i++){
        var temp=li[i].innerHTML;
        data.push(temp);
    }
    data.sort(function(a,b){
        return a-b;
    });
    for(var i=0;i<data.length;i++){
        li[i].style.height=data[i]*2+"px";
    }
}