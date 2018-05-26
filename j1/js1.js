// /*var box1 = document.getElementsByClassName("0');
// console.log(box1); 
// var count;
// count=Math.floor(Math.random()*9+1);
//  console.log(count);*/

// var a;
// var blue;
// var c;
var change = document.getElementsByClassName("box1");
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
function f1() {
    var _array = array.concat();
//这里是将arraay的值 赋给_array。
    for (var i = _array.length; i--;) 
    //这里的 _array.length;也就是代表前面array值的长度。i-- 就是i的递减。
    {
        var j = Math.floor(Math.random() * (i + 1));
        //随机选取一个0-8的整数并赋值给 j 。 后面的i + 1是因为前面递减了一个1 所以要+1个1
        var temp = _array[i];
        console.log(temp);
        //将_array[i] 的值暂时存放在temp。
        _array[i] = _array[j];
        //然后将_array[j];赋值给_array[i]。
        _array[j] = temp;
        //最后将_array[i] 刚开始的值在赋给_array[j] 就等于完成了一个数值的转换。
    }
  
 
    // var arr_4 = new Array()

    // function getRandom(min, max) //开始取数
    // {
    //     //随机数
    //     var random = Math.random() * (max);
    //     //向下取整

    //     random = Math.floor(random);
    //     if (arr_4.length < 3) //判断数组长度
    //     {
    //         for (i = 0; i <= arr_4.length; i++) //遍历数组。
    //         {
    //             console.log(i);
    //             if (random == arr_4[i]) //比较随机数
    //             {  

    //                 break;
    //             } else {
    //                 if (i == arr_4.length){

    //                     arr_4.push(random); 

    //                     break;
    //                 }
    //                 console.log(arr_4.length);
    //             }
    //         };
    //         getRandom(0, 9);
    //     }
    // }
    // getRandom(0, 9); //随机取0-9
    a = _array[0];
    blue = _array[1];
    c = _array[2];
    console.log(a);
    console.log(blue);
    console.log(c);
}
 
function number() {
    for (var i = 0; i < array.length; i++) {
        change[i].style.background="";
    }

    f1();
    var tank = []
    var x = "";
    var cla = "";
    var z = "";
    var x = document.getElementsByClassName("box1")[a];
    var cla = document.getElementsByClassName("box1")[blue];
    var z = document.getElementsByClassName("box1")[c];
    for (var i = 0; i < array.length; i++ ){
       tank[i] = Math.floor(Math.random() * 256);
    }
    // var r = Math.floor(Math.random() * 256);
    // var g = Math.floor(Math.random() * 256);
    // var b = Math.floor(Math.random() * 256);
    var clo = "rgb(" + tank[0] + "," + tank[1] + "," + tank[2] + ")";
    // console.log(clo);
    // var q = Math.floor(Math.random() * 256);
    // var w = Math.floor(Math.random() * 256);
    // var e = Math.floor(Math.random() * 256);
    var cle = "rgb(" + tank[3] + "," + tank[4] + "," + tank[5] + ")";
    // var t = Math.floor(Math.random() * 256);
    // var y = Math.floor(Math.random() * 256);
    // var u = Math.floor(Math.random() * 256);
    var cll = "rgb(" + tank[6] + "," + tank[7] + "," + tank[8] + ")";
    x.style.background = clo;
    cla.style.background = cle;
    z.style.background = cll;
}
var intst;
function stra() {
    clearInterval(intst);
    intst = window.setInterval("number()", 1000);
}
function stop() {
    window.clearTimeout(intst);
}