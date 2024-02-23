const progressEl = document.querySelector(".progress")
window.onscroll=()=>scrollProgress()

function scrollProgress(){
     // คือความสูงทั้งหมดของเว็ป ลบกับ ความสูงของในหน้าเว็ปของผู้ใช้งาน จะได้เป็นความสูงของเว็ปในปัจจุบัน
     const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
     // คือตัว scroll bar ในหน้าเว็ป
     const scrollTop = document.documentElement.scrollTop
     // นำ scrollTop มาหารกับ pageHeight แล้ว คูณ 100
     const scrollPercentage = (scrollTop/pageHeight)*100
     // เปลี่ยนค่า จาก hidden เป็น visible
     progressEl.style.visibility="visible"
     // เปลี่ยนค่า width ใน class progress ตาม scrollPercentage
     progressEl.style.width=scrollPercentage+"%"
}