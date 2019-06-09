/**
 * Created by user on 2017/8/4.
 */
treeNodes=[ ];
timer=null;
//treeRoot=document.getElementsByClassName("rooter")[0];

EventUtil.addHander(window,'load',addClick);


function addClick(){
var first=document.getElementById('first');
var middle=document.getElementById('middle');
var last= document.getElementById('last');
var searchBtn=document.getElementById('search');

    EventUtil.addHander(first,'click',firstOrder);
    EventUtil.addHander(middle,'click',middleOrder);
    EventUtil.addHander(last,'click',lastOrder);
    EventUtil.addHander(searchBtn,'click',searchOrder);
   }

function reset(){
    treeNodes=[];
    clearInterval(timer);
    var divs= document.getElementsByTagName("div");
    console.log(divs.length);///
    for(var i=0;i<divs.length;i++){
        divs[i].style.backgroundColor="white";///
    }
}
function changeColor(){
    var i=0;
    treeNodes[i].style.backgroundColor="#F34949";
    timer=setInterval(function(){
        i++;
        if(i<treeNodes.length){
            treeNodes[i-1].style.backgroundColor="white";
            treeNodes[i].style.backgroundColor="#F34949";
        }else{
            clearInterval(timer);
            treeNodes[i].style.backgroundColor="white";
        }
    },700)
}

function preOrder(node){
    if(!(node==null)){
        //alert(node);///
        treeNodes.push(node);
        //console.log(treeNodes);
        preOrder(node.firstElementChild);
        preOrder(node.lastElementChild);
    }
}
   function firstOrder(){
    treeRoot=document.getElementsByClassName("rooter")[0];
    reset();
    preOrder(treeRoot);
    changeColor();
   }
function middleOrder(){
    treeRoot=document.getElementsByClassName("rooter")[0];
    reset();
    InOrder(treeRoot);
    changeColor();
}
function lastOrder(){
    treeRoot=document.getElementsByClassName("rooter")[0];
    reset();
    houOrder(treeRoot);
    changeColor();
}

function InOrder(node){
    if(!(node==null)){
        InOrder(node.firstElementChild);
        treeNodes.push(node);
        InOrder(node.lastElementChild);
    }
}
function houOrder(node){
    if(!(node==null)){
        houOrder(node.firstElementChild);
        houOrder(node.lastElementChild);
        treeNodes.push(node);
    }
}


function searchOrder(){
    var searchText=document.getElementById('searchText').value;
    treeRoot=document.getElementsByClassName("rooter")[0];
    reset();
    preOrder(treeRoot);
    var i=0;
    treeNodes[i].style.backgroundColor="#000";
    timers=setInterval(function(){
        if(i<treeNodes.length){
            ++i;
            treeNodes[i-1].style.background='white';
            treeNodes[i].style.background='#000';
            //alert(treeNodes[i].firstChild.nodeValue);
            if(treeNodes[i].innerHTML.charAt(0)==searchText){
                alert("fff");
                clearInterval(timers)
            }
        }
        else{
            clearInterval(timers);
            treeNodes[i].style.backgroundColor="white";
        }
    },500)

}
