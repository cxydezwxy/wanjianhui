var data1 = JSON.parse(sessionStorage.getItem('key'));
console.log(data1);
var peoplo = [];
var t = 0;
var q;
var need = [];
for (i = 0; i < data1.length; i++) {
    if (data1[i] === "<div class=killnum><span class=tianpin></span><span class=juewang>平民</span></div>") {
        peoplo.push("平民")
    } else {
        peoplo.push("杀手")
    }
}
console.log(peoplo);
for (i = 0; i < data1.length; i++) {
    var gamer = [];
    gamer[i] = {
        status: "alive",
        Identity: peoplo[i]
    }
    need.push(gamer[i]);
}
function corg() {
}
console.log(need);
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
        $(".killnum").eq(q).css({
            "background-color": "#f5c97b"
        });
        $(".niff").hide();
        q = $(".round").index($(this));

        console.log(q);
        $(".niff").eq(q).show();
        $(".killnum").eq(q).css({
            "background-color": "#83b09a"
        });
        console.log(data1.length);
    });

});