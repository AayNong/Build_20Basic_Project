const container = document.getElementById("container")
const getCountries=async()=>{
    const url='https://restcountries.com/v2/all' // ลิงค์ API แบบ all ในเว็ป https://restcountries.com/#endpoints-all
    const res = await fetch(url) // ให้รอดึงข้อมูลมาจาก url นี้ก่อน
    const items = await res.json() // ดึงมาในรูปแบบไฟล์ json
    items.forEach(element => { // ใช้ forEach loop ข้อมูลสมาชิกใน Array
        createCard(element) // โยน Element เข้าไปซึ่งถูกเก็บไว้ในตัวแปร Data
    });
}
const createCard=(data)=>{
    const cardEl = document.createElement("div") // สร้าง div ขึ้นมา
    cardEl.classList.add("country") // เมื่อสร้างให้เพิ่ม class .country ให้เลย
    const contentHTML=`
        <div class="img-container">
            <img src="${data.flag}"/>  
        </div>
        <div class="info">
            <h3 class="name">${data.name}</h3>
            <small>Capital : <span>${data.capital}</span></small>
        </div>
    ` // ดึงข้อมูล flag name และ capital มาแสดงผลตามแท็ก
    cardEl.innerHTML=contentHTML // ให้ ตัว div cardEl แสดงผลหน้าเว็ปเป็น contentHTML นั้นก็คือ API ที่เราดึงมา
    container.appendChild(cardEl) // เอา cardEl ไปยัดใน class container
}

getCountries()