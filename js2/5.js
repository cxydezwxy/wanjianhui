var day = 2;
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
            to: '4',
        }, 
        {
            name: 'none',
            from: '4',
            to: '0'
        }
    ],
    methods: {
        onWork1: function () {
            $(".fren").eq(0).addClass("die");
            $(".left").eq(0).addClass("ded");
        },
        onWork2: function () {
            $(".fren1").eq(0).addClass("die");
            $(".left1").eq(0).addClass("ded");
        },
        onWork3: function () {
            $(".fren2").eq(0).addClass("die");
            $(".left2").eq(0).addClass("ded");
        },
        onWork4: function () {
            $(".fren3").eq(0).addClass("die");
            $(".left3").eq(0).addClass("ded");
        }
    }
});
var phat = JSON.parse(sessionStorage.getItem('z'));
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
    $(".take").hide();
    $(".firstday").click(function () {
        $(".take").toggle();
    });
    $(".take").after("<div class=firstday1>" + "第二天" + "</div>");
}
$(".fren").eq(0).click(function () {
    $fsm.work1();
    alert("请杀手杀人");
    sessionStorage.setItem('z', JSON.stringify("1"));
    window.location.href = "sharen.html";
    sessionStorage.setItem('f', JSON.stringify("pros1"));
    console.log($(".fren").eq(1));
});
$(".fren1").click(function () {
    $fsm.work2();
    alert("请亡灵发表遗言")
    sessionStorage.setItem('z', JSON.stringify("2"));
});
$(".fren2").click(function () {
    $fsm.work3();
    alert("请玩家依次发言");
    sessionStorage.setItem('z', JSON.stringify("3"));
});
$(".fren3").click(function () {
    $fsm.work4();
    alert("请全民投票")
    sessionStorage.setItem('z', JSON.stringify("4"));
    window.location.href = "sharen.html";
    sessionStorage.setItem('a', JSON.stringify("pros"));
});
var ese = JSON.parse(sessionStorage.getItem('ing'));

var asd = JSON.parse(sessionStorage.getItem('zing'));

$(".fren").eq(0).after("<p>" + ese.ne + "号" + "被杀手杀死,真实身份是" + ese.Identity + "</p>");

if (phat == 4) {
    $(".fren3").eq(0).after("<p>" + asd.ne + "号" + "被投票投死了,真实身份是" + asd.Identity + "</p>");
}
sessionStorage.removeItem('z');
$(".again").click(function () {
    sessionStorage.removeItem('ing');
    sessionStorage.removeItem('zing');
    sessionStorage.removeItem('z');
    sessionStorage.removeItem('key');
    window.location.href = "yemian.html";
})
console.log($fsm.state)
$(".firstday1").after("<div class=take style=>" +
    "<div class=nao>" +
    "  <div class=fren>" +
    "<div class=left></div>杀手杀人</div>" +
    "<div class=fren1>" +
    "   <div class=left1></div>亡灵发表遗言</div>" +
    "    <div class=fren2>" +
    " <div class=left2></div>玩家依次发言</div>" +
    "<div class=fren3>" +
    "<div class=left3></div>全民投票</div>"+"</div>" +"</div>")