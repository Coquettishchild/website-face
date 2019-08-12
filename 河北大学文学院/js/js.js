/**
 * Created by majie on 2019/8/9.
 */
var imgs = document.getElementsByClassName("lunbo");
imgs[0].style.display="";
imgs[1].style.display="none";
imgs[2].style.display="none";
imgs[3].style.display="none";
var index= 0;
setInterval(lunbo,2000);
function lunbo(){
    if(index<3){
        imgs[index].style.display="none";
        index++;
        imgs[index].style.display="";
    }else{
        imgs[index].style.display="none";
        index=0;
        imgs[index].style.display="";
    }
}