var data1 = JSON.parse(sessionStorage.getItem('key'));
console.log(data1);
var t = 0;
var q;
$(document).ready(function () {
    $(".end").click(function(){
        sessionStorage.removeItem('fun');
        sessionStorage.removeItem('ing');
        sessionStorage.removeItem('allhu');
        sessionStorage.removeItem('dayi');
        sessionStorage.removeItem('hu');
        sessionStorage.removeItem('ki');
        sessionStorage.removeItem('a');
        sessionStorage.removeItem('fore');
        sessionStorage.removeItem('key');
        sessionStorage.removeItem('zing');
        sessionStorage.removeItem('z');
        sessionStorage.removeItem('key');
        sessionStorage.removeItem('need');
        sessionStorage.removeItem('day');
        sessionStorage.removeItem('f');
        sessionStorage.removeItem('s');
        sessionStorage.removeItem('ded');
        sessionStorage.removeItem('ning');
        sessionStorage.removeItem('v'); //这里的removeItem是清除保存的数据。
        window.location.href = "yemian.html";
    })
    for (i = 0; i < data1.length; i++) {
        t++;
        $("#panda").append("<div class=round>" + data1[i] + "<p class=gry >" + t + "号" + "</p>" + "<img src=10.png class=niff>" + "</div>");
    }
    // $(".round").hover(function () {
    //     $(this).css({
    //         "border": "3px solid red"
    //     });
    // }, function () {
    //     $(this).css({
    //         "border": "3px solid #fff"
    //     });
    // });
    $(".round").click(function () {
        $(".killnum").eq(q).css({
            "background-color": "#f5c97b"
        });
        $(".niff").hide();
        q = $(".round").index($(this));
        console.log(this);
        console.log(q);
        $(".niff").eq(q).show();
        $(".killnum").eq(q).css({
            "background-color": "#83b09a"
        });
        console.log(data1.length);
    });
    var data4 = JSON.parse(sessionStorage.getItem('ning'));
    for (i = 0; i < data4.length; i++) {
        if (data4[i].status == "die") {
            $(".killnum").eq(data4[i].ne).addClass("backll") //将死人对应的格子颜色改变成灰色
        }
    }

});