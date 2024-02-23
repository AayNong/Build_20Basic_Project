const smallImg = document.querySelectorAll(".gallery img") // อ้างอิงภาพทั้งหมดที่อยู่ใน class gallery
const fullImg = document.querySelector(".full-image") // อ้างอิงภาพใน class .full-image
const modal = document.querySelector(".modal") // อ้างอิงไปที่ class modal

smallImg.forEach(img=>{ // ใช้ลูป forEach
    img.addEventListener("click",()=>{  // ถ้ามีการคลิกที่รูป
        const fullsize = img.getAttribute("alt")  // ให้ fullsize = ดึงมาจาก attribut alt
        const path = `food-image/full/${fullsize}.jpg` // path = ไฟล์ food-image/full/แล้วดึงข้อมูลมาจาก fullsize ซึ่งจะเป็นตัวเลขตรงกับไฟล์ภาพของเรา
        fullImg.src=path // เปลี่ยน src ให้เป็น ไฟล์จาก path
        modal.classList.add("open") // แล้วให้แอด class open ที่อยู่ใน css เข้าไป
    })
})

modal.addEventListener("click",(e)=>{ // เช็คว่ามีการกดที่ modal ไหม ซึ่งมันคือพื้นที่ว่างๆนอกรูปภาพ
    if(e.target.classList.contains("modal")){ // ถ้ากดไปที่ modal
        modal.classList.remove("open") // จะทำการลบ class open ออก
    }
})