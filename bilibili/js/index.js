/**/
(function(){
    var $header_left=$('#header .h-t-main .h-t-m-left>ul>li');
    showDisplay( $header_left,'.hide');

    var $header_right = $('#header .h-t-main .h-t-m-left ');
    $header_right.find('ul .l4 .hide .hide-live>ul>li ').hover(function () {
        $(this).find('a').addClass('hover');
    }, function () {
        $(this).find('a').removeClass('hover');
    });
    $header_right.find('ul>li').addClass('hot');
    function showDisplay(selector,childs){
        selector.hover(function(){
            $(this).find(childs).show();
        },function(){
            $(this).find(childs).hide();
        });
    }
   /* var $li = $('.h-t-m-left>ul>li');
    $li.hover(function(){
     /!*   $('.hide').css({display:'block'});*!/
        $(this).find('.hide').show();
    },function(){
        $(this).find('.hide').hide();
    });
var $liveLi=$('.h-t-m-left ul .l4 .hide .hide-live ul li ');
    $liveLi.hover(function(){
        $(this).find('a').addClass('hover');
    },function(){
        $(this).find('a').removeClass('hover')
    });*/

    var $contribute=$('.h-t-m-right ul .r ');
    $contribute.hover(function(){
        /*   $('.hide').css({display:'block'});*/
     /*   alert(1);*/
        $(this).find('.contribute').show();
    },function(){
        $(this).find('.contribute').hide();
    });

    /*首页栏的隐藏*/
    var $item=$('.h-n-main .h-n-m-list .navLi.l2');
    $item.hover(function(){
       $(this).find('.sub-nav').show();
    },function(){
        $(this).find('.sub-nav').hide();
    })

    /**/
    var $item2=$('.h-n-right .h-n-r-list .nav-r-li');
    $item2.hover(function(){
        $(this).find('.nav-r-l-d ').show();
    },function(){
        $(this).find('.nav-r-l-d').hide();
    })



    /*轮播*/

    /*点*/
    var $point=$('#main #m-carousel .m-c-d .m-c-d-point .fish');
   // console.log($point);
    /* $point.hover(function(){
     $(this).addClass('hover');
     },function(){
     $(this).removeClass('hover')
     })*/
    $point.hover(function(){
      $(this).toggleClass('hover')
    });
    var m=1;
    $point.eq(0).addClass('on').siblings().removeClass('on');
    $point.parent().siblings('.m-c-d-text').children('a').eq(0).show().siblings('a').hide();

    var timer=setInterval(function(){
        $point.parent().siblings('.m-c-d-img ').animate({
            marginLeft:-440*m
        });
        $point.eq(m).addClass('on').siblings().removeClass('on');
        $point.parent().siblings('.m-c-d-text').children('a').eq(m).show().siblings('a').hide();
        m++;
       // console.log('m'+m);
        if(m==5){
            m=0;
        }
    },3000)

    $point.on('click',function(){
        $(this).addClass('on').siblings().removeClass('on');
        var n=$(this).index();
        $(this).parent().siblings('.m-c-d-img ').animate({
            marginLeft:-440*n
        });
        //底部text
        // console.log($(this).parent().siblings('.m-c-d-text').children('a').eq(n));
        $(this).parent().siblings('.m-c-d-text').children('a').eq(n).show().siblings('a').hide();
        m=n;
       // console.log('m=n'+m);
    })


    /* 更多*/
     var $more=$('#main #m-carousel .m-c-d');
        $more.hover(function(){
            $(this).find('.more').toggle();
             })

    /* 右边鼠标划过出现浮层*/
    var $show=$('#main #m-carousel .m-c-right .m-c-r-contribute');
            $show.mouseenter(function(){
                $(this).find('.m-c-r-c-card').css({
                    "bottom":0,
                    "background":"rgba(0,0,0,0.7)"
                    })
            })
    var $show2=$('#main #m-carousel .m-c-right .m-c-r-contribute .m-c-r-c-card');
            $show2.mouseleave(function(){
                $(this).css({
                    "bottom":-67,
                    "background":"linear-gradient(transparent,rgba(0,0,0,0.5) 22%,rgba(0,0,0,0.7) 25%)"
                })
    })





  /*左边和右边*/
    var $l_r=$('#main #m-carousel .m-c-right ');
    var $contribute=$('#main #m-carousel .m-c-right .m-c-r-contribute');
     var $l_r_s=$('#main #m-carousel .m-c-right .m-c-r-btn');
     $l_r.hover(function(){
        $l_r_s.toggle();
    })
    //模拟数据
    /*
    var i=0;
    $l_r_s.click(function(e){
        if(e.target.className=='m-c-r-btn right'){
             var index =timeDate[++i];
            $(this).text(index);
            if(i==2){
                $('.m-c-r-btn.left').text(timeDate[0]) ;
            }
            $('.m-c-r-btn.left').text(timeDate[++i]) ;
            i--;
            if(i>=2){
                i=-1;
            }
           /!* i=(i>=3)?-1:i;*!/
        }else{
            var index =timeDate[--i];
            $(this).text(index);
        }
    })*/
    var imgData=[
        {
            "title":"【新番吐个爽】这样也能算奶死？拜托请多给大河内一点信任好吗",
            "play":167964,
            "author":"酒客小丑",
            "pic":"img/main/right/06.png"
        },
        {
            "title":"【赤ティン】Unknown Mother Goose",
            "play":17457,
            "author":"akatindayon",
            "pic":"img/main/right/06.png"
        },
        {
            "title":"【灵能百分百手书】DOPE",
            "play":16306,
            "author":"seezisong",
            "pic":"img/main/right/06.png"
        },
        {
            "title":"【纵情欢乐！】MIKU今晚想要HAVE FUN~【 镜头配布】",
            "play":22149,
            "author":"永远赤红的幼月",
            "pic":"http:\u002F\u002Fi1.hdslb.com\u002Fbfs\u002Farchive\u002Fc1c9fabef3299b58c77c20479c16441edd822137.jpg"
        },
        {
            "title":"【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
            "play":78019,
            "author":"暗猫の祝福",
            "pic":"http:\u002F\u002Fi1.hdslb.com\u002Fbfs\u002Farchive\u002F3591573f49188673cefbfcb6a006cf67ba3688b6.jpg"
        },
        {
            "title":"【Lex】值得期待的作品好多啊！2017十月新番导视",
            "play":1029636,
            "author":"LexBurner",
            "pic":"http:\u002F\u002Fi1.hdslb.com\u002Fbfs\u002Farchive\u002F68307296659c944a986eb0ca4539a865796dfb6b.jpg"
        },

        {
            "title":"【崩坏3rd-MMD】芽衣：舰长听说你喜欢看COS  不知这身怎么样【2017周年祭影像大赛】",
            "play":0,
            "author":"突然失去了梦想的蕾姆",
            "pic":"http:\u002F\u002Fi1.hdslb.com\u002Fbfs\u002Farchive\u002F7381cfc9843818e17c7d10a4d23929ba4a659de5.jpg"
        },
        {
            "title":"【双笙】纯白（feat.v.k克 x双笙）",
            "play":76987,
            "author":"双笙子",
            "pic":"http:\u002F\u002Fi1.hdslb.com\u002Fbfs\u002Farchive\u002F9bf413804168b62a93eb8e1efce3bbfba08e05d3.jpg"
        },
        {
            "title":"【古筝】九九八十一  墨韵随步摇 ft. 闫东炜",
            "play":299087,
            "author":"墨韵Moyun",
            "pic":"http:\u002F\u002Fi2.hdslb.com\u002Fbfs\u002Farchive\u002Fc340e6b227e14c14f6847cd64309cf16f0830c59.jpg",
        },
        {
            "title":"100张4K二次元壁纸，入宅萌新的新手套装（超级好看）",
            "play":23940,
            "author":"晨上初雨",
            "pic":"http:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Farchive\u002F05cafc28921a0f1622daa01b61b9100747876627.jpg",
        },
        {
            "title":"【凹凸世界手书】祝福的救世主与爱之塔_多人友谊向",
            "play":24606,"review":1319,
            "author":"猫菇椰汁",
            "pic":"http:\u002F\u002Fi1.hdslb.com\u002Fbfs\u002Farchive\u002F457ebd06345f118019cff10e1401ac54223d2f92.jpg",
        },
        {
            "title":"【崩坏3rd-MMD】芽衣：舰长听说你喜欢看COS  不知这身怎么样【2017周年祭影像大赛】",
            "play":0,
            "author":"突然失去了梦想的蕾姆",
            "pic":"http:\u002F\u002Fi1.hdslb.com\u002Fbfs\u002Farchive\u002F7381cfc9843818e17c7d10a4d23929ba4a659de5.jpg"
        },

        {
            "title":"[中字]灰姑娘女孩 4TH 演唱会",
            "play":9993,
            "author":"時間旅人-MG视频组",
            "pic":"http:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Farchive\u002F49d529580827dc8769475689799bc37aa0d48bcc.png",
        },
        {
            "title":"【MMD】临时女友文化祭",
            "play":7551,
            "author":"初音社",
            "pic":"http:\u002F\u002Fi2.hdslb.com\u002Fbfs\u002Farchive\u002F5147e93e2163e5184d3d00c092d337a15ed9c4e0.jpg",
        },
        {
            "title":"【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
            "play":286769,
            "author":"泛式",
            "pic":"http:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Farchive\u002F509a16947a364a313eef429a091a075eb5170ccb.jpg",
        },
        {
            "title":"我留这节操有何用！！？？【梗百科11】",
            "play":144848,
            "author":"吃素的狮子",
            "pic":"http:\u002F\u002Fi2.hdslb.com\u002Fbfs\u002Farchive\u002Ffc4459608d3ff9d7dc42f2db987f76d3af6f0f52.jpg"
        },
        {
            "title":"【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
            "play":78019,
            "author":"暗猫の祝福",
            "pic":"http:\u002F\u002Fi1.hdslb.com\u002Fbfs\u002Farchive\u002F3591573f49188673cefbfcb6a006cf67ba3688b6.jpg"
        },
        {
            "title":"【Lex】值得期待的作品好多啊！2017十月新番导视",
            "play":1029636,
            "author":"LexBurner",
            "pic":"http:\u002F\u002Fi1.hdslb.com\u002Fbfs\u002Farchive\u002F68307296659c944a986eb0ca4539a865796dfb6b.jpg"
        }
      /*  {
            "title":"【崩坏3rd-MMD】芽衣：舰长听说你喜欢看COS  不知这身怎么样【2017周年祭影像大赛】",
            "play":0,
            "author":"突然失去了梦想的蕾姆",
            "pic":"http:\u002F\u002Fi1.hdslb.com\u002Fbfs\u002Farchive\u002F7381cfc9843818e17c7d10a4d23929ba4a659de5.jpg"
        },
        {
            "title":"【双笙】纯白（feat.v.k克 x双笙）",
            "play":76987,
            "author":"双笙子",
            "pic":"http:\u002F\u002Fi1.hdslb.com\u002Fbfs\u002Farchive\u002F9bf413804168b62a93eb8e1efce3bbfba08e05d3.jpg"
        }*/
    ];

    //var timeDate=['二','三','一'];
    var timeDate=['一周','昨日','三日'];//此处和上面的二、三、一 对应 对应的是右按钮 右按钮点击，右按钮的文本顺序为二、三、一
    var $c=$contribute.children('.m-c-r-c-card')[0];

    //首次打开页面时，展示的信息：模拟数据的前6个
    for(var i=0;i<6;i++){
        //   console.log(imgData[i].title);
       // console.log($contribute.children('a').children('img').attr('src', imgData[i].pic));
        $contribute.children('.m-c-r-c-card').eq(i).children('.title').text(imgData[i].title);
        $contribute.children('.m-c-r-c-card').eq(i).children('.author').text('up主：'+imgData[i].author);
        $contribute.children('.m-c-r-c-card').eq(i).children('.play').text('播放：'+imgData[i].play);
    }
    var num=0;
    var text='';
    $l_r_s.click(function(e){
       /*点击左右按钮时，动态更改左右按钮的日期，根据右按钮在数组中的下标，判断左按钮的文本即text变量*/
        num++;
        num=(num>2)?0:num;
        switch (num){
            case 0://一周
                text='昨日';
                break;
            case 1://昨日
                text="三日";
                break;
            case 2://三日
                text="一周";
        }
       // console.log(num);
        //console.log(timeDate[num]);
        $('.m-c-r-btn.right').text(timeDate[num]);
        $('.m-c-r-btn.left').text(text);

        /*判断是哪个按钮被点击*/
            if(e.target.className=='m-c-r-btn right'){
                for(var i=0;i<6;i++){
                     //   console.log(imgData[i].title);
                    $contribute.children('.m-c-r-c-card').eq(i).children('.title').text(imgData[i+6].title);
                    $contribute.children('.m-c-r-c-card').eq(i).children('.author').text('up主：'+imgData[i+6].author);
                    $contribute.children('.m-c-r-c-card').eq(i).children('.play').text('播放：'+imgData[i+6].play);
                }
                var pre=imgData.splice(0,6);//数组
                for(var ele in pre) imgData.push(pre[ele]);
              // console.log(imgData);
            }else{
                var next=imgData.splice(imgData.length-6,6);
                //  console.log(next);
                 for(var ele in next.reverse()) imgData.unshift(next[ele])
                   // console.log(imgData);
                    for(var i=0;i<6;i++){
                        $contribute.children('.m-c-r-c-card').eq(i).children('.title').text(imgData[i].title);
                        $contribute.children('.m-c-r-c-card').eq(i).children('.author').text('up主：'+imgData[i].author);
                        $contribute.children('.m-c-r-c-card').eq(i).children('.play').text('播放：'+imgData[i].play);
                    }
                }
        });



})();

