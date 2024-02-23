const btn = document.querySelector(".btn")
const container = document.querySelector(".container")
const messages = [
    "Hi my babe",
    "What is that!!!",
    "Really??",
    "You look so shine",
    "I hate Thai language"
]
btn.addEventListener("click",()=>createNotification())

function createNotification(){
    const notificationEl = document.createElement("div") // สร้าง div ขึ้นมาก้อนหนึ่ง
    notificationEl.classList.add("notification")   // เพิ่ม class ให้ div ตัวนี้เป็น notification
    notificationEl.innerText=randomMessage() // นำเอาข้อความที่สุ่มได้ยัดเข้าไปใน div
    container.appendChild(notificationEl) // เอาตัวกล่องแจ้งเตือนนี้ยัดเข้าไปใน container
    setTimeout(()=>{
        notificationEl.remove()  // ตั้งเวลาเมื่อผ่านไป 3 วินาที จะลบ NotificationEL ออก
    },3000)
}

function randomMessage(){
    return messages[Math.floor(Math.random()*messages.length)] //ใช้ Math.random() สุ่มตัวเลข แล้วใช้ Math.floor ปัดเศษทิ้ง
}                                                              // หลังจากนั้นเอาไปคูณกับจำนวนสมาชิกใน Array messages ซึ่งมีเลข index 0-4
                                                               // ส่งกลับ messages ช่องที่สุ่มออกมา ถ้าสุ่มได้ 3 ก็จะแสดง "You look so shine"

