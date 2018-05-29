    var data1 = JSON.parse(sessionStorage.getItem('key'));
    console.log(data1);
    var idcar = 1;
    var z = 1;
    var look;
    document.getElementById("round").innerHTML = "1";
    document.getElementById("back").innerHTML = '<img src="椭圆2.png" height="150" width="150" class=mint>';
    document.getElementById("cont").innerHTML = "查看1号身份";
    var i = 0;
    i < data1.length;
    var m = 0;
    var l = 1;
    var jie;
    function puss() {
        i++;
        console.log(idcar)
        console.log(i);
        console.log(data1.length);
        if (i < data1.length * 2) {
            if (i % 2 == 0) {
                document.getElementById("round").innerHTML = idcar;
                document.getElementById("back").innerHTML = '<img src="椭圆2.png" height="150" width="150" class=mint>';
                document.getElementById("hung").style.display = "none";
                document.getElementById("cont").innerHTML = look;
                m++;
            } else {
                z++;
                look = "查看" + z + "号身份";
                idcar++;
                l++;
                jie = "隐藏并传递给" + l + "号";
                console.log(jie);
                document.getElementById("back").innerHTML = '<img src="形状20.png" height="100" width="100" class=mint>';
                document.getElementById("hung").innerHTML = data1[m];
                document.getElementById("hung").style.display = "inline";
                console.log(i)
                document.getElementById("cont").innerHTML = jie;
            }
        }else{
            window.location.href = "riji.html";
        }
        if (l > data1.length) {
            document.getElementById("cont").innerHTML = "法官查看";
            console.log(data1.length);
        }
        console.log(m)
        console.log(l)
    }