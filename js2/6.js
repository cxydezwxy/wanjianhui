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
        peoplo.push("平民")
        hu.push("平民")
    } else {
        peoplo.push("杀手")
        ki.push("杀手")
    }
}
console.log(ki.length);
console.log(hu);
console.log(peoplo);
for (i = 0; i < data1.length; i++) {
    var gamer = [];
    gamer[i] = {
        status: "alive",
        Identity: peoplo[i],
        ne: i + 1 + "号"
    }
    console.log(gamer[i]);
    need.push(gamer[i]);
}
console.log(need);
$(document).ready(function () {
    for (i = 0; i < data1.length; i++) {
        t++;
        $("#panda").append("<div class=round>" + data1[i] + "<p class=gry >" + t + "号" + "</p>" + "<img src=10.png class=niff>" + "</div>");
    }
    $(".corg").click(function () {
        if (data2 == "pros1" && need[q].Identity == "杀手") {
            alert("请杀平民");
        } else if (need[q].status == "die") {
            alert("请杀活人")
        } else {
            need[q] = {
                status: "die",
                Identity: peoplo[q],
                ne: q + 1,
            }
            if (data2 == "pros1") {
                sessionStorage.setItem('ing', JSON.stringify(need[q]));
            } else if (data3 == "pros") {
                sessionStorage.setItem('zing', JSON.stringify(need[q]));
            }

            window.location.href = "taiben.html";
        }

        console.log(need[q])
        if (need[q].status == "die") {
            $(".killnum").eq(q).addClass("backll")
        }
        console.log(need[q])
        sessionStorage.removeItem('f');
    })
    console.log(need)
    $(".round").click(function () {
        for (i = 0; i < need.length; i++) {
            $(".killnum").removeClass("backl");
        }
        $(".niff").hide();
        q = $(".round").index($(this));
        console.log(q);
        $(".niff").eq(q).show();
        $(".killnum").eq(q).addClass("backl")
        console.log(data1.length);
    });
    var qwe = JSON.parse(sessionStorage.getItem('ing'));
    if (qwe.status == "die") {
        $(".killnum").eq(qwe.ne - 1).addClass("backll")
    }
    need[qwe.ne - 1] = {
        status: "die",
        Identity: peoplo[qwe.ne - 1],
        ne: qwe.ne,
    }
    console.log(need[qwe.ne]);
    var asdf = JSON.parse(sessionStorage.getItem('zing'));
    if (asdf.status == "die") {
        $(".killnum").eq(asdf.ne - 1).addClass("backll")
    }
    need[asdf.ne - 1] = {
        status: "die",
        Identity: peoplo[asdf.ne - 1],
        ne: asdf.ne,
    }
    console.log(asdf);
});


1   
04*1-4
14*1-3
24*1-2

4*1-1
3
  2
  4
  5
  6
  7

  3
  8
  9
  10
  11