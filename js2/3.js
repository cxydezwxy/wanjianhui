var data1 = JSON.parse(sessionStorage.getItem('key'));
console.log(data1);
var t = 0;
$(document).ready(function () {
    for (i = 0; i < data1.length; i++) {
        t++;
        $("#panda").append("<div class=round>" + data1[i] + "<p class=gry >" + t + "号" + "</p>" + "</div>");
    }
});
console.log(data1.length);
