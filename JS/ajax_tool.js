/**
 * Created by user on 2017/8/17.
 */

var ajax_tool= {
    ajax_t: function (option)
{
    var xmlHttp;
    if (XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    }
    else {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    var formatStr = "";
    for (var item in option.data) {
        formatStr += item;
        formatStr += "=";
        formatStr += option.data[item];
        formatStr += "&";
    }
    formatStr = formatStr.slice(0, -1);

    if (option.method == "get") {
        option.url = option.url + "?" + formatStr;
        option.data = null;
    }

    xmlHttp.open(option.method, option.url);


    if (option.method == 'post') {
        xmlHttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    }
    xmlHttp.send(option.data);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            option.success();
        }
    }
}
}