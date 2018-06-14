var fun = JSON.parse(sessionStorage.getItem('fun'));
var ki = JSON.parse(sessionStorage.getItem('ki'));
var hu = JSON.parse(sessionStorage.getItem('hu'));
var day = JSON.parse(sessionStorage.getItem('day'));
var ded = JSON.parse(sessionStorage.getItem('ded'));
var allhu = JSON.parse(sessionStorage.getItem('allhu'));
var fore = JSON.parse(sessionStorage.getItem('fore'));
$(document).ready(function () {
    //点击右上角×按钮删除数据并跳转页面
    $(".end").click(function () {
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
        sessionStorage.removeItem('v');
        window.location.href = "yemian.html";
    })
    //判断fun为bad时杀手胜利否则为平民胜利
    if (fun == "bad") {
        $(".box20").html("杀手胜利") 
    } else {
        $(".box20").html("平民胜利")
    }
    //渲染人数
    $(".allcolor").html("本次游戏共计时0小时25分钟" + "<p>" + "杀手还剩" + ki.length + "人" + "</p>" +
        "<p>" + "平民还剩" + hu.length + "人" + "</p>")
    if (fore == "0") {
        //这里是渲染天数，但因为投票杀死人后如果游戏胜利了天数还是+1所以要减一天
        for (var w = 0; w < day-1; w++) {
            if (w > 0) {
                $(".oneday").first().clone().prependTo($(".all")); //设置当天数大于1时用clone复制.warp到html到main中去
            }
        }
    } else {
        //杀手杀完人天数是不变的所以不用减一直接循环
        for (var w = 0; w < day; w++) {
            if (w > 0) {
                $(".oneday").first().clone().prependTo($(".all")); //设置当天数大于1时用clone复制.warp到html到main中去
            }
        }
    }
    //改变渲染的天数
    for (var p = 0; p <= day; p++) {
        $(".time").eq(p).html("第" + (p + 1) + "天"); //这里是变换天数的值，q+1是因为for循环的时候p的值为0
    }
    //将死亡信息渲染到页面
    for (i = 0; i < ded.length; i++) {
        if (i % 2 == 0) {
            $(".mor1").eq(Math.floor(i / 2)).html("白天:" + (ded[i] + 1) + "号被杀手杀死，" + "他的身份是" + allhu[ded[i]]);
        } else {
            if (ded[i] == undefined) {
                $(".mor2").eq(Math.floor(i / 2)).html();
            } else {
                $(".mor2").eq(Math.floor(i / 2)).html("晚上:" + (ded[i] + 1) + "号被投票投死，" + "他的身份是" + allhu[ded[i]]);
            }
        }
    }
    //点击再来一局清除数据并跳转页面。
    $(".again").click(function () {
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
        sessionStorage.removeItem('v');
        window.location.href = "yemian.html";
    })
})