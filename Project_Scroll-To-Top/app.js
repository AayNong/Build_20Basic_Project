const scrollBtn = document.querySelector(".top")
const rootEl = document.documentElement

document.addEventListener("scroll",showBtn) // มีการ scroll ในหน้าเว็ปไหม แล้วเรียกใช้ function show btn
scrollBtn.addEventListener("click",scrollToTop) // เช็คว่ามีการคลิกปุ่มนี้ไหม แล้วให้ไปเรียกใช้ function scrollToTop

function showBtn(){
    const scrollTotal = rootEl.scrollHeight -  rootEl.clientHeight // จะได้ผลต่างความสูง
    if(rootEl.scrollTop/scrollTotal>0.3){ // ถ้า scrollTop/scrollTotal มากกว่า 0.3 หรือเกิน 30% ของหน้าเว็ป
        scrollBtn.classList.add("show-btn") // ให้แอด class show-btn ไปที่ class scrollBtn หรือ ปุ่ม ที่มี class .top
    }else{
        scrollBtn.classList.remove("show-btn") // ถ้าไม่ ให้ลบ class show-btn
    }
}

function scrollToTop(){
    rootEl.scrollTo({ // ใช้ฟังก์ชั่นเลื่อนไปที่ แล้วกำหนด top = 0 แล้วกำหนดพฤติกรรม ให้เลื่อนขึ้นแบบ smooth
        top:0,
        behavior:"smooth"
    })
}