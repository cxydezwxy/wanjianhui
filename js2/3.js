var data1 = JSON.parse(sessionStorage.getItem('key'));
console.log(data1);
var t = 0;
var q;
$(document).ready(function () {
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
        for (i = 0; i < data1.length; i++) {
            console.log(i)  
            $(".backl").css({"background-color": "#f5c97b"});
        }
        $(".niff").hide();
        q = $(".round").index($(this));
        console.log(this);
        console.log(q);
        $(".niff").eq(q).show();
        $(".killnum").eq(q).addClass("backl");
        console.log(data1.length);    
    });
});