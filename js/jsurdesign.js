var sign=1;
var time=null;  //setInterval返回的id
var autoTime=null;

function showPic(index) {
    sign=index;
    //point source
    var pic=document.getElementById("mid-pic");
    var loadingPic=document.getElementById("loadingPic");
    var midText=document.getElementById("mid-text");
    var picSrc="images/";
    var srcs=["私宅", "商业", "软装", "施工项目"];
    //images/1.私宅.jpg
    //picSrc=picSrc + index + "." + srcs[index-1] + ".jpg";
    picSrc=picSrc + index + ".jpg";
    //转换过程
    midText.innerHTML=srcs[index-1];
    pic.alt=srcs[index-1];
    pic.src=picSrc;
    var midPicsDiv=document.getElementById("mid-pics-div");
    var picLoadTime=setInterval(function() {
        if(pic.complete) {
            loadingPic.style.display="none";
            pic.style.display="block";
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
                midText.style.opacity = num/150;
            },15);
            clearInterval(picLoadTime);
        }else { //将loading的小图放上去
            clearInterval(autoTime);
            pic.style.display="none";
            loadingPic.style.display="block";
        }
    },10);
    //获取圆点列表
    var lis=document.getElementsByClassName("focusBox")[0]
        .getElementsByTagName("li");
    for(var i=0; i<lis.length; i++)
        lis[i].className="";
    lis[index-1].className="cur";
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
window.onload=function() {
    showPic(1);
    autoTime=window.setInterval("setCurrentPic()", 3000);
}

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
