var sign=1;
var time=null;  //setInterval返回的id

function showPic(index) {
    sign=index;
    //point source
    var pic=document.getElementById("mid-pic");
    var picSrc="images/";
    var srcs=["私宅", "商业", "软装", "施工项目"];
    //images/1.私宅.jpg
    //picSrc=picSrc + index + "." + srcs[index-1] + ".jpg";
    picSrc=picSrc + index + ".jpg";
    //转换过程
    document.getElementById("mid-text").innerHTML=srcs[index-1];
    pic.alt=srcs[index-1];
    pic.src=picSrc;
    var midPicsDiv=document.getElementById("mid-pics-div")
    var picLoadTime=setInterval(function() {
        if(pic.complete) {
            if(pic.src == "images/loading.gif") {
                pic.src=picSrc;
                pic.className="mid-pics";
            }
            var num=0;
            var step=2;
            clearInterval(time);    //用途不明
            time=setInterval(function() {
                num += step;
                if(num >= 150) {
                    num=150;
                    clearInterval(time);
                }
                pic.style.opacity = num/150;
                document.getElementById("mid-text").style.opacity = num/150;
            },15);
            clearInterval(picLoadTime);
        }else { //将loading的小图放上去
            if(pic.src == "images/loading.gif") {
            }else {
                pic.src="images/loading.gif";
                pic.className="loadingPic";
            }
        }
    },10);
    //获取圆点列表
    var lis=document.getElementsByClassName("focusBox")[0]
        .getElementsByTagName("li");
    for(var i=0; i<lis.length; i++)
        lis[i].className="";
    lis[index-1].className="cur";
}

window.onload=function() {
    showPic(1);
}

/*
 * 定时器
 */
function setCurrentPic() {
    showPic(sign);
    sign++;
    if(sign==5)
        sign=1;
}
var autoTime=window.setInterval("setCurrentPic()", 3000);
function mouseOver() {
    clearInterval(autoTime);
}
function mouseOut() {
    autoTime=window.setInterval("setCurrentPic()", 3000);
}

/*
 * arrow
 */
function nextPic() {
    if(sign==4) {
        sign=1;
        showPic(sign);
    }else {
        sign++;
        showPic(sign);
    }
}
function prePic() {
    if(sign==1) {
        sign=4;
        showPic(sign);
    }else {
        sign--;
        showPic(sign);
    }
}
