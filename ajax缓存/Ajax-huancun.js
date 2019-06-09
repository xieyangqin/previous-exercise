/**
 * Created by user on 2017/8/8.
 */

var url='https://route.showapi.com/181-1';
<!-- var showapi_appid='30603';
var showapi_sign='98960666afeb4992ae91971d13494090';
var page=1;
var num=8; -->
getJson();
function getJson() {
    var xmlHttp = new XMLHttpRequest();//创建ajax对象

    var params=[]//参数数组

    var sendDate={//json格式
        showapi_appid:'30603',
        showapi_sign:'98960666afeb4992ae91971d13494090',
        page:1,
        num:8
    }
    /*
     for(var i=0;i<arr.length;i++){

     }
     */
    //console.log(sendDate.num);
    //console.log(sendDate['num']);
    for(var key in sendDate){//不能对json以普通for循环方式遍历，因为json没有length属性
        //键：key 值：sendDate【key】
        //console.log(key,sendDate[key]);
        params.push(key+'='+sendDate[key]);
        //console.log(params)
    }
    var postDate=params.join('&');
    //console.log(postDate);
    //json=>数组+》字符串
//数据设置
    //xmlHttp.open('GET', url + '?' + 'showapi_appid=' + showapi_appid + '&showapi_sign=' + showapi_sign + '&page=' + page + '&num=' + num, true);
    xmlHttp.open('GET',url+"?"+postDate);

    xmlHttp.send(null);//发松请求
    xmlHttp.onreadystatechange = function () {
        //  console.log(xmlHttp.readyState);
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            // console.log(JSON.parse(xmlHttp.response));
            var dataList = JSON.parse(xmlHttp.response).showapi_res_body.newslist;
            //console.log(dataList.showapi_res_body.newslist);
            console.log(dataList);
            showPage(dataList);
        }
    }
}


function showPage(dataList) {
    var str = '';//文本模板渲染
    var length = dataList.length;
    for (var i = 0; i < length; i++) {
        console.log(dataList[i].url);
      <!--   str += " <a href='${dataList[i].url}' class='items flex_row'> +
        "<div class='img'>" +
        "<img src='http://www.tanzhouphp.com/tanzhoue/images/newsList/${1+i}.jpg' alt=''>" +
        "</div>" +
        "<div class='bd'>" +
        "<p class='label'>${dataList[i].title}</p>" +
        "</div>" +
        "<div class='ft'>&GT;</div>" +
        "</a>"
        -->

			str += `
					<a href="${dataList[i].url}" class="items flex_row">
						<div class="img"><img src="http://www.tanzhouphp.com/tanzhoue/images/newsList/${1+i}.jpg" alt=""></div>
				 <div class="bd">
                 <p class="label">${dataList[i].title}</p>
				</div>
			 <div class="ft">&GT</div>
					</a>
				`

        console.log(str);
    }
}
