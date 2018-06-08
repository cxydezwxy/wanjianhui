$(function () {
    var data1 = JSON.parse(sessionStorage.getItem('key'));
    var data2 = JSON.parse(sessionStorage.getItem('f'));
    var data3 = JSON.parse(sessionStorage.getItem('a'));
    var data4 = JSON.parse(sessionStorage.getItem('ning'));
    var fore =JSON.parse(sessionStorage.getItem('fore'));
    var peoplo = [];
    var t = 0;
    var q;
    var need = [];
    var ki = [];
    var hu = [];
    var ded = [];
    var day = 1;
    for (i = 0; i < data1.length; i++) {
        if (data1[i] === "<div class=killnum><span class=tianpin></span><span class=juewang>平民</span></div>") {
            peoplo.push("平民") //将平民的数组推到 peoplp数组里面
            hu.push(i)
        } else {
            peoplo.push("杀手") //将杀手的数组推到 peoplp数组里面
            ki.push(i)
        }
    }
    if(fore==0){
        document.getElementById('topc').innerHTML="全民投票";
        document.getElementsByClassName('ship')[0].innerHTML="发言讨论结束，大家请投票"
        document.getElementsByClassName('head')[0].innerHTML="点击投票数最多人的头像"
    }//运行第四个步骤是保存数据0
    for (i = 0; i < data1.length; i++) {
        var gamer = [];
        gamer[i] = {
            status: "alive", //设置状态为alive
            Identity: peoplo[i], //设置玩家身份
            ne: i + 1 + "号" //设置玩家编号
        }
        console.log(gamer[i]);
        need.push(gamer[i]);
    }
    for (i = 0; i < data1.length; i++) {
        t++;
        $("#panda").append("<div class=round>" + data1[i] + "<p class=gry >" + t + "号" + "</p>" + "<img src=10.png class=niff>" + "</div>");
    }
    $(".round").click(function () {
        for (i = 0; i < need.length; i++) {
            $(".killnum").removeClass("backl");
        } //这里是重置颜色为初始状态。
        $(".niff").hide(); //这里是将小刀隐藏
        q = $(".round").index($(this)); //这里是选中的round的索引号赋值给q
        console.log(q);
        $(".niff").eq(q).show(); //这里是将点击round对应的小刀显示出来
        $(".killnum").eq(q).addClass("backl") //这里是点击改变其颜色
        console.log(data1.length);
    });
})