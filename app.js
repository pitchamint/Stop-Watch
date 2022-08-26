//ระบบจับเวลา
const timeEl = document.querySelector('.time')
const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const resetBtn = document.querySelector('.reset')
//เวลา
let [milliseconds,seconds,minutes,hours]=[0,0,0,0] //ตัวแปรที่นำมาใช้จับเวลากำหนดค่าเริ่มต้นเป็น 0
// 1000ms = 1s , 60s = 1m, 60m = 1h |ใช้ timer ควบคุมการจับเวลา
let timer = null //null เป็นค่าเริ่มต้น

startBtn.addEventListener("click",startTimer)
pauseBtn.addEventListener("click",pauseTimer) 
resetBtn.addEventListener("click",resetTimer)

//start
function startTimer(){
    if(timer != null){
        clearInterval(timer)
    }
    timer = setInterval(displayTime,10) //เริ่มต้นนับเวลา setInterval โดยเรียกใช้ displayTime
}

//Pause
function pauseTimer(){
    clearInterval(timer)
}

//reset
function resetTimer(){
    clearInterval(timer)
    hours = 0
    minutes = 0
    seconds = 0
    milliseconds = 0
    timeEl.innerHTML = "00:00:00:000"
}

//displayTime รับหน้าที่แสดงผลเวลา start
function displayTime(){
    milliseconds+=10 //ให้ ms บวกขึ้นทีละ 10
    if(milliseconds == 1000){ //ความหมาย ถ้าms ถึง 1000 reset ค่าใหม่เป็น 0แล้วบวก s ไป 1
        milliseconds = 0
        seconds++
        //check
        if(seconds == 60){
            seconds = 0
            minutes++
            //check
            if(minutes == 60){
                minutes = 0
                hours++
            }
        }
    }
    //กำหนดเลขหลักหน่วยให้มีเลข 0 ด้านหน้า ternary operator
    let h = hours<10 ? "0"+hours: hours
    let m = minutes<10 ? "0"+minutes: minutes
    let s = seconds<10 ? "0"+seconds: seconds
    let ms = milliseconds<10 ? "0"+milliseconds: milliseconds
    timeEl.innerHTML = `${h}:${m}:${s}:${ms}`
}

