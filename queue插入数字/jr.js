/**
 * Created by user on 2017/8/3.
 */
var EventUtil = {
    /*
     参数说明：
     element：要操作的对象
     type：事件名称
     handler：事件处理程序函数
     */

    /* 添加事件监听器*/
    addHander:function(element,type,handler){
        if(element.addEventListener){
            //火
            element.addEventListener(type,handler,false);
        }
        else if(element.attachEvent){
            //IE
            element.attachEvent('on'+type,handler);
        }else if(element['on'+type]){
            element['on'+type]=handler;
            //如果两种都不支持，就使用老版本的DOM 0级事件处理程序
        }
    },


    /* 删除一个已有的监听器*/
    removeHandler:function(element,type,handler){
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false);
        }
        else if(element.detachEvent){
            element.detachEvent('on'+type,handler);
        }
        else if(element['on'+type]){
            element['on'+type]=null;
        }
    },


    /* 获取Event对象*/
    getEvent:function(event){
        var theEvent = event ? event : window.event;
        return theEvent;
    },

    /* 获取接收事件的对象*/
    getTarget:function(event){
        var theTarget =event.target ? event.target :event.srcElement;
        return theTarget;
    },

    /*
     *event.preventDefault()方法是用于取消事件的默认行为
     * 在ie下需要用window.event.returnValue = false; 来实现
     */
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault();
        }
        else{
            //IE
            event.returnValue=false;
        }
    },

    /*停止冒泡 由于IE不支持事件捕获，所以上面这个方法只能用来阻止事件冒泡。*/
    stopProgation:function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }
        else{
            event.cancelBubble=true;
        }
    }
};

