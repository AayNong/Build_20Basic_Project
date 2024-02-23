const container = document.querySelector(".container")
const row = 5
const cols = 5

function randomNumber(){
    return Math.floor(Math.random()*500)// สุ่มเลข 1-500
}
for(let i = 0;i<row*cols;i++){ // เรียกใช้ function row * cols ครั้งโดยวนลูป
    const url = `https://source.unsplash.com/random/${randomNumber()}` // ดึงภาพจาก Unsplash API แล้วใช้ function randomNumber สุ่มภาพที่จะแสดง
    const imgEl = document.createElement("img") // สร้าง แท็ก image
    imgEl.src=url // ให้ภาพที่อยู่ใน imgEl เป็นภาพที่ดึงมาจาก url API
    container.appendChild(imgEl) // เพิ่ม ภาพเข้าไปใน class container
}