/*推广部分*/
(function(){
    var imgData=[
        {
            "title":"【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
            "play":286769,
            "author":"泛式",
            "pic":"img/main/generalize/l/0.jpg",
        },
        {
            "title":"我留这节操有何用！！？？【梗百科11】",
            "play":144848,
            "author":"吃素的狮子",
            "pic":"img/main/generalize/l/1.jpg",
        },
        {
            "title":"【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
            "play":78019,
            "author":"暗猫の祝福",
            "pic":"img/main/generalize/l/2.jpg",
        },
        {
            "title":"【Lex】值得期待的作品好多啊！2017十月新番导视",
            "play":1029636,
            "author":"LexBurner",
            "pic":"img/main/generalize/l/3.jpg",
        }
    ]

    var $show=$('#main #m-generalize .m-g-left .m-g-l-contribute');
    var $img=$show.find('.m-g-l-c-img>img');
    var $title=$show.find('p');
    for(var i=0;i<$show.length;i++){
        $img[i].src=imgData[i].pic;
        $title.eq(i).text(imgData[i].title);
           }

    $show.hover(function(){
        $(this).find(' .m-g-l-ca .m-g-l-c-box .m-g-l-c-cover').fadeIn(
            /* opacity:1*/
            /*display:'block'*/
            200);
    },function(){
        $(this).find(' .m-g-l-ca .m-g-l-c-box .m-g-l-c-cover').fadeOut(
            /* opacity:1*/
            /*display:'block'*/
            200);
    })

    var $b=$('#main #m-generalize .m-g-left .m-g-l-contribute .m-g-l-ca .m-g-l-c-box');
    $b.hover(function(){
        $(this).find(' .m-g-l-c-cover .m-g-l-c-c-wait').toggle();
        $(this).find('.m-g-l-c-c-move').toggleClass('opacity')
    })

  $b.mousemove(function(e){
     // console.log(e);
      var x=e.offsetX;
     /* var y=e.offsetY;*/
      //console.log(x);
      $(this).find('.m-g-l-c-c-move').animate({
          "width":x-8
      },10);
      //console.log($(this).find('.m-g-l-c-cover').attr('background-position'));
      imgChang(x);
  })

        function imgChang(x){
            $b.find('.m-g-l-c-cover').addClass('backg');
            var num=Math.round(x/13);
            //console.log("x: "+x);
           // console.log(num);
            if(num==10){
                $b.find('.m-g-l-c-cover.backg').css({'background-position':0+'px '+(-109)+'px'});
            }
            else if(num>=11){
                $b.find('.m-g-l-c-cover.backg').css({'background-position':(-160)+'px '+(-109)+'px'});
            }
            else{
                $b.find('.m-g-l-c-cover.backg').css({'background-position':(-160*num)+'px '+10+'px'});
            }
        }
})();

