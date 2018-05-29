var $fsm = new StateMachine({
    init: 'none',
    transitions: [{
            name: 'work1',
            from: 'none',
            to: 'time1'
        },
        {
            name: 'work2',
            from: 'time1',
            to: 'time2'
        },
        {
            name: 'work3',
            form: 'time2',
            to: 'time3'
        },
        {
            name: 'work4',
            form: 'time3',
            to: 'time4'
        }
    ],
    methods:{
        onWork1:function(){
            $(".fren").addClass("die");
            $(".left").addClass("ded");
        },
        onWork2:function(){
            $(".fren1").addClass("die");
            $(".left1").addClass("ded");
        },
        onWork3:function(){
            $(".fren2").addClass("die");
            $(".left2").addClass("ded");
        },
        onWork4:function(){
            $(".fren3").addClass("die");
            $(".left3").addClass("ded");
        }
    }
    
});
$(".fren").click(function(){
    $fsm.onWork1();
    alert("进入杀人环节")
})
$(".fren1").click(function(){
    $fsm.onWork2();
    alert("请亡灵发表遗言")
})
$(".fren2").click(function(){
    $fsm.onWork3();
    alert("请玩家依次发言")
})
$(".fren3").click(function(){
    $fsm.onWork4();
    alert("请全民投票")
})
