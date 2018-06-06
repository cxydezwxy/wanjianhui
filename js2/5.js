
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
        // {
        //     name: 'none',
        //     from: '4',
        //     to: '0'
        // }
    ],
    methods: {
        onWork1: function () {
            $(".fren").eq(day-1).addClass("die");
            $(".left").eq(day-1).addClass("ded");
        },
        onWork2: function () {
            $(".fren1").eq(day-1).addClass("die");
            $(".left1").eq(day-1).addClass("ded");
        },
        onWork3: function () {
            $(".fren2").eq(day-1).addClass("die");
            $(".left2").eq(day-1).addClass("ded");
        },
        onWork4: function () {
            $(".fren3").eq(day-1).addClass("die");
            $(".left3").eq(day-1).addClass("ded");
        }
    }
});
var day=1;
var phat = JSON.parse(sessionStorage.getItem('z'));//设置没一个步骤对应的状态值
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
} else if (phat == 4) {
    $fsm.work1();
    $fsm.work2();
    $fsm.work3();
    $fsm.work4();
    day++//运行第四个步骤时天数+1
    $(".take").hide();//运行玩第四个步骤后隐藏四个点击块
    $(".firstday").click(function () {
        $(".take").toggle();//点击隐藏显示四个点击块
    });
    $(".take").after("<div class=firstday1>" + "第"+day+"天" + "</div>");//在四个点击块的后面加上新的天数模块
    console.log(day)
}
    $(".firstday1").after("<div class=take style=>" +     
        "<div class=nao>" +
        "  <div class=fren>" +
        "<div class=left></div>杀手杀人</div>" +
        "<div class=fren1>" +
        "   <div class=left1></div>亡灵发表遗言</div>" +
        "    <div class=fren2>" +
        " <div class=left2></div>玩家依次发言</div>" +
        "<div class=fren3>" +
        "<div class=left3></div>全民投票</div>"+"</div>" +"</div>")//这里是将第二天的四个状态添加到html页面种firstday1 的后面​
console.log($(".fren"))
$(".fren").eq(day-1).click(function () {//eq（0）表示选中的 第一天中的.fren。eq（1）就是选中第二天的.fren。
    $fsm.work1();
    alert("请杀手杀人");
    sessionStorage.setItem('z', JSON.stringify("1"));//设置第一个状态点击后为1
    window.location.href = "sharen.html"; //点击跳转
    sessionStorage.setItem('f', JSON.stringify("pros1")); //杀手杀人按钮点击后哦保存pros1然后在杀手杀人的页面判断是杀手杀死还是投票投死
    sessionStorage.setItem('v', JSON.stringify("2"));
    sessionStorage.setItem('s', JSON.stringify("1"));
    console.log($(".fren").eq(1));
});
$(".fren1").eq(day-1).click(function () {//第二个状态的运行
    $fsm.work2();
    alert("请亡灵发表遗言")
    sessionStorage.setItem('z', JSON.stringify("2"));//设置第一个状态点击后为2
});
$(".fren2").eq(day-1).click(function () {
    $fsm.work3();
    alert("请玩家依次发言");
    sessionStorage.setItem('z', JSON.stringify("3"));//设置第一个状态点击后为3
});
$(".fren3").eq(day-1).click(function () {
    $fsm.work4();
    alert("请全民投票")
    sessionStorage.setItem('z', JSON.stringify("4"));//设置第一个状态点击后为4
    window.location.href = "sharen.html";
    sessionStorage.setItem('a', JSON.stringify("pros"));//这里是点击第四个按钮保存pros，然后可以判断是通过投票杀死的
});
var ese = JSON.parse(sessionStorage.getItem('ing'));
console.log($fsm.state)
var asd = JSON.parse(sessionStorage.getItem('zing'));
var wote = JSON.parse(sessionStorage.getItem('s'));
if(wote==1){
$(".fren").eq(day-2).after("<p>" + ese.ne + "号" + "被杀手杀死,真实身份是" + ese.Identity + "</p>");
}   //这里是通过判断wote==1来显示死亡的过程
if (phat == 4) {
    $(".fren3").eq(day-2).after("<p>" + asd.ne + "号" + "被投票投死了,真实身份是" + asd.Identity + "</p>");
}//这里是通过判断phat == 4来显示死亡的过程
// sessionStorage.removeItem('z');
$(".again").click(function () {
    sessionStorage.removeItem('ing');
    sessionStorage.removeItem('zing');
    sessionStorage.removeItem('z');
    sessionStorage.removeItem('key');
    sessionStorage.removeItem('need');
    sessionStorage.removeItem('f');
    sessionStorage.removeItem('s');
    sessionStorage.removeItem('ning');
    sessionStorage.removeItem('v');//这里的removeItem是清除保存的数据。
    window.location.href = "yemian.html";
})
console.log($fsm.state)