/*正在直播*/
(function(){

    var imgData=[
        {
            "category":"正在直播",
            "title":"【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
            "play":286769,
            "author":"泛式",
            "pic":"img/main/generalize/l/0.jpg",
        },
        {
            "category":"唱见舞见",
            "title":"我留这节操有何用！！？？【梗百科11】",
            "play":144848,
            "author":"吃素的狮子",
            "pic":"img/main/generalize/l/1.jpg",
        },
        {
            "category":"生活娱乐",
            "title":"【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
            "play":78019,
            "author":"暗猫の祝福",
            "pic":"img/main/generalize/l/2.jpg",
        },
        {
            "category":"手游直播",
            "title":"【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
            "play":286769,
            "author":"泛式",
            "pic":"img/main/generalize/l/0.jpg",
        },
        {
            "category":"单击联机",
            "title":"【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
            "play":286769,
            "author":"泛式",
            "pic":"img/main/generalize/l/0.jpg",
        },
        {
            "category":"唱见舞见",
            "title":"我留这节操有何用！！？？【梗百科11】",
            "play":144848,
            "author":"吃素的狮子",
            "pic":"img/main/generalize/l/1.jpg",
        },
        {
            "category":"单机联机",
            "title":"【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
            "play":78019,
            "author":"暗猫の祝福",
            "pic":"img/main/generalize/l/2.jpg",
        },
        {
            "category":"正在直播",
            "title":"【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
            "play":78019,
            "author":"暗猫の祝福",
            "pic":"img/main/generalize/l/2.jpg",
        },
    ];
    init();
    var $living=$('#main #m-live .m-l-left .m-l-l-contribute');
    $living.hover(function(){
        console.log('kkk');
        $(this).find('.m-l-l-c-cover').toggle();
        $(this).find('.m-l-l-c-info').slideToggle();
    });
    function init(){
        var str='';
        for(var i=0,len=imgData.length;i<len;i++){
          //  var str;//页面会出现undefined
            str+='<div class="m-l-l-contribute">'+
                '<a href=" " class="m-l-l-ca">'+
                '<div class="m-l-l-c-box">'+
                '<div class="m-l-l-c-img">'+
                '<img src='+imgData[i].pic+' alt="">'+
                '</div>'+
                '<div class="m-l-l-c-cover">'+
                '<div class="m-l-l-c-c-img">'+
                '<img src='+imgData[i].pic+'/>'+
                '</div>'+
                '<span><i></i>Live</span>'+
                '</div>'+
                '<div class="m-l-l-c-category">'+imgData[i].category+'</div>'+
                '</div>'+
                '<p>【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？</p>'+
            '<div class="m-l-l-c-info">'+
             '<span class="author"><i></i>'+imgData[i].author+'</span>'+
            '<span class="count"><i></i>'+imgData[i].play+'</span>'+
                '</div>'+
                '</a>'+
                '</div>';
            $('#main #m-live .m-l-left .m-l-l-total').html(str);
        }
    }
    var $w=$('#main #m-live .m-l-right .m-l-r-bottom .m-l-r-b-sug .m-l-r-b-s-box');

    var num=0;
    $w.find('.m-l-r-b-r-p .point').eq(0).addClass('on');
    $w.children('.m-l-r-b-r-t').children('li').eq(num).show().siblings().hide();
    function fn1(){
            num++;
            if(num>=3){
            num=0;
        }
            $w.find('.m-l-r-b-r-p .point').eq(num).addClass('on')
                .siblings().removeClass('on');
            $w.find('.m-l-r-b-r-p .point').parent().siblings('.m-l-r-b-s-img').stop().animate({
                left:-260*num
            }/*,function(){
             if(num==2){
             num=-1;
             }
            }*/);
        $w.children('.m-l-r-b-r-t').children('li').eq(num).show().siblings().hide();
    }

    var timer=setInterval(fn1/*function(){
        num++;
        $w.find('.m-l-r-b-r-p .point').eq(num).addClass('on')
            .siblings().removeClass('on');
        $w.find('.m-l-r-b-r-p .point').parent().siblings('.m-l-r-b-s-img').stop().animate({
            left:-260*num
        },function(){
            if(num==2){
                num=-1;
            }
        });
    }*/,2000);

    $w.find('.m-l-r-b-r-p .point').hover(
        function(){
            $(this).addClass('on')
                    .siblings().removeClass('on');
             var n=$(this).index();
            $(this).parent().siblings('.m-l-r-b-s-img').stop().animate({
                left:-260*n
            });
            $(this).parent().siblings('.m-l-r-b-r-t').children('li').eq(n).show().siblings().hide();
            clearInterval(timer);
        },
        function(){
            var n=$(this).index();
            num=n;
            timer=setInterval(fn1,2000);
            /*     setInterval(function(){
             console.log(num);
             if(num==2){
             num=-1;
             }
             num++;
             $w.find('.m-l-r-b-r-p .point').eq(num).addClass('on')
             .siblings().removeClass('on');
             $w.find('.m-l-r-b-r-p .point').parent().siblings('.m-l-r-b-s-img').stop().animate({
             left:-260*num
             });
             },2000)*/
        })

    var $t=$('#main #m-live .m-l-right .m-l-r-top span');
    $t.click(function(){
        var n=$(this).index();
        $(this).addClass('on')
            .siblings().removeClass('on')
            .parent().siblings('.m-l-r-bottom').animate({
                left:-260*n
        })
    })

})();

