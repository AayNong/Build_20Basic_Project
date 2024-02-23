const counters = document.querySelectorAll(".counter") // ใช้ All เพราะว่ามี class counter หลายตัว
counters.forEach(counter=>{
    counter.innerText="0" // เลขเริ่มต้นเท่ากับศูนย์
    const updateCounter=()=>{ // ประกาศตัวแปร updateCounter
        const target = +counter.getAttribute("data-target") // เข้าถึง data-target คือดึงค่าที่เรากำหนดไว้มา
        const start = +counter.innerText // กำหนดจุดเริ่มต้นที่เราเขียนไว้ให้เท่ากับศูนย์ แล้วนับไปให้ถึง target
        const increment = target/300 // ให้มันเพิ่มขึ้นเท่าไหร่
        if(start<target){
            counter.innerText = `${Math.ceil(start+increment)}` // ถ้า start ยังน้อยกว่า target ให้บวกเข้าไปตามจำนวณ increment ที่กำหนด
                                                                //โดยใช้ Math.celi() ปัดเศษให้เป็นจำนวณที่ใกล้เคียงที่สุด
            setTimeout(updateCounter,1) // กำหนดความเร็วในการเรียกใช้ function ให้เท่ากับ 1 milli seconds
        }else{
            counter.innerText=target // ถ้าไม่เป็นไปตามเงื่อนไขให้แสดง couter = target ก็คือแสดงตัวเลขจริงไปเลยไม่ต้องนับ
        }
    }
    updateCounter() // เรียกใช้ฟังก์ชั่นเพื่อให้ข้อมูลขึ้น
})