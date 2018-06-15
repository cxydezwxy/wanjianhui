var data1 = JSON.parse(sessionStorage.getItem('key'));
var data2 = JSON.parse(sessionStorage.getItem('f'));
var data3 = JSON.parse(sessionStorage.getItem('a'));
var data4 = JSON.parse(sessionStorage.getItem('ning'));
var alivepe = JSON.parse(sessionStorage.getItem('huing'));
var fore = JSON.parse(sessionStorage.getItem('fore'));
var fore1 = JSON.parse(sessionStorage.getItem('hu'));
var fore2 = JSON.parse(sessionStorage.getItem('ki'));
console.log(data2);
var peoplo = [];
var t = 0;
var q;
var ki = [];
var alive = [];
var ever = [];
$(".end").click(function () {
    sessionStorage.clear() //这里的removeItem是清除保存的数据。
    window.location.href = "yemian.html";
})
if (fore1 == undefined) {
    var hu = [];
} else {
    var hu = JSON.parse(sessionStorage.getItem('hu'));
}

if (fore2 == undefined) {
    var ki = [];
} else {
    var ki = JSON.parse(sessionStorage.getItem('ki'));
}
if (fore == 0) {
    document.getElementById('topc').innerHTML = "全民投票";
    document.getElementsByClassName('ship')[0].innerHTML = "发言讨论结束，大家请投票"
    document.getElementsByClassName('head')[0].innerHTML = "点击投票数最多人的头像"
}
if (data4 == undefined) {
    var need = [];
} else {
    var need = JSON.parse(sessionStorage.getItem('ning'));
}


//保存死亡人的序号
var time = JSON.parse(sessionStorage.getItem('ded'));
if (time == undefined) {
    var ded = [];
} else {
    var ded = JSON.parse(sessionStorage.getItem('ded'));
    console.log(ded)
    sessionStorage.setItem('ded', JSON.stringify(ded));
}
for (i = 0; i < data1.length; i++) {
    if (data1[i] === "<div class=killnum><span class=tianpin></span><span class=juewang>平民</span></div>") {
        peoplo.push("平民") //将平民的数组推到 peoplp数组里面
        if (fore1 == undefined) {
            hu.push(i)
            ever.push(i)
        }
    } else {
        peoplo.push("杀手") //将杀手的数组推到 peoplp数组里面
        if (fore2 == undefined) {
            ki.push(i)
            ever.push(i)
        }
    }
}
if (data4 == undefined) {
    for (i = 0; i < data1.length; i++) {
        var gamer = [];
        gamer[i] = {
            status: "alive", //设置状态为alive
            Identity: peoplo[i], //设置玩家身份
            ne: i //设置玩家编号
        }
        console.log(gamer[i]);
        need.push(gamer[i]);
    } //设置玩家的状态以及，玩家的身份和编号。
}
console.log(ever);
console.log(ki);
console.log(hu);
console.log(peoplo);
sessionStorage.setItem('allhu', JSON.stringify(peoplo));
$(document).ready(function () {
    for (i = 0; i < data1.length; i++) {
        t++;
        $("#panda").append("<div class=round>" + data1[i] + "<p class=gry >" + t + "号" + "</p>" + "<img src=10.png class=niff>" + "</div>");
    } //将玩家添加到html页面中
    $(".corg").click(function () { //点击确认按钮的事件
        console.log(need);
        if (data2 == "pros1" && need[q].Identity == "杀手") {
            alert("请杀平民"); //这里我设置了点击台本页面的杀人按钮保存数据pros1 然后在这里若有这个数值，并选中的人是杀手的话就会出现弹框，若没有这数值就不会出现弹框。就是投票页面可以杀杀手
        } else if (need[q].status == "die") { //这里设置若选中的玩家状态为die的时候出现提示框
            alert("请杀活人")
        } else {
            need[q] = {
                status: "die",
                Identity: peoplo[q],
                ne: q,
            } //这里是改变玩家的状态为die也就是杀人
            ded.push(q);
            console.log(ki)
            console.log(hu)
            //将死亡人的序号从其对应的数组里删除
            for (i = 0; i < ki.length; i++) {
                if (ki[i] == q) {
                    ki.splice(i--, 1);

                }
            }
            for (i = 0; i < hu.length; i++) {
                if (hu[i] == q) {
                    hu.splice(i--, 1);
                }
                console.log(i)
            }
            console.log(ded)
            console.log(ki)
            console.log(hu)
            sessionStorage.setItem('ki', JSON.stringify(ki))
            sessionStorage.setItem('hu', JSON.stringify(hu))
            sessionStorage.setItem('ded', JSON.stringify(ded))
            sessionStorage.setItem('ning', JSON.stringify(need));
            console.log(need)
            var day = JSON.parse(sessionStorage.getItem('day'));
            if (data2 == "pros1") {
                if (day == undefined) {
                    var day = 1
                }
            } else if (data3 == "pros") {
                if (day == undefined) {
                    var day = 1
                } else {
                    day++
                }
            }
            sessionStorage.setItem('day', JSON.stringify(day));
            if (ki.length == hu.length) {
                sessionStorage.setItem('fun', JSON.stringify("bad"));
                window.location.href = "jgy.html"
            } else if (ki.length == 0) {
                window.location.href = "jgy.html"
            } else {
                window.location.href = "taiben.html"
            }
        }
        console.log(day)
//这里判断玩家状态为die 时改变背景颜色为灰色
        console.log(need[q])
    })

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
    for (i = 0; i < data4.length; i++) {
        if (data4[i].status == "die") {
            $(".killnum").eq(data4[i].ne).addClass("backll") //将死人对应的格子颜色改变成灰色
        }
    }
    console.log(data4)
});