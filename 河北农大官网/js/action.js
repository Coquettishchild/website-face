/**
 * Created by majie on 2019/7/25.
 */
var lunbo = document.getElementsByClassName("lunbo");
var flag =document.getElementsByClassName("flag");
lunbo[0].style.display="block";
flag[0].style.backgroundColor="aqua";
for(let i=1;i<3;i++){
    lunbo[i].style.display="none";
    flag[0].style.backgroundColor="#888";
}
var i=0;
setInterval(change,2000);
function change(){
    if(i<3){
        lunbo[i].style.display="none";
        flag[i].style.backgroundColor="#888";
        i++;
        lunbo[i].style.display="block";
        flag[i].style.backgroundColor="aqua";
    }else{
        lunbo[i].style.display="none";
        flag[i].style.backgroundColor="#888";
        i=0;
        lunbo[i].style.display="block";
        flag[i].style.backgroundColor="aqua";
    }
}
var left = document.getElementById("left");
var right = document.getElementById("right");
left.onclick=function(){
  if(i>0){
      lunbo[i].style.display="none";
      flag[i].style.backgroundColor="#888";
      i--;
      lunbo[i].style.display="block";
      flag[i].style.backgroundColor="aqua";
  } else{
      lunbo[i].style.display="none";
      flag[i].style.backgroundColor="#888";
      i=3;
      lunbo[i].style.display="block";
      flag[i].style.backgroundColor="aqua";
  }
};
right.onclick=function(){
    if(i<3){
        lunbo[i].style.display="none";
        flag[i].style.backgroundColor="#888";
        i++;
        lunbo[i].style.display="block";
        flag[i].style.backgroundColor="aqua";
    }else{
        lunbo[i].style.display="none";
        flag[i].style.backgroundColor="#888";
        i=0;
        lunbo[i].style.display="block";
        flag[i].style.backgroundColor="aqua";
    }
};
function btc(val){
    lunbo[i].style.display="none";
    flag[i].style.backgroundColor="#888";
    i=val;
    lunbo[i].style.display="block";
    flag[i].style.backgroundColor="aqua";
}