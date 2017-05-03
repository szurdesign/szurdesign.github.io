/*
 * for jquery try
//pic change
$(document).ready(function(){
	$('#mid-pics-div').cycle({
		fx:'fade',
		timeout:5000,
		pause:0.2,
		prev:'#arrow-left',
		next:'#arrow-right',
	});
});
*/

var sign=1;

function showPic(index) {
    sign=index;
    var pic=document.getElementById("mid-pic");
    //point source
    var picSrc="images/";
    var srcs=["私宅", "商业", "软装", "施工项目"];
    //images/1.私宅.jpg
    picSrc=picSrc + index + "." + srcs[index-1] + ".jpg";
    //change source
    pic.src=picSrc;
    pic.alt=srcs[index-1];
    document.getElementById("mid-text").innerHTML=srcs[index-1];
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
 * 定时器
 */
function setCurrentPic() {
    showPic(sign);
    sign++;
    if(sign==5)
        sign=1;
}
window.setInterval("setCurrentPic()", 2000);

