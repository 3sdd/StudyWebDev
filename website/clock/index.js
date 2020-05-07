dayjs=require("dayjs");




function updateClock(){
    const elem=document.querySelector("#clock");

    elem.innerText= dayjs().format("HH:mm:ss");;

}

window.setInterval(updateClock,100);