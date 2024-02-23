const openBtn = document.querySelector(".open-btn")
const closeBtn = document.querySelector(".close-btn")
const modalContainer = document.querySelector(".modal-container")

openBtn.addEventListener("click",()=>{ // เพิ่มและลบ class แบบที่เคยทำ โดยใช้ .classList 
    modalContainer.classList.add("show") // ซึ่งเราได้กำหนดค่าให้ class show ไว้แล้วให้มันแสดงตัว modal-container
})
closeBtn.addEventListener("click",()=>{
    modalContainer.classList.remove("show")
})