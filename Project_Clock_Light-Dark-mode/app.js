const timeEL = document.querySelector(".time")
const btnToggle = document.querySelector(".toggle")

function setTime(){ // ประกาศตัวแปรเวลา โดยอ้างอิงตามเวลาเครื่องเรา
    const time = new Date()
    const hours = time.getHours() 
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    timeEL.innerHTML = `${hours<10 ? `0${hours}`: hours}:${minutes<10 ? `0${minutes}`: minutes}:${seconds<10 ? `0${seconds}`: seconds}`
    //${hours<10 ? `0${hours}`: hours} คือ ถ้า hours น้อยกว่า 10 จะให้ใส่ 0 ด้านหน้า
}

btnToggle.addEventListener("click",(e)=>{
    const html = document.querySelector("html") //ประกาศตัวแปรให้อ้างอิงไปทีแท็ก html
    if(html.classList.contains("dark")){ 
        html.classList.remove("dark") //ถ้า html มี class dark ให้ลบออก
        e.target.innerHTML="Night mode" //แล้วเปลี่ยนปุ่มเป็น Night mode
    }else{
        html.classList.add("dark") //ถ้า html ไม่มี class dark ให้แอดเข้าไป
        e.target.innerHTML="Morning mode" //แล้วเปลี่ยนปุ่มเป็น Morning mode
    }
})

setTime()
setInterval(setTime,1000) // ให้เรียกใช้ function setTime ทุกๆ 1 วินาที