var data1 = JSON.parse(sessionStorage.getItem('key'));
console.log(data1);
var t = 0;
var q;
$(document).ready(function () {
    $(".end").click(function () {
        sessionStorage.clear() //这里的removeItem是清除保存的数据。
        window.location.href = "yemian.html";
    })
    for (i = 0; i < data1.length; i++) {
        t++;
        $("#panda").append("<div class=round>" + data1[i] + "<p class=gry >" + t + "号" + "</p>" + "<img src=10.png class=niff>" + "</div>");
    }
    var data4 = JSON.parse(sessionStorage.getItem('ning'));
    for (i = 0; i < data4.length; i++) {
        if (data4[i].status == "die") {
            $(".killnum").eq(data4[i].ne).addClass("backll") //将死人对应的格子颜色改变成灰色
        }
    }
});