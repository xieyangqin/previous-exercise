/**
 * Created by user on 2017/8/11.
 * 1、JS动态生成div元素 初始化化
 *    1、气球数量
 *    2、创建流程
 *       1、createElement
 *       2、创建初始化属性
 *              1、类名
 *              2、位置
 *                  Math.random()
 *       3、加入body中
 * 2、球动起来
 *
 * 3、点击气球 求做动画后消失
 * 4、完善功能 动画功能
        setInterval//丢帧
        setTimeout//不推荐做小
 */
window.onload=function(){
    var wH=window.innerHeight;//浏览器高度；
    var wW=window.innerWidth;
    var bZ=160;
    var timer=null;
    //alert(wH);
    init(10);
    balloonFly();//requestAnimationFrame,再次条用
    // timer=setInterval(balloonFly,500);

    function init(num) {
        var fage = document.createDocumentFragment();
        for (var i = 0; i < num; i++) {
            var randomX=~~(Math.random()*wW)-bZ;//-bZ为了让气球不超过浏览器外
            randomX=Math.max(0,randomX);//输出最大的值
            console.log(randomX);
            var oBalloon = document.createElement('div');
            oBalloon.className = 'balloon';
            oBalloon.style.top=wH+'px';
            oBalloon.style.left=randomX+'px';
            oBalloon.speed=~~(Math.random()*8)+2;//自定义属性 随机数
            fage.appendChild(oBalloon);
        }
        document.body.appendChild(fage);
    }


    //点击事件---循环添加时间消耗新年
    document.body.addEventListener('click',function (e){
        if(e.target.className.toLowerCase()==='balloon'){
            //alert(3);
            /*  boom(e.target);//使用参数会污染函数*/
            boom.call(e.target,function(){
                this.parentNode.removeChild(this).bind(e.target);

            });//在函数运行主动执行的时候，通过call方法将函数内部的this替换为e.terget
            /*当使用call方法时，参数第一位对应this，而第二位对应函数的参数*/
            //e,target 就是被电击的div元素
            /*  e.target.parentNode.removeChild(e.target);//只能通过父亲删掉自己的标签*/
            init(1);
        }
    });

    //爆炸动画，，，
    function boom(cb){//cb为function(){ this.parentNode.removeChild(this); }


        var rotate=[30,80];
        var index=0;
        this.timer=setInterval(function(){//定时器中的this一定是只想window，应为
            if(this.offsetWidth<10) {
                cb&&cb();//回调函数cb存在执行cb()
                /* this.parentNode.removeChild(this);*/
                clearInterval(this.timer);
              //  init(1);
            }
            index++;
            index%=2;
            //console.log(this);
            this.speed++;
            this.style.width=this.offsetWidth-10+'px';
            this.style.height =this.offsetHeight-10+'px';
            this.style.top=this.offsetTop-this.speed+'px';
            this.style.transform='rotate('+rotate[index] +'deg)';
        }.bind(this),1000/60);//自定义属性
    }



    function balloonFly(){
        var balloon=document.querySelectorAll(".balloon");
        for(var i=0,lent=balloon.length;i<lent;i++){
            /* balloon[i].style.top=balloon[i].offsetTop-50+"px";*///如果再次中添加一个随机数，应为在定时器中，那么就会消耗很多性能，
            balloon[i].style.top=balloon[i].offsetTop-balloon[i].speed+"px";//
        }
        requestAnimationFrame(balloonFly);//执行到此时，过十三号秒再执行balloonFly H5兼容 开发者使用settimeout模拟定位
    }
}