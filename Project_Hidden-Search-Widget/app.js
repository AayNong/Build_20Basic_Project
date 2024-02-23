const search = document.querySelector(".search")
const input = document.querySelector(".input")
const btn = document.querySelector(".btn")

btn.addEventListener("click",()=>{
    search.classList.toggle("active") // ถ้ากดจะเพิ่ม class active ถ้ากดอีกทีจะลบออก โดยใช้ function toggle
    input.focus() // แล้วให้โฟกัสไปที่ช่อง input
})