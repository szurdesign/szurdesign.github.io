var sign=2;
var time=null;  //setInterval返回的id
var autoTime=null;
var loadDivFlag=true;

function showPic(index) {
    sign=index;
    //point source
    var pic=document.getElementById("mid-pic");
    var loadingPic=document.getElementById("loadingPic");
    var midText=document.getElementById("mid-text");
    var midPicsDiv=document.getElementById("mid-pics-div");
    var arrowDivList=document.getElementsByClassName("arrow-div");
    var picSrc="images/";
    var srcs=["私宅", "商业", "软装", "施工项目"];

    //images/1.私宅.jpg
    //picSrc=picSrc + index + "." + srcs[index-1] + ".jpg";
    picSrc=picSrc + index + ".jpg";
    //转换过程
    midText.innerHTML=srcs[index-1];
    pic.alt=srcs[index-1];
    pic.src=picSrc;
    var picLoadTime=setInterval(function() {
        if(pic.complete) {
            //确定图片div大小
            if(loadDivFlag == true) {
                midPicsDiv.style.height = pic.height+"px";
                for(var i=0; i<arrowDivList.length; i++) {
                    arrowDivList[i].style.height = 
                        midPicsDiv.offsetHeight+"px";
                }
                var arrowList=document.getElementsByClassName("arrow");
                for(var i=0; i<arrowList.length; i++) {
                    arrowList[i].style.marginTop = 
                        arrowDivList[i].offsetHeight*9/20 + "px";

                loadDivFlag=false;
                }
                //loadingPic定位
                loadingPic.style.marginTop=midPicsDiv.offsetHeight*2/5+"px";
                //重新开始自动轮播
                autoTime=window.setInterval("setCurrentPic()", 3000);
            }
            //将加载图换下
            loadingPic.style.display="none";
            pic.style.display="block";
            //开始渐变
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
        }else { //未加载完成时
            //将loading的小图放上去
            pic.style.display="none";
            loadingPic.style.display="block";
            //停止自动轮播
            clearInterval(autoTime);
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
 * 自动轮播 
 */
function setCurrentPic() {
    showPic(sign);
    sign++;
    if(sign==5)
        sign=1;
}

/*
 * 窗口大小改变时刷新图片
 */
window.onresize = function() {
    showPic(sign);
}

/*
 * 鼠标悬停时停止轮播
 */
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

/*
 * draw canvas
 */
function drawCanvas() {
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.moveTo(0,12); ctx.lineTo(48,12); ctx.stroke();
    ctx.moveTo(0,24); ctx.lineTo(48,24); ctx.stroke();
    ctx.moveTo(0,36); ctx.lineTo(48,36); ctx.stroke();
}

/*
 * navi bar display
 */
function displayUl() {
    var ul=document.getElementById("downUl");
    ul.style.display="block";
}
function hideUl() {
    var ul=document.getElementById("downUl");
    ul.style.display="none";
}

/*
 * ajax
 */
var xmlhttp;
function createXMLHttpRequest() {
    if(window.XMLHttpRequest) {
        // code for IE7+,firefox,chrome...
        xmlhttp=new XMLHttpRequest();
    }else {
        // code for IE5,IE6
        xmlhttp=new ActionXObject("Microsoft.XMLHTTP");
    }
}
function signOut() {
    createXMLHttpRequest();
    xmlhttp.open("POST", "../php/signOut.php", true);
    xmlhttp.send();
}
