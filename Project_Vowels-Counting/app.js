const countEl = document.querySelector(".count")
const input = document.querySelector("input")

input.addEventListener("keyup",()=>{ // ดักจับว่ามีการป้อนข้อความไหม
    let word = input.value.toLowerCase() // ดึงค่าที่ผู้ใช่้ป้อนมา แล้วทำให้เป็นตัวพิมพ์เล็กทั้งหมด โดยใช่ toLowerCase()
    let vowelCount = 0
    for(let i = 0;i<word.length;i++){ // ให้ i = 0 ถ้า i น้อยกว่า ความยาว word ให้ เพิ่ม i จนเท่า word.lenght
        let letter = word[i] // ให้ ตัวอักษร = word ช่องที่ i
        if(letter.match(/([a,e,i,o,u])/)){ // ถ้า letter มันไปตรงกับ a,e,i,o,u ให้ เพิ่ม vowelCount 
            vowelCount++
        }
    }
    countEl.innerHTML=`${vowelCount}` // ให้ class countEL แสดงค่าตาม vowelCount
})