/*(function(){
    var $list=$('#main #m-sort .n-item');
    $list.hover(function(){
        $(this).addClass('hover').siblings().removeClass('hover')
    })
})()*/

/*动画*/
(function(){
    var imgData=[
        {
            'main': [
                {
                    "category": "正在直播",
                    "title": "【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
                    "play": 286769,
                    "author": "泛式",
                    "pic": "img/main/generalize/l/0.jpg",
                },
                {
                    "category": "唱见舞见",
                    "title": "我留这节操有何用！！？？【梗百科11】",
                    "play": 144848,
                    "author": "吃素的狮子",
                    "pic": "img/main/generalize/l/1.jpg",
                },
                {
                    "category": "生活娱乐",
                    "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                    "play": 78019,
                    "author": "暗猫の祝福",
                    "pic": "img/main/generalize/l/2.jpg",
                },
                {
                    "category": "手游直播",
                    "title": "【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
                    "play": 286769,
                    "author": "泛式",
                    "pic": "img/main/generalize/l/0.jpg",
                },
                {
                    "category": "单击联机",
                    "title": "【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
                    "play": 286769,
                    "author": "泛式",
                    "pic": "img/main/generalize/l/0.jpg",
                },
                {
                    "category": "唱见舞见",
                    "title": "我留这节操有何用！！？？【梗百科11】",
                    "play": 144848,
                    "author": "吃素的狮子",
                    "pic": "img/main/generalize/l/1.jpg",
                },
                {
                    "category": "单机联机",
                    "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                    "play": 78019,
                    "author": "暗猫の祝福",
                    "pic": "img/main/generalize/l/2.jpg",
                },
                {
                    "category": "正在直播",
                    "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                    "play": 78019,
                    "author": "暗猫の祝福",
                    "pic": "img/main/generalize/l/2.jpg",
                }
            ],
        },
        {
            'rAll': {
                '周一':[
                            {
                                "category": "唱见舞见",
                                "title": "我留这节操有何用！！？？【梗百科11】",
                                "play": 144848,
                                "author": "吃素的狮子",
                                "pic": "img/main/generalize/l/1.jpg",
                            },
                            {
                                "category": "生活娱乐",
                                "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                                "play": 78019,
                                "author": "暗猫の祝福",
                                "pic": "img/main/generalize/l/2.jpg",
                            },
                            {
                                "category": "手游直播",
                                "title": "【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
                                "play": 286769,
                                "author": "泛式",
                                "pic": "img/main/generalize/l/0.jpg",
                            },
                            {
                                "category": "单击联机",
                                "title": "【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
                                "play": 286769,
                                "author": "泛式",
                                "pic": "img/main/generalize/l/0.jpg",
                            },
                            {
                                "category": "唱见舞见",
                                "title": "我留这节操有何用！！？？【梗百科11】",
                                "play": 144848,
                                "author": "吃素的狮子",
                                "pic": "img/main/generalize/l/1.jpg",
                            },
                            {
                                "category": "单机联机",
                                "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                                "play": 78019,
                                "author": "暗猫の祝福",
                                "pic": "img/main/generalize/l/2.jpg",
                            },
                            {
                                "category": "正在直播",
                                "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                                "play": 78019,
                                "author": "暗猫の祝福",
                                "pic": "img/main/generalize/l/2.jpg",
                            },
                            {
                                "category": "正在直播",
                                "title": "【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
                                "play": 286769,
                                "author": "泛式",
                                "pic": "img/main/generalize/l/0.jpg",
                            },
                            {
                                "category": "唱见舞见",
                                "title": "我留这节操有何用！！？？【梗百科11】",
                                "play": 144848,
                                "author": "吃素的狮子",
                                "pic": "img/main/generalize/l/1.jpg",
                            },
                            {
                                "category": "生活娱乐",
                                "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                                "play": 78019,
                                "author": "暗猫の祝福",
                                "pic": "img/main/generalize/l/2.jpg",
                            },
                            {
                                "category": "手游直播",
                                "title": "【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
                                "play": 286769,
                                "author": "泛式",
                                "pic": "img/main/generalize/l/0.jpg",
                            },
                            {
                                "category": "单击联机",
                                "title": "【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
                                "play": 286769,
                                "author": "泛式",
                                "pic": "img/main/generalize/l/0.jpg",
                            },
                            {
                                "category": "唱见舞见",
                                "title": "我留这节操有何用！！？？【梗百科11】",
                                "play": 144848,
                                "author": "吃素的狮子",
                                "pic": "img/main/generalize/l/1.jpg",
                            },
                            {
                                "category": "单机联机",
                                "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                                "play": 78019,
                                "author": "暗猫の祝福",
                                "pic": "img/main/generalize/l/2.jpg",
                            },
                            {
                                "category": "正在直播",
                                "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                                "play": 78019,
                                "author": "暗猫の祝福",
                                "pic": "img/main/generalize/l/2.jpg",
                            }
                    ],
                '三日':[

                    {
                        "category": "单击联机",
                        "title": "【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
                        "play": 286769,
                        "author": "泛式",
                        "pic": "img/main/generalize/l/0.jpg",
                    },
                    {
                        "category": "唱见舞见",
                        "title": "我留这节操有何用！！？？【梗百科11】",
                        "play": 144848,
                        "author": "吃素的狮子",
                        "pic": "img/main/generalize/l/1.jpg",
                    },
                    {
                        "category": "单机联机",
                        "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                        "play": 78019,
                        "author": "暗猫の祝福",
                        "pic": "img/main/generalize/l/2.jpg",
                    },
                    {
                        "category": "正在直播",
                        "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                        "play": 78019,
                        "author": "暗猫の祝福",
                        "pic": "img/main/generalize/l/2.jpg",
                    },
                    {
                        "category": "正在直播",
                        "title": "【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
                        "play": 286769,
                        "author": "泛式",
                        "pic": "img/main/generalize/l/0.jpg",
                    },
                    {
                        "category": "唱见舞见",
                        "title": "我留这节操有何用！！？？【梗百科11】",
                        "play": 144848,
                        "author": "吃素的狮子",
                        "pic": "img/main/generalize/l/1.jpg",
                    },
                    {
                        "category": "生活娱乐",
                        "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                        "play": 78019,
                        "author": "暗猫の祝福",
                        "pic": "img/main/generalize/l/2.jpg",
                    },
                    {
                        "category": "手游直播",
                        "title": "【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
                        "play": 286769,
                        "author": "泛式",
                        "pic": "img/main/generalize/l/0.jpg",
                    },
                    {
                        "category": "单击联机",
                        "title": "【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
                        "play": 286769,
                        "author": "泛式",
                        "pic": "img/main/generalize/l/0.jpg",
                    },
                    {
                        "category": "唱见舞见",
                        "title": "我留这节操有何用！！？？【梗百科11】",
                        "play": 144848,
                        "author": "吃素的狮子",
                        "pic": "img/main/generalize/l/1.jpg",
                    },
                    {
                        "category": "单机联机",
                        "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                        "play": 78019,
                        "author": "暗猫の祝福",
                        "pic": "img/main/generalize/l/2.jpg",
                    },
                    {
                        "category": "正在直播",
                        "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                        "play": 78019,
                        "author": "暗猫の祝福",
                        "pic": "img/main/generalize/l/2.jpg",
                    }
                ]
        },
            'original':{
                '周一':[
                    {
                        "category": "唱见舞见",
                        "title": "我留这节操有何用！！？？【梗百科11】",
                        "play": 144848,
                        "author": "吃素的狮子",
                        "pic": "img/main/generalize/l/1.jpg",
                    },
                    {
                        "category": "生活娱乐",
                        "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                        "play": 78019,
                        "author": "暗猫の祝福",
                        "pic": "img/main/generalize/l/2.jpg",
                    },
                    {
                        "category": "手游直播",
                        "title": "【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
                        "play": 286769,
                        "author": "泛式",
                        "pic": "img/main/generalize/l/0.jpg",
                    },
                    {
                        "category": "单击联机",
                        "title": "【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
                        "play": 286769,
                        "author": "泛式",
                        "pic": "img/main/generalize/l/0.jpg",
                    },
                    {
                        "category": "唱见舞见",
                        "title": "我留这节操有何用！！？？【梗百科11】",
                        "play": 144848,
                        "author": "吃素的狮子",
                        "pic": "img/main/generalize/l/1.jpg",
                    },
                    {
                        "category": "单机联机",
                        "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                        "play": 78019,
                        "author": "暗猫の祝福",
                        "pic": "img/main/generalize/l/2.jpg",
                    },
                    {
                        "category": "正在直播",
                        "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                        "play": 78019,
                        "author": "暗猫の祝福",
                        "pic": "img/main/generalize/l/2.jpg",
                    },
                    {
                        "category": "正在直播",
                        "title": "【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
                        "play": 286769,
                        "author": "泛式",
                        "pic": "img/main/generalize/l/0.jpg",
                    },
                    {
                        "category": "唱见舞见",
                        "title": "我留这节操有何用！！？？【梗百科11】",
                        "play": 144848,
                        "author": "吃素的狮子",
                        "pic": "img/main/generalize/l/1.jpg",
                    },
                    {
                        "category": "生活娱乐",
                        "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                        "play": 78019,
                        "author": "暗猫の祝福",
                        "pic": "img/main/generalize/l/2.jpg",
                    },
                    {
                        "category": "手游直播",
                        "title": "【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
                        "play": 286769,
                        "author": "泛式",
                        "pic": "img/main/generalize/l/0.jpg",
                    },
                    {
                        "category": "单击联机",
                        "title": "【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
                        "play": 286769,
                        "author": "泛式",
                        "pic": "img/main/generalize/l/0.jpg",
                    },
                    {
                        "category": "唱见舞见",
                        "title": "我留这节操有何用！！？？【梗百科11】",
                        "play": 144848,
                        "author": "吃素的狮子",
                        "pic": "img/main/generalize/l/1.jpg",
                    },
                    {
                        "category": "单机联机",
                        "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                        "play": 78019,
                        "author": "暗猫の祝福",
                        "pic": "img/main/generalize/l/2.jpg",
                    },
                    {
                        "category": "正在直播",
                        "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                        "play": 78019,
                        "author": "暗猫の祝福",
                        "pic": "img/main/generalize/l/2.jpg",
                    }
                ],
                '三日':[

                    {
                        "category": "单击联机",
                        "title": "【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
                        "play": 286769,
                        "author": "泛式",
                        "pic": "img/main/generalize/l/0.jpg",
                    },
                    {
                        "category": "唱见舞见",
                        "title": "我留这节操有何用！！？？【梗百科11】",
                        "play": 144848,
                        "author": "吃素的狮子",
                        "pic": "img/main/generalize/l/1.jpg",
                    },
                    {
                        "category": "单机联机",
                        "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                        "play": 78019,
                        "author": "暗猫の祝福",
                        "pic": "img/main/generalize/l/2.jpg",
                    },
                    {
                        "category": "正在直播",
                        "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                        "play": 78019,
                        "author": "暗猫の祝福",
                        "pic": "img/main/generalize/l/2.jpg",
                    },
                    {
                        "category": "正在直播",
                        "title": "【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
                        "play": 286769,
                        "author": "泛式",
                        "pic": "img/main/generalize/l/0.jpg",
                    },
                    {
                        "category": "唱见舞见",
                        "title": "我留这节操有何用！！？？【梗百科11】",
                        "play": 144848,
                        "author": "吃素的狮子",
                        "pic": "img/main/generalize/l/1.jpg",
                    },
                    {
                        "category": "生活娱乐",
                        "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                        "play": 78019,
                        "author": "暗猫の祝福",
                        "pic": "img/main/generalize/l/2.jpg",
                    },
                    {
                        "category": "手游直播",
                        "title": "【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
                        "play": 286769,
                        "author": "泛式",
                        "pic": "img/main/generalize/l/0.jpg",
                    },
                    {
                        "category": "单击联机",
                        "title": "【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？！",
                        "play": 286769,
                        "author": "泛式",
                        "pic": "img/main/generalize/l/0.jpg",
                    },
                    {
                        "category": "唱见舞见",
                        "title": "我留这节操有何用！！？？【梗百科11】",
                        "play": 144848,
                        "author": "吃素的狮子",
                        "pic": "img/main/generalize/l/1.jpg",
                    },
                    {
                        "category": "单机联机",
                        "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                        "play": 78019,
                        "author": "暗猫の祝福",
                        "pic": "img/main/generalize/l/2.jpg",
                    },
                    {
                        "category": "正在直播",
                        "title": "【刀剑神域全系列】感谢刀剑这些年带给我的热血与感动。",
                        "play": 78019,
                        "author": "暗猫の祝福",
                        "pic": "img/main/generalize/l/2.jpg",
                    }
                ]
            }
        }
    ];
    init();

    var $show=$('#main .m-a-left .m-a-l-contribute');
    $show.hover(function(){
        $(this).find(' .m-g-l-ca .m-g-l-c-box .m-g-l-c-cover').fadeToggle (200);
        $(this).find('.m-l-l-c-info').slideToggle();
    }/*,function(){
        $(this).find(' .m-g-l-ca .m-g-l-c-box .m-g-l-c-cover').fadeOut(200);
    }*/)
    var $b=$('#main .m-a-left .m-a-l-contribute .m-g-l-ca .m-g-l-c-box');
    $b.hover(function(){
        $(this).find('.m-g-l-c-cover .m-g-l-c-c-wait').toggle();
        $(this).find('.m-g-l-c-c-move').toggleClass('opacity')
    })

    var $t=$('#main  .m-a-left .m-a-l-t-new');
    $t.click(function(){
        var n=$(this).index();
        $(this).addClass('on')
            .siblings().removeClass('on')
    })
    $b.mousemove(function(e){
        // console.log(e);
        var x=e.offsetX;
        /* var y=e.offsetY;*/
        //console.log(x);
        $(this).find('.m-g-l-c-c-move').animate({
            "width":x-8
        },10);
        //console.log($(this).find('.m-g-l-c-cover').attr('background-position'));
        imgChang(x);
    })
    function imgChang(x){
        $b.find('.m-g-l-c-cover').addClass('backg');
        var num=Math.round(x/13);
        //console.log("x: "+x);
        // console.log(num);
        if(num==10){
            $b.find('.m-g-l-c-cover.backg').css({'background-position':0+'px '+(-109)+'px'});
        }
        else if(num>=11){
            $b.find('.m-g-l-c-cover.backg').css({'background-position':(-160)+'px '+(-109)+'px'});
        }
        else{
            $b.find('.m-g-l-c-cover.backg').css({'background-position':(-160*num)+'px '+10+'px'});
        }
    }
    function init(time){
        var str='';
        for(var i=0,len=imgData[0].main.length;i<len;i++){
            //  var str;//页面会出现undefined
            str+='<div class="m-a-l-contribute">'+
                '<a href=" " class="m-g-l-ca">'+
                '<div class="m-g-l-c-box">'+
                '<div class="m-g-l-c-img">'+
                '<img src='+imgData[0].main[i].pic+' alt="">'+
                '</div>'+
                '<div class="m-g-l-c-cover">'+
                '<div class="m-g-l-c-c">'+
                '<span class="m-g-l-c-c-move">'+
                '</span>'+
                '</div>'+
                '<div class="m-g-l-c-c-wait">'+
                '</div>'+
                '<span>5:00</span>'+
               '</div>'+
                '</div>'+
                '<p>【智障傻缺集锦】智障系美少女的诞生与崛起！猴式智减法的祖先竟然是？</p>'+
                '<div class="m-l-l-c-info">'+
                '<span class="author"><i></i>'+imgData[0].main[i].author+'</span>'+
                '<span class="count"><i></i>'+imgData[0].main[i].play+'</span>'+
                '</div>'+
                '</a>'+
                '</div>';
            //console.log(str);
            $('#main .m-a-left .m-a-l-total').html(str);
        }

    }

level('周一');
    function level(sun){
        var str2='';
        var str3=''
        for(var i=1;i<8;i++) {
            str2 += '<li class="content">' +
                '<span>' + i + '</span>' +
                ' <div class="img">' +
                ' <img src=' + imgData[1].rAll[sun][i].pic +  ' alt=""/>' +
                ' </div>' +
                '  <div class="detail">' +
                '<div class="title">' +
                ' <p>' + imgData[1].rAll[sun][i].title + '</p>' +
                '</div>' +
                '<div class="score">' +
                ' <p>综合评分：' + imgData[1].rAll[sun][i].play+'</p>' +
                '</div>' +
                ' </div>' +
                ' </li>';
        }
        for(var i=1;i<8;i++) {
            str3 += '<li class="content">' +
                '<span>' + i + '</span>' +
                ' <div class="img">' +
                ' <img src=' + imgData[1].original[sun][i].pic +  ' alt=""/>' +
                ' </div>' +
                '  <div class="detail">' +
                '<div class="title">' +
                ' <p>' + imgData[1].original[sun][i].title + '</p>' +
                '</div>' +
                '<div class="score">' +
                ' <p>综合评分：' + imgData[1].original[sun][i].play+'</p>' +
                '</div>' +
                ' </div>' +
                ' </li>';
        }
        $('#main .m-a-r-b-s-all').html(str2);
        $('#main .m-a-r-b-s-original').html(str3);
    }

    var $right=$('#main .m-a-right ');
        $right.find('.m-a-r-top>span:not(:first-child)').hover(function(){
            $(this).addClass('on').siblings().removeClass('on');
           var index=$(this).index();
           if(index==1){
               $right.find('.m-a-r-b-s-box').stop().animate({
                   left:0
               },200)
           }
           else{
               $right.find('.m-a-r-b-s-box').stop().animate({
                   left:-260
               },200)
           }
        });
    $right.find('.select>div span:not(:first-child)').hide();
        $right.find('.select').hover(function(){
            $(this).find('.opation').toggle();
            $(this).find('.opation>span').click(function(){

                $right.find('.select>span').text($(this).html());
                $(this).hide().siblings().show();
                var index =$(this).index();
              //  alert($(this).html());
                if($(this).html()=='周一'){
                    console.log('yi');
                    level('周一')
                }
                else{
                    console.log('er');
                    level('三日')
                }
            })
    });
})();

