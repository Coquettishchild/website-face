/**
 * Created by majie on 2019/7/10.
 */
var lunbo =document.getElementsByClassName("lunbo");
lunbo[0].style.display="";
lunbo[1].style.display="none";
lunbo[2].style.display="none";
var i=0;
setInterval(action,2000);
function action(){
    if(i<2){
        lunbo[i].style.display="none";
        i++;
        lunbo[i].style.display="";
    }else if(i==2){
        lunbo[i].style.display="none";
        i=0;
        lunbo[i].style.display="";
    }
}
var t1 =document.getElementById("t1");
var t2 = document.getElementById("t2");
var t4 =document.getElementById("t4");
var t5 = document.getElementById("t5");
var image1 = document.getElementById("image1");
var image2 = document.getElementById("image2");
var p1 =document.getElementById("p1");
var p2 = document.getElementById("p2");
var left_ul1 =document.getElementById("left_ul1");
var left_ul2= document.getElementById("left_ul2");
var right_ul1 =document.getElementById("right_ul1");
var right_ul2= document.getElementById("right_ul2");
left_ul1.style.display="black";
left_ul2.style.display="none";
image1.style.display="block";
image2.style.display="none";
p1.style.display="block";
p2.style.display="none";
right_ul1.style.display="block";
right_ul2.style.display="none";
t1.onmouseover=function(){
    image1.style.display="block";
    image2.style.display="none";
    p1.style.display="block";
    p2.style.display="none";
    left_ul1.style.display="block";
    left_ul2.style.display="none";
    t1.style.borderRight="1px solid #17479E";
    t1.style.borderLeft="1px solid #17479E";
    t1.style.borderTop="1px solid #17479E";
    t1.style.borderBottom="none";
    t2.style.borderRight="none";
    t2.style.borderLeft="none";
    t2.style.borderTop="none";
    t2.style.borderBottom="1px solid #17479E";

};
t2.onmouseover=function(){
    image1.style.display="none";
    image2.style.display="block";
    p1.style.display="none";
    p2.style.display="block";
    left_ul1.style.display="none";
    left_ul2.style.display="block";
    t2.style.borderRight="1px solid #17479E";
    t2.style.borderLeft="1px solid #17479E";
    t2.style.borderTop="1px solid #17479E";
    t2.style.borderBottom="none";
    t1.style.borderRight="none";
    t1.style.borderLeft="none";
    t1.style.borderTop="none";
    t1.style.borderBottom="1px solid #17479E";
};
t4.onmouseover=function(){
    right_ul1.style.display="block";
    right_ul2.style.display="none";
    t4.style.borderRight="1px solid #17479E";
    t4.style.borderLeft="1px solid #17479E";
    t4.style.borderTop="1px solid #17479E";
    t4.style.borderBottom="none";
    t5.style.borderRight="none";
    t5.style.borderLeft="none";
    t5.style.borderTop="none";
    t5.style.borderBottom="1px solid #17479E";
};
t5.onmouseover=function(){
  right_ul2.style.display="block";
    right_ul1.style.display="none";
    t5.style.borderRight="1px solid #17479E";
    t5.style.borderLeft="1px solid #17479E";
    t5.style.borderTop="1px solid #17479E";
    t5.style.borderBottom="none";
    t4.style.borderRight="none";
    t4.style.borderLeft="none";
    t4.style.borderTop="none";
    t4.style.borderBottom="1px solid #17479E";
};