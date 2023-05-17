const hourel=document.getElementById("hours");
const minuteel=document.getElementById("minutes");

const secondel=document.getElementById("seconds");

const ampmel=document.getElementById("ampm");


function updateTime(){
    let h= new Date().getHours();
    console.log(h);
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let ampm="AM";
    if(h>12){
        h=h-12;
        ampm="PM"; 
    }
    h=h<10? "0"+h:h;
    m=m<10? "0"+m:m;

    s=s<10? "0"+s:s;

    hourel.innerText=h;
    minuteel.innerText=m;
    secondel.innerText=s;
   ampmel.innerText=ampm;
  setTimeout(()=>{updateClock();
},
1000);
}
updateTime();
