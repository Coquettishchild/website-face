/**
 * Created by majie on 2019/7/12.
 */
var images =new Array();
images[0]="07175146nczk.png";
images[1]="07181832qwzp.png";
images[2]="071902273sa6.png";
images[3]="22131059zi9w.jpg";
images[4]="07173555dhdb.png";
var words = new Array();

words[0]="求是 筑基 勤勉 致用";
words[1]="实事求是 笃学诚行";
words[2]="博学 求真 惟恒 创新";
words[3]="历史学院召开本科科教专题会议";
words[4]="立德树人 知行合一";
var img1 =document.getElementById("image1");
var word = document.getElementById("word");
var radio = document.getElementsByClassName("radi1");
function getme(val){
    img1.src="./images/"+images[val];
    word.innerHTML=words[val];
    radio[val].checked=true;
}
var i=0;
setInterval(change,3000);
function change(){
    if(i<4){
        img1.src="./images/"+images[i];
        word.innerHTML=words[i];
        radio[i].checked=true;
        i++;
    }else{
        img1.src="./images/"+images[i];
        word.innerHTML=words[i];
        radio[i].checked=true;
        i=0;
    }
}
var maxwidth = window.screen.width;
var maxheight = window.screen.height;
console.log(maxheight);
var left=0;
var height=0;
var hflag=false;
var wflag=false;
var imgheight =101;
var imgwidth=235;
setInterval(fly,100);
function fly(){
    rleft = 5;
    rheight = 8;

    if(wflag){
        left-=rleft;
        goleft(left);
    }else{
        left+=rleft;
        goright(left);
    }
    if(hflag){
        height-=rheight;
        gotop(height);
    }else{
        height+=rheight;
        gobottom(height);
    }
}
function goright(nleft){
    if(nleft+imgwidth+120>maxwidth){
        wflag=!wflag;
    }else{
        document.getElementsByClassName("float")[0].style.left=nleft+"px";
    }
}
function goleft(nleft){
    if(nleft<0){
        wflag=!wflag;
    }else{
        document.getElementsByClassName("float")[0].style.left=nleft+"px";
    }
}
function gobottom(nheight){
    if(nheight+imgheight+60>maxheight){
        hflag=!hflag;
    }else{
        document.getElementsByClassName("float")[0].style.top=nheight+"px";
    }
}
function gotop(nheight){
    if(nheight<0){
        hflag=!hflag;
    }else{
        document.getElementsByClassName("float")[0].style.top=nheight+"px";
    }
}