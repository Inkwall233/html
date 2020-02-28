//获取滚动范围对象
let slideWrap = document.getElementById("slide-wrap") ;
//获取滚动对象
let slideContent = document.getElementsByClassName("slide-content")[0];
//获取图片[li,li,li]对象
let liItem = slideContent.getElementsByTagName('li');
//获取分页按钮
let aItem = slideWrap.getElementsByClassName('slide-nav')[0].getElementsByTagName('a');
//获取箭头按钮
let slidePrev = slideWrap.getElementsByClassName('slide-prev')[0];
let slideNext = slideWrap.getElementsByClassName('slide-next')[0];
//获取可视区宽度
let viewWidth = document.documentElement.clientWidth || document.body.clientWidth
//设置当前索引
let currentIndex = 0;
// 滚动关开标记
let flag = false
// 标记定时器
let flagTimer = null
// 自动播放的定时器
let autoTimer = null
//设置滚动对象宽度
slideContent.style.width = viewWidth * liItem.length +'px';
//设置图片对象宽度
for(let i=0 ; i<liItem.length ; i++){
    liItem[i].style.width = viewWidth+'px';
}
//设置图片分页点击事件
for(let i=0 ; i<aItem.length ; i++){
    aItem[i].onclick =  function(){
        currentIndex = i;
        slide(i);
    }
}
//设置箭头下一页点击事件
function next(){
    currentIndex++;
    if(currentIndex>=liItem.length){
        currentIndex = 0;
    }
    slide(currentIndex);
}
slideNext.onclick = function(){
    if(flag) {return false;}
    flag = true;
    next();
}
//设置箭头上一页点击事件
function prev(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex=aItem.length-1;
    }
    slide(currentIndex);
}
slidePrev.onclick = function(){
    if(flag) {return false;}
    flag = true;
    prev();
}
//开启自动轮播图片
autoPlay();
//自动轮播图片
function autoPlay(){
    //开启一个定时器
    autoTimer = setInterval(function(){
        next();
    },3000);
}

slideWrap.onmouseenter = function(){
    clearInterval(autoTimer)
}
slideWrap.onmouseleave = function(){
    autoPlay()
}
//分页按钮高光切换
function toogleHigh(){
    for(let k=0 ; k<aItem.length ; k++){
        aItem[k].className = '';
    }
    aItem[currentIndex].className = 'current';
}
//滚动
function slide(number){
    let left = number *viewWidth;
    flagTimer = setTimeout(function(){
        flag = false;
        clearTimeout(flagTimer);
    },1000)
    slideContent.style.left = -left + 'px' ;
    toogleHigh();
}
/**
 * 0 : 0*viewWidth
 * 1 : 1*viewWidth
 * 2 : 2*viewWidth
 */