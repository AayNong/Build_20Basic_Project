const result = document.getElementById("result")
const filter = document.getElementById("filter")
const listItem = []

filter.addEventListener("input",(e)=>{ // ให้เช็คว่ามีการ input เข้ามาหรือไม่
    const search = e.target.value.toLowerCase() // แล้วให้ตัวแปร search เป็นค่าที่ป้อนเข้ามา แล้วเปลี่ยนเป็นตัวพิมพ์เล็กทั้งหมด
    listItem.forEach(item=>{
        if(item.innerText.toLowerCase().includes(search)){ // ให้เช็คว่าถ้า ตัวใน listItem ตรงกับตัวแปร search ไหม ซึ่งต้องเป็นตัวพิมพ์เล็ก ถ้าเป็น true แสดงว่าค้นเจอ false เป็นค้นไม่เจอ
            item.classList.remove("hide") // ถ้าตรงกัน ให้ไม่มี class hide      // ใช้ .includes  ส่งค่ากลับมาเป็น true กับ false ซึ่งทำให้สามารถนำมาทำงาน กับ if else ได้
        }else{
            item.classList.add("hide") // ถ้าไม่จริง ให้ใส่ class hide เข้า่ไป
        }
    })
})

async function getData(){ // ต้องใช้ async ฟังก์ชั่น
    const url = "https://restcountries.com/v2/all" // ดึงข้อมูลมาจาก REST Country API
    const response = await fetch(url) // ให้รอดึงข้อมูลมาให้เสร็จก่อน
    const items = await response.json() // เปลี่ยนข้อมูลเป็นรูปแบบ json
    items.forEach(data => {
        const li = document.createElement("li") // ให้สร้าง li ใหม่
        listItem.push(li) // ให้ listItem จัดเก็บ li
        li.innerHTML=
        `
            <img src="${data.flag}">
            <div class="info">
                <h4>${data.name}</h4>
                <p>${formatNumber(data.population)}</p>
            </div>
        `

        result.appendChild(li) // นำ li ที่เราให้แสดงข้อมูล flag name population ยัดเข้าไปใน class result
    })
}
getData()

// จัดรูปแบบตัวเลขโดยใช้ function Number formatting ซึ่งเป็นฟังชั่นที่จะเติม คอมม่าให้กับเลขแต่ละหลัก ซึ่งเราจะใช้ function นี้กับ จำนวนประชากร
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}