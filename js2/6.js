var data1 = JSON.parse(sessionStorage.getItem('key'));
var data2 = JSON.parse(sessionStorage.getItem('f'));
var data3 = JSON.parse(sessionStorage.getItem('a'));
console.log(data2);
var peoplo = [];
var t = 0;
var q;
var need = [];
var ki = [];
var hu = [];
for (i = 0; i < data1.length; i++) {
    if (data1[i] === "<div class=killnum><span class=tianpin></span><span class=juewang>平民</span></div>") {
        peoplo.push("平民")//将平民的数组推到 peoplp数组里面
        hu.push("平民")
    } else {
        peoplo.push("杀手")//将杀手的数组推到 peoplp数组里面
        ki.push("杀手")
    }
}
console.log(ki.length);
console.log(hu);
console.log(peoplo);
for (i = 0; i < data1.length; i++) {
    var gamer = [];
    gamer[i] = {
        status: "alive", //设置状态为alive
        Identity: peoplo[i],//设置玩家身份
        ne: i + 1 + "号"//设置玩家编号
    }
    console.log(gamer[i]);
    need.push(gamer[i]);
}//设置玩家的状态以及，玩家的身份和编号。
console.log(need);
$(document).ready(function () {
    for (i = 0; i < data1.length; i++) {
        t++;
        $("#panda").append("<div class=round>" + data1[i] + "<p class=gry >" + t + "号" + "</p>" + "<img src=10.png class=niff>" + "</div>");
    }//将玩家添加到html页面中
    $(".corg").click(function () { //点击确认按钮的事件
        if (data2 == "pros1" && need[q].Identity == "杀手") {
            alert("请杀平民");//这里我设置了点击台本页面的杀人按钮保存数据pros1 然后在这里若有这个数值，并选中的人是杀手的话就会出现弹框，若没有这数值就不会出现弹框。就是投票页面可以杀杀手
        } else if (need[q].status == "die") { //这里设置若选中的玩家状态为die的时候出现提示框
            alert("请杀活人")
        } else {
            need[q] = {
                status: "die",
                Identity: peoplo[q],
                ne: q + 1,
            }//这里是改变玩家的状态为die也就是杀人
            if (data2 == "pros1") {
                sessionStorage.setItem('ing', JSON.stringify(need[q])); //这里是被杀手杀死的人的数据保存到ing
            } else if (data3 == "pros") {
                sessionStorage.setItem('zing', JSON.stringify(need[q]));//这里是将被投票投死的人的数据保存到zing
            }
            window.location.href = "taiben.html";//跳转页面
        }
        console.log(need[q])
        console.log(need[q])
        sessionStorage.removeItem('f');
    })
    console.log(need)
    $(".round").click(function () {
        for (i = 0; i < need.length; i++) {
            $(".killnum").removeClass("backl");
        }//这里是重置颜色为初始状态。
        $(".niff").hide();//这里是将小刀隐藏
        q = $(".round").index($(this));//这里是选中的round的索引号赋值给q
        console.log(q);
        $(".niff").eq(q).show();//这里是将点击round对应的小刀显示出来
        $(".killnum").eq(q).addClass("backl")//这里是点击改变其颜色
        console.log(data1.length);
    });
    var qwe = JSON.parse(sessionStorage.getItem('ing'));//这里将被杀手杀死的人的数据提取出来赋值给qwe
        $(".killnum").eq(qwe.ne - 1).addClass("backll")//将死人对应的格子颜色改变成灰色
    need[qwe.ne - 1] = {
        status: "die",
        Identity: peoplo[qwe.ne - 1],
        ne: qwe.ne,
    }//改变死人在玩家数组里的状态
    console.log(need[qwe.ne]);
    var asdf = JSON.parse(sessionStorage.getItem('zing'));//这里将投票投死人的数据提取出来赋值给asdf
        $(".killnum").eq(asdf.ne - 1).addClass("backll")//将死人对应的格子颜色改变成灰色
    need[asdf.ne - 1] = {
        status: "die",
        Identity: peoplo[asdf.ne - 1],
        ne: asdf.ne,
    }//改变死人在玩家数组里的状态
    console.log(asdf);
});


// 1   
// 04*1-4
// 14*1-3
// 24*1-2

// 4*1-1
// 3
//   2 
//   4
//   5
//   6
//   7

//   3
//   8
//   9
//   10
//   11