/*番剧*/
(function(){
    var $time=$('#m-drama .m-a-left .m-a-l-title .time li');
    $time.click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        //alert($(this).index());0 1 2 3 4 5 6 7
    })
})();

/*右侧导航栏*/
/*    (function(){

 var inittop=$(window).scrollTop();
 if(inittop>=300){
 $('#main #m-sort').css({
 top:0
 })
 }
 else{
 $('#main #m-sort').css({
 top:240
 })
 }

 var $nav=$('#main #m-sort .nav .n-item');
 $nav.click(function(){
 var i=$(this).index();
 var top=  $(this).parents('.box').siblings('.nn').eq(i).offset().top;
 $(document).scrollTop(top);
 //console.log(top);
 //  $(this).parents('.box').siblings('.nn').eq(i)
 })

 //console.log($(window).scrollTop());


 $(window).scroll(function(e){
 var $scroll=$(document).scrollTop();
 // console.log($scroll);
 //  console.log(e);
 if($scroll>=300){
 $('#main #m-sort').css({
 top:0
 })
 /!*  $('#main #m-sort').animate({
 top:0
 },30)*!/
 }
 else{
 /!*  $('#main #m-sort').animate({
 top:240
 },30)*!/
 $('#main #m-sort').css({
 top:240
 })
 }

 var $back=$nav.parents('.box').siblings('.nn');
 //console.log($back);
 var height=$(window).height();
 // console.log(height);
 for(var i=0,len=$back.length;i<len;i++){
 //  console.log($back.eq(i).offset().top);
 // console.log($back.eq(i).offset().top);//滚动时遍历每个模块，判断
 var difference=$back.eq(i).offset().top-$scroll;
 //console.log(difference);
 if(difference<height/2){
 $nav.eq(i).addClass('change')
 .siblings().removeClass('change');
 }
 }
 })

 })()*/
