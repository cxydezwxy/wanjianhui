var oPlayerNum = document.getElementById("player"); //玩家总人数
var osliderBlock = document.getElementById("slider"); //滑块的值
function on_change() {
    if (oPlayerNum.value >= 4 && oPlayerNum.value <= 18) { //设置方框里面玩家人数范围
        osliderBlock.value = oPlayerNum.value;
        //将玩家总人数赋值给滑块的值，实现动态变化
    } else {
        alert("请输入正确的人数4~18");
        oPlayerNum.value = 4;
        osliderBlock.value = 4;
        //人数超出范围的话，弹出警告框，并且将方框和滑块的值重置为4
    }
}
var num;

function moveChange() { // 滑块的值改变，运行这个函数
    oPlayerNum.value = osliderBlock.value;
    //滑块的值改变的话，滑块的值赋值给方框，实现动态变化
}

function less() {
    oPlayerNum.value--;
    //减的按钮，减掉玩家总人数的值      
    if (oPlayerNum.value < 4) {
        alert("最少人数为4人");
        oPlayerNum.value = 4;
        //人数超出范围的话，弹出警告框，并且将方框和滑块的值重置为4
    } else {
        osliderBlock.value = oPlayerNum.value; // 将玩家人数赋值给滑轮的值
    }
    // console.log(oPlayerNum.value);
}

function plus() {
    oPlayerNum.value++;
    //加的按钮，减掉玩家总人数的值，上面的值已经相互关联了，所以方框的值改变，滑块的值也会改变 
    if (oPlayerNum.value > 18) {
        alert("最多人数为18人");
        oPlayerNum.value = 18;
        //人数超出范围的话，弹出警告框，并且将方框和滑块的值重置为18
    } else {
        osliderBlock.value = oPlayerNum.value; // 将玩家人数赋值给滑轮的值
    }
    // console.log(oPlayerNum.value);
}

var have = [];
var _array;

function temp() {
    document.getElementById("peoplo").innerHTML = " ";
    var kill = Math.floor(oPlayerNum.value / 3);
    console.log(kill);
    var peoplo = Math.floor(oPlayerNum.value - kill);
    console.log(peoplo);
    var tomo = kill + peoplo;
    lin = tomo;
    console.log(tomo);
    var arr = [];
    for (i = 0; i < kill; i++) {
        arr[i] = "<div class=killnum><span class=tianping></span><span class=juewang>杀手</span></div>";
        console.log(arr[i]);
        have.push(arr[i]);
    }
    var arr2 = [];
    for (i = 0; i < peoplo; i++) {
        arr2[i] = "<div class=killnum><span class=tianpin></span><span class=juewang>平民</span></div>";
        console.log(arr2[i]);
        have.push(arr2[i]);
    }
    var gamenum = arr.concat(arr2);
    _array = gamenum.concat();
    for (var i = gamenum.length; i--;) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = _array[i];
        _array[i] = _array[j];
        _array[j] = temp;
    }
    console.log(arr);
    console.log(arr2);
    for (var i = 0; i < tomo; i++) {
        var divA = document.getElementById("peoplo");
        divA.innerHTML = divA.innerHTML + _array[i];
    }
    sessionStorage.setItem('key', JSON.stringify(_array));
    console.log(have);
    console.log(oPlayerNum.value);
}
function kass() {
    if (have.length == oPlayerNum.value) {
        window.location.href = "fanpai.html";
    } else {
        alert("请设置玩家匹配")
    }
}