const sounds = ["Effect1","Effect2","Effect3","Effect4","Effect5","Mahooo"]

sounds.forEach(sound=>{ // ใช้ forEach เพราะเป็น Array
    const btn = document.createElement("button") // สร้างปุ่ม
    btn.classList.add("btn") // ใส่ style ให้กับปุ่มตอนสร้าง
    btn.innerText=sound // เพิ่มข้อความเข้าไปในปุ่ม โดยใช้ Array sound
    btn.addEventListener("click",()=>{ // เมื่อทำการกดปุ่ม
        stopSounds() // ใช้ฟังก์ชั่นหยุดเสียงที่กำลังเล่นอยู่ป้องกันการกดซ้ำแล้วเสียงซ้อน
        document.getElementById(sound).play() // ให้เล่นเสียงเมื่อกดปุ่มนั้นโดยอ้างอิงจาก id ที่เรากำหนดไว้ที่ html
    })                                        // ซึ่ง (sound) จะมีค่าเท่ากับปุ่มที่กด ถ้าเรากดปุ่มที่ 1 จะมีค่าเท่ากับ Effect1 ก็จะเรียกใช้ id Effect1 ทำให้มีเสียง
    document.getElementById("controller").appendChild(btn) // เพิ่มปุ่มเข้าไปใน div class controller
})

function stopSounds(){
    sounds.forEach(sound=>{
        const song = document.getElementById(sound)
        song.pause() // ใช้ function หยุดการเล่น เพื่อหยุดเสียงที่กำลังเล่นอยู่
        song.cerrentTime = 0 // แล้วให้เวลาของเสียงเริ่มต้นที่ 0 วิ เสมอ
    })
}