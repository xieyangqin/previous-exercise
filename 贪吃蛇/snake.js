
    /**
     * Created by user on 2017/8/16.
     * 1、绘图
     * 2、蛇 两格
     * 3、蛇动
     * 4、食 添加食物-》随机
     * 5、蛇吃食
     */

        var canvas=document.getElementById("canvas");
        var ctx=canvas.getContext("2d");//创建2d绘图空间，画笔
        var r = [{x:10,y:9},{x:10,y:8}];//r 数组表示贪吃蛇
        var co=40;//表示前进方向
        var e =null;
        var stop=false;
        ctx.shadowColor="black";

        function onframe(){
            if (stop||r[0].x<=0||r[0].x>=50||r[0].y<=0||r[0].y>=50) return;
//如果有实物，更具前进的方向判断是否吃了食物，并且讲蛇数组中最后一个元素换到首部
            if(e){
                if((co==40&&r[0].x==e.x&&r[0].y+1==e.y)||(co==38&&r[0].x==e.x&&r[0].y-1==e.y)||(co==37&&r[0].x-1==e.x&&r[0].y==e.y)||(co==39&&r[0].x+1==e.x&&r[0].y==e.y) ){
                    r.unshift(e);
                    e=null;
                }
            }
            r.unshift(r.pop());//经数组中最后一个元素换到最前面的
            //更具方向，重新设定设的坐标
            switch(co){
                case 37:
                    r[0].x=r[1].x-1;
                    r[0].y=r[1].y;
                    break;
                case 38:
                    r[0].x=r[1].x;
                    r[0].y=r[1].y-1;
                    break;
                case 39:
                    r[0].x=r[1].x+1;
                    r[0].y=r[1].y;
                    break;
                case 40:
                    r[0].x=r[1].x;
                    r[0].y=r[1].y+1;
                    break;
            }
            ctx.clearRect(0,0,500,500);//清除画布
            //绘制贪吃蛇
            for( var i=0;i<r.length;i++){
                ctx.fillRect(r[i].x*10,r[i].y*10,10,10);
            }

            //若没有食物,加上一粒食物
            if(e==null){
                e={y:(Math.random()*50>>>0),x:(Math.random()*50>>>0)};
            }

            if(e){
                ctx.fillRect(e.x*10,e.y*10,10,10);
            }

            if (r[0].x<=0||r[0].x>=50||r[0].y<=0||r[0].y>=50){
                alert("over\n完蛋"+ (r.length-2)+"分");
            }

        }

        //键盘控制前进方向
        document.onkeyup=function(event){
            var a = event.keyCode;//获取键盘对应的键指 37 38 39 40
            if(a>=37 &&a<=40 &&Math.abs(a-co)!=2){
                co=a;
            }else if(a==32){
                stop=!stop;
            }
        }

        setInterval(onframe,200);

