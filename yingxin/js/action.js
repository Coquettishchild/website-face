/**
 * Created by majie on 2019/7/11.
 */
var  imgs =document.getElementsByClassName("img");
var i=0;
imgs[0].style.display="block";
imgs[1].style.display="none";
setInterval(change,2000);
function change(){
    if(i<1){
        imgs[i].style.display="none";
        i++;
        imgs[i].style.display="block";
    }else if(i==1){
        imgs[i].style.display="none";
        i=0;
        imgs[i].style.display="block";
    }
}