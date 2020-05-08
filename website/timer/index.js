
var {Timer}=require("easytimer.js");
var $=require("jquery");


//タイマーを表示する
function setTimerText(timerValues){
    $("#time").html(`${timerValues.hours.toString().padStart(2,"0")}:${timerValues.minutes.toString().padStart(2,"0")}:${timerValues.seconds.toString().padStart(2,"0")}`);
}

//inputからhour,minute,seconの値を取得する。
function getStartValues(){
    let startValues={
        seconds:getSecondVal(),
        minutes:getMinuteVal(),
        hours:getHourVal(),
    }

    return startValues;
}

//#region 入力チェックなど

function getHourVal(){
    let val=$("#hour").val();
    if(val===NaN){
        return 0;
    }
    val=Number(val);

    if(val<0){
        return 0;
    }else if(val>23){
        return 23;
    }
    return val;
}

function getMinuteVal(){
    let val=$("#minute").val();
    if(val===NaN){
        return 0;
    }
    val=Number(val);

    if(val<0){
        return 0;
    }else if(val>59){
        return 59;
    }
    return val;
}

function getSecondVal(){
    let val=$("#second").val();
    if(val===NaN){
        return 0;
    }
    val=Number(val);

    if(val<0){
        return 0;
    }else if(val>59){
        return 59;
    }
    return val;
}

//#endregion

//タイマーを初期化
let timer=new Timer({countdown:true});
timer.addEventListener("secondsUpdated",function(e){
    $("#time").html(timer.getTimeValues().toString());
})
timer.addEventListener("targetAchieved",function(e){
    $("#audio")[0].play();
    alert("時間です!");
    $("#audio")[0].pause();
});

//初期タイマー表示
setTimerText(getStartValues());


//inputを変更した際の挙動

function setEvent(id){
    $("#"+id).on("keyup mouseup oninput",function(e){
        console.log("ipaused:"+timer.isPaused())
        console.log("is runnning :"+timer.isRunning())

        if(timer.isRunning()){
            timer.stop()
            startTimer();
        }
        if(timer.isPaused()){
            timer.stop();
            startTimer();
            timer.pause();
        }

        setTimerText(getStartValues());
    })
}

setEvent("second");
setEvent("minute");
setEvent("hour");

//input読み取ってタイマーをスタートさせる
function startTimer(){
    const startValues=getStartValues();
    timer.start({countdown:true,startValues:startValues});
}

//スタートボタン、ポーズボタンの挙動
$("#start").click(function(){
    startTimer();
})

$("#pause").click(function(){
    timer.pause();
})

//最初の警告表示
alert("音出ます");