(function(){
    var inittop = $(window).scrollTop();
    inittop >= 300 ? $('#main #m-sort').css({top: 0}) : $('#main #m-sort').css({top: 240});
    var $nav = $('#main #m-sort .nav .n-item');
    $nav.click(function () {
        var i = $(this).index();
        var top = $(this).parents('.box').siblings('.index').eq(i).offset().top;
        $(document).scrollTop(top);
    })
    $(window).scroll(function (e) {
        var $scroll = $(document).scrollTop();
        $scroll >= 300 ? $('#main #m-sort').css({top: 0}) : $('#main #m-sort').css({top: 240});
        var $back = $nav.parents('.box').siblings('.index');
        var height = $(window).height();
        for (var i = 0, len = $back.length; i < len; i++) {
            var difference = $back.eq(i).offset().top - $scroll;
            if (difference < height / 2) {
                $nav.eq(i).addClass('change')
                  .siblings().removeClass('change');
            }else{
                $nav.eq(i).removeClass('change');
            }
        }
    });

    //用于把前面的css中的效果删除改成用js 控制的
    $('#main #m-sort .n-item').hover(function(){
        $(this).addClass('hover').siblings().removeClass('hover')
    },function(){
        $(this).removeClass('hover');
    })


    $('#main #m-sort .icon').click(function() {
        $('html').animate({
            scrollTop:0
        },"slow");
    })

    var flag=true;
    $('#main #m-sort .sort').click(function() {

        $nav.each(function(i){
            $nav.eq(i).removeClass('change');
        })
        if(flag){
            $('#main #m-sort .open').animate({width:200},100);
            flag=false;
            $('#cover').show();
            $nav.unbind('click');
        }else{
            $('#main #m-sort .open').animate({width:0},100);
            flag=true;
            $('#cover').hide();

            $nav.click(function () {
                var i = $(this).index();
                var top = $(this).parents('.box').siblings('.nn').eq(i).offset().top;
                $(document).scrollTop(top);
            })

        }
        $nav.on('mousedown',function(e){
         var startop=$(this).position().top;///////////////////////////////
            $(this).hide();////////////////////////
            $('#main #m-sort .nav .clone').css({
                top:startop+'px',
                left:0
            }).html($(this).html()).show();/////////////////////////////////*/
            var cachex=e.clientX;
            var cachey=e.clientY;
           $(this).addClass('z-index').siblings().removeClass('z-index');
            var $This=$(this);
            $This.siblings().unbind('mouseenter mouseleave')/*.unbind('mouseleave')*/;
            $(document).mousemove(function(e){
                var diffy=e.clientY-cachey;
                var diffx=e.clientX-cachex;
                $This.css({
                    top:diffy+'px'
                    /*left:diffx+'px'*/
                });

             /*   $('#main #m-sort .nav .clone').css({
                    top:startop+diffy+'px'
                    /!*left:diffx+'px'*!/
                });///////////////////////////////////////
*/

             // changeposition();
              function changeposition(){
                    if(diffy<0){
                        console.log("up");
                    }else{
                        console.log("down");

                    }
                }
            });


            $(this).mouseup(function(){
                $('#main #m-sort .n-item').hover(function(){
                    $(this).addClass('hover').siblings().removeClass('hover')
                },function(){
                    $(this).removeClass('hover');
                });

                $(this).unbind('mouseup');
                $(document).unbind('mousemove');
            })
            return false;
        })

        $(document).onselectstart=function(){
            return false;
        }


    })
       /* $('#main #m-sort .open').animate({width:200},function(){
          flag=true
        },200)*/
      $nav.click(function(e){
            console.log(3);
           e.preventDefault();
        })
        $('#cover').click(function() {
            $('#main #m-sort .open').animate({width:0},100);
            $(this).css({display:'none'});
            flag=true;
        });

})();
