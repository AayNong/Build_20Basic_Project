const eyeIcon = document.querySelector("#eye") // เข้าถึง id eye ที่เป็น icon จาก font-awesome
const passwordEl = document.querySelector("#password") // เข้าถึง id password ที่เป็นช่องป้อน รหัส

eyeIcon.addEventListener("click",()=>{ // เช็คว่ามีการกด eyeIcon ไหม
    if(eyeIcon.classList.contains("fa-eye")){ // ให้ไปเช็คว่า eyeIcon มี class fa-eye ไหม
        eyeIcon.classList.replace("fa-eye","fa-eye-slash") // ถ้ามี ให้แทนที่ด้วย class fa-eye-slash
        passwordEl.setAttribute("type","text") // แล้วเปลี่ยน type ของช่อง password เป็น text เพื่อให้เห็นรหัสที่ป้อนไว้
    }else{                                     // ถ้าไม่มี
        eyeIcon.classList.replace("fa-eye-slash","fa-eye") // ให้แทนที่ class fa-eye-slash ด้วย class fa-eye
        passwordEl.setAttribute("type","password") // แล้วเปลี่ยน type ช่อง password เป็น password เพื่อให้ไม่เห็นรหัสป้อนไว้
    }
})