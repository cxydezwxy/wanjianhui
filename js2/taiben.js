var day = JSON.parse(sessionStorage.getItem('day'));
var ded = JSON.parse(sessionStorage.getItem('ded'));
var peoplo = JSON.parse(sessionStorage.getItem('allhu'));
console.log(day);
// 有限状态机
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
var $fsm = new StateMachine({
    init: '0',
    transitions: [{
            name: 'work1',
            from: '0',
            to: '1',
        },
        {
            name: 'work2',
            from: '1',
            to: '2',
        },
        {
            name: 'work3',
            from: '2',
            to: '3',
        },
        {
            name: 'work4',
            from: '3',
            to: '0',
        },
    ],
    methods: {
        onWork1: function () {
            $(".fren").eq(day - 1).addClass("die");
            $(".left").eq(day - 1).addClass("ded");
        },
        onWork2: function () {
            $(".fren1").eq(day - 1).addClass("die");
            $(".left1").eq(day - 1).addClass("ded");
        },
        onWork3: function () {
            $(".fren2").eq(day - 1).addClass("die");
            $(".left2").eq(day - 1).addClass("ded");
        },
        onWork4: function () {
            $(".fren3").eq(day - 1).addClass("die");
            $(".left3").eq(day - 1).addClass("ded");
            sessionStorage.setItem("fore", $fsm.state);
        }
    }
});
// 天数增加，多复制一个天数和流程
for (var w = 0; w < day; w++) {
    if (w > 0) {
        $(".wrap").first().clone().prependTo($("main")); //设置当天数大于1时用clone复制.warp到html到main中去
    }
}
//设置步骤循环完了之后数据保存颜色的改变。
for (var y = 0; y < (day - 1); y++) {
    $(".fren").eq(y).addClass("die");
    $(".left").eq(y).addClass("ded");
    $(".fren1").eq(y).addClass("die");
    $(".left1").eq(y).addClass("ded");
    $(".fren2").eq(y).addClass("die");
    $(".left2").eq(y).addClass("ded");
    $(".fren3").eq(y).addClass("die");
    $(".left3").eq(y).addClass("ded");
    $(".take").eq(y).hide(); //设置完成一天的循环时隐藏四个状态的点击kuai
}
// 改变天数显示的值
for (var p = 0; p <= day; p++) {
    $(".firstday").eq(p).html("第" + (p + 1) + "天"); //这里是变换天数的值，q+1是因为for循环的时候p的值为0
}
// 当天的显示
$(".take").eq(day - 1).show();
// 点击切换导航条
$(".firstday").click(function () {
    $(this).siblings().toggle(); //点击当前选中的天数隐藏并显示其四个步骤。
})
// 点击事件修改
console.log($(".fren"));
$(".fren").eq(day - 1).click(function () { //eq（0）表示选中的 第一天中的.fren。eq（1）就是选中第二天的.fren。
    $fsm.work1();
    alert("请杀手杀人");
    sessionStorage.setItem('z', JSON.stringify("1")); //设置第一个状态点击后为1
    sessionStorage.setItem('f', JSON.stringify("pros1")); //杀手杀人按钮点击后哦保存pros1然后在杀手杀人的页面判断是杀手杀死还是投票投死
    sessionStorage.setItem('v', JSON.stringify("2"));
    sessionStorage.setItem('s', JSON.stringify("1"));
    console.log($(".fren").eq(1));
    sessionStorage.removeItem('a');
    sessionStorage.removeItem('fore');
    window.location.href = "sharen.html"; //点击跳转
    //这里是通过判断wote==1来显示死亡的过程
});
// $(function () {
//     $(".fren").eq(y).after("<p>" + ese.ne + "号" + "被杀手杀死,真实身份是" + ese.Identity + "</p>");
// })
$(".fren1").eq(day - 1).click(function () { //第二个状态的运行
    $fsm.work2();
    sessionStorage.setItem('z', JSON.stringify("2")); //设置第一个状态点击后为2
    alert("请亡灵发表遗言")
});
$(".fren2").eq(day - 1).click(function () {
    $fsm.work3();
    sessionStorage.setItem('z', JSON.stringify("3")); //设置第一个状态点击后为3
    alert("请玩家依次发言");
});
$(".fren3").eq(day - 1).click(function () {
    $fsm.work4();
    alert("请全民投票")
    // sessionStorage.removeItem('z');
    sessionStorage.setItem('z', JSON.stringify("4")); //设置第一个状态点击后为4
    sessionStorage.setItem('a', JSON.stringify("pros")); //这里是点击第四个按钮保存pros，然后可以判断是通过投票杀死的
    //这里是通过判断phat == 4来显示死亡的过程\
    sessionStorage.removeItem('f');
    window.location.href = "sharen.html";
});
// $(function () {
//     $(".fren3").eq(day-1).after("<p>" + asd.ne + "号" + "被投票投死了,真实身份是" + asd.Identity + "</p>");
// })
console.log($fsm.state);
//保存数据，这里不保存phat=4的数据是因为当phat=4时会在循环下一个天数时就将状态改变到下一个天数
var phat = JSON.parse(sessionStorage.getItem('z')); //设置没一个步骤对应的状态值
console.log(phat);
if (phat == 1) {
    $fsm.work1();
} else if (phat == 2) {
    $fsm.work1();
    $fsm.work2();
} else if (phat == 3) {
    $fsm.work1();
    $fsm.work2();
    $fsm.work3();
}
console.log(day);

console.log($fsm.state)

var wote = JSON.parse(sessionStorage.getItem('s'));
//输入死亡人的死亡方式和身份
for (i = 0; i < ded.length; i++) {
    //i=0, eq = 0 , 
    //i=1, eq =0 ,
    //i=2 , eq=1
    //i=3, eq =1 
     //i=4, eq=2 
    if (i % 2 == 0) {
        
        $(".fren").eq(Math.floor(i/2)).after(ded[i]+1  + "号被杀手杀死，" + "他的身份是" +peoplo[ded[i]]);
    }else{
        $(".fren3").eq(Math.floor(i/2)).after(ded[i]+1 + "号被投票投死，" + "他的身份是" +peoplo[ded[i]]);
    }
    console.log(i-day)
    console.log(i-(day+1));
}
// sessionStorage.removeItem('z');
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
    sessionStorage.removeItem('v'); //这里的removeItem是清除保存的数据。
    window.location.href = "yemian.html";
})
console.log($fsm.state)