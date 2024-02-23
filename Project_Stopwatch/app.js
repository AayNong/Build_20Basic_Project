const timeEl = document.querySelector(".time")
const startBtn = document.querySelector(".start")
const pauseBtn = document.querySelector(".pause")
const resetBtn = document.querySelector(".reset")

// เวลา 1000ms = 1s , 60s = 1m, 60m = 1h
let [milliseconds,seconds,minutes,hours] = [0,0,0,0] // ใช้ let เพื่อให้เปลี่ยนแปลงค่าได้
let timer = null

startBtn.addEventListener("click",startTimer) // เมื่อกดจะเรียกใช้ function startTimer
pauseBtn.addEventListener("click",pauseTimer) // เมื่อกดจะเรียกใช้ function pauseTimer
resetBtn.addEventListener("click",resetTimer) // เมื่อกดจะเรียกใช้ function resetTimer

function startTimer(){
    if(timer!=null){
        clearInterval(timer) // ถ้า timer ไม่ใช่ค่าว่าง ให้เคลียร์เวลาออก
    }
    timer = setInterval(displayTime,10) // เรียกใช้ function displayTime ทุกๆ 10 ms
}

function pauseTimer(){
    clearInterval(timer)
}

function resetTimer(){
    clearInterval(timer)
    hours=0
    minutes=0
    seconds=0
    milliseconds=0
    timeEl.innerHTML="00:00:00:000"
}

function displayTime(){
    milliseconds+=10 // ให้ milliseconds เพิ่มทีละ 10
    if(milliseconds==1000){ // ถ้า ms = 1000 ให้เริ่มใหม่ที่ 0 แล้วเพิ่ม s+1
        milliseconds=0
        seconds++
        if(seconds==60){ // ถ้า s = 60 ให้เริ่มใหม่ที่ 0 แล้วเพิ่ม minutes+1
            seconds=0
            minutes++
            if(minutes==60){ // ถ้า m = 60 ให้เริ่มใหม่ที่ 0 แล้วเพิ่ม h+1
                minutes=0
                hours++
            }
        }
    }
    // ternary operator
    let h = hours<10 ? "0"+hours: hours // ถ้า hours น้อยกว่า 10 ให้ต่อ string ด้านหน้าเป็น 0 / ถ้าไม่ให้แสดง hours ได้เลย
    let m = minutes<10 ? "0"+minutes : minutes
    let s = seconds<10 ? "0"+seconds : seconds
    let ms = milliseconds<10 ? "0"+milliseconds : milliseconds
    timeEl.innerHTML=`${h}:${m}:${s}:${ms}`
}