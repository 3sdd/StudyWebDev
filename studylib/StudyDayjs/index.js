// import dayjs from "dayjs";

var dayjs=require("dayjs");
dayjs().format();

console.log(dayjs());

const now=dayjs();


document.querySelector("#year").innerText=now.year();
document.querySelector("#month").innerText=now.month();
document.querySelector("#date").innerText=now.date(); //
document.querySelector("#day").innerText=now.day();
document.querySelector("#hour").innerText=now.hour(); //[0,23]
document.querySelector("#minute").innerText=now.minute(); //[0,59]
document.querySelector("#second").innerText=now.second(); // [0,59]
document.querySelector("#millisecond").innerText=now.millisecond(); //[0,999] 　

// UTC
var relativeTime=require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime);
alert(dayjs().fromNow())

