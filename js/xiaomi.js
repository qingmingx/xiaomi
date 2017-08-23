/**
 * Created by Administrator on 2017/6/17.
 */
window.onload=function() {
    //bananer图
    var bananer=document.querySelectorAll('.benner-img');
    var lunbo=document.querySelectorAll('.lunbo1 ');
    var box=document.querySelector('#benner');
    var left=document.querySelector('.banner-lbtu');
    var right=document.querySelector('.banner-rbtu');
    var t=window.setInterval(move,3000);
    var index=0;
    function move(){
        index++;
        if(index==bananer.length){
            index=0;
        }
        bananer.forEach(function(value,index){
            value.classList.remove("active2");
        })
        lunbo.forEach(function(value,index){
            value.classList.remove("active3");
        })
        bananer[index].classList.add("active2");
        lunbo[index].classList.add("active3");
    }
    box.onmouseover=function () {
        clearInterval(t);
    }
    box.onmouseout=function () {
        t=window.setInterval(move,3000);
    }
    right.onclick=function () {
        move();
    }
    left.onclick=function () {
        index--;
        if(index<0){
            index=lunbo.length-1;
        }
        bananer.forEach(function(value,index){
            value.classList.remove("active2");
        })
        lunbo.forEach(function(value,index){
            value.classList.remove("active3");
        })
        bananer[index].classList.add("active2");
        lunbo[index].classList.add("active3");
    }
    lunbo.forEach(function (value,n) {
        value.onclick=function () {
            lunbo.forEach(function (obj) {
                obj.classList.remove("active3")
            })
            this.classList.add("active3")
            bananer.forEach(function (obj) {
                obj.classList.remove("active2")
            })
            bananer[n].classList.add("active2");
            index=n;
        }
    })





}