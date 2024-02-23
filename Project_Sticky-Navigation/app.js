const nav = document.querySelector(".nav")

window.addEventListener("scroll",stickyNavbar) // เช็คว่ามีการ scroll หน้าเว็ปหรือไม่แล้วไปเรียกใช้ function stickyNavbar

function stickyNavbar(){
    if(window.scrollY>nav.offsetHeight+150){ // มีการเลื่อนหน้าจอในทิศแนวตั้งเพิ่มไป 150 ถึงจะทำตาม
        nav.classList.add("active") // ถ้าจริงให้เพิ่ม class active
    }else{
        nav.classList.remove("active") // ถ้าไม่ให้ลบ class active
    }
}