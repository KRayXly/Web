/**
 * 
 * @authors 林之韵 
 * @date    2022-03-09
 * @version 2019211910020
 */
/** 1*/
var p1=document.getElementById('p1');
p1.onclick =function(){
    this.style.color="red"
}
/** 2*/
var p2=document.querySelectorAll('li')[1],
    h1=document.querySelector('h1');
var d=new Date();
p2.onclick =function(){
    h1.innerHTML=d.getFullYear()+"-"+((d.getMonth()+1)<10?'0'+d.getMonth():d.getMonth())+"-"+(d.getDate()<10?'0'+d.getDate():d.getDate());
} 
/** 3.增加fn-active类后变成白色*/
var p3=document.querySelectorAll('li')[2],
    list=document.querySelectorAll('li');
p3.onclick =function(){
    for(i=0;i<list.length;i++){
        var item=list[i];
        item.classList.add("fn-active");
    }
}


/** 4*/
var p4=document.querySelectorAll('li')[3],
    box=document.querySelector('ul');
p4.onclick =function(){
    box.removeChild(document.querySelectorAll('li.m-item')[7]);
}

/** 5*/
var p5=document.querySelectorAll('li')[4];
p5.onclick =function(){
    window.open("https://www.taobao.com");
}

/** 6*/
var p6=document.querySelectorAll('li')[5],
    p9=document.createElement('li'),
    node=document.createTextNode("p9");
p6.onclick =function(){
    p9.appendChild(node);
    p9.classList.add("m-item");
    box.appendChild(p9);
}

/** 7*/
for(i=0;i<list.length;i++){
    var item=list[i];
    item.addEventListener('click', showMsg);
}
function showMsg(e) {
    var item = e.target;
    alert(item.innerHTML);
}

/** 8*/
var p7=document.querySelectorAll('li')[6];
p7.onclick =function(){
    document.querySelector('div.m-box').style.width=screen.availWidth+"px";
}