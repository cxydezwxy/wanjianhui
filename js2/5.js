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
    ],
    methods: {
        onWork1: function () {
            $(".fren").addClass("die");
            $(".left").addClass("ded");
        },
        onWork2: function () {
            $(".fren1").addClass("die");
            $(".left1").addClass("ded");
        },
        onWork3: function () {
            $(".fren2").addClass("die");
            $(".left2").addClass("ded");
        },
        onWork4: function () {
            $(".fren3").addClass("die");
            $(".left3").addClass("ded");
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
}

$(".fren").click(function () {
    $fsm.work1();
    alert("请杀手杀人");
    sessionStorage.setItem('z', JSON.stringify("1"));
    window.location.href = "sharen.html";
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
    window.location.href = "tpsr.html";
});
var ese = JSON.parse(sessionStorage.getItem('ing'));
$(".fren").after("<p>" + ese.ne+"号" + "被杀手杀死,真实身份是" + ese.Identity + "</p>");
var asd = JSON.parse(sessionStorage.getItem('xing'));
$(".fren3").after("<p>" + asd.ne+"号" + "被杀手杀死,真实身份是" + asd.Identity + "</p>");
