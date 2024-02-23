const celciusInput = document.getElementById("celcius")
const fahrenheitInput = document.getElementById("fahrenheit")
const kelvinInput = document.getElementById("kelvin")
const temInputs = document.querySelectorAll("input")

temInputs.forEach(input=>{ // เข้าไป loop สมาชิกใน temInputs
    input.addEventListener("input",(e)=>{ // ถ้ามีการป้อนข้อความเข้ามา
        let tempValue = parseInt(e.target.value) // ให้ tempValue เท่ากับ ค่าที่ป้อนเข้ามาเป็นจำนวนเต็ม โดยใช้ function parseInt
        let inputName = e.target.name // ให้ inputName เป็นชื่อ id ของช่องที่ป้อนเพื่อให้ทราบว่าป้อนในหน่วยไหน

        if(e.target.value === ""){ // ถ้าข้าที่ป้อนเข้ามาเป็นค่าว่าง ให้เซ็ตทุกค่าเป็นค่าว่างแล้วส่งกลับไป ไม่นำไปทำงานกับคำสั่งต่อไป
            celciusInput.value=null
            fahrenheitInput.value=null
            kelvinInput.value=null
            return
        }
        // กระบวนการแปลงอุณหภูมิ
        // celcius f = c * 1.8 + 32
                // k = c + 273
        if(inputName === "celcius"){ // ถ้าค่าที่ป้อนเข้ามาเป็นค่า celcius
            // celcius --> fahrenheit
            let fahrenheit = tempValue * 1.8 + 32 // นำ ค่า celcius * 1.8 + 32
            fahrenheitInput.value = fahrenheit.toFixed(2) // ให้ค่า fahrenheitInput.value เป็นค่า fahrenheit ที่ทำการแปลงค่ามาแล้วและแปลงเป็นทศนิยม 2 ตำแหน่ง

            // celcius --> kelvin
            let kelvin = tempValue + 273 // นำค่า celcius + 273
            kelvinInput.value = kelvin.toFixed(2) // ให้ค่า kelvinInput.value เป็นค่า kelvin ที่บวก 273 มาแล้วและแปลงเป็นทศนิยม 2 ตำแหน่ง
        }else if(inputName === "fahrenheit"){
            // fahrenheit --> celcius
            let celcius = (tempValue - 32) / 1.8 // นำค่า fahrenheit - 32 / 1.8
            celciusInput.value = celcius.toFixed(2) // ให้ค่า celciusInput.value เป็นค่า celcius ที่ลบ 32 หาร 1.8 แล้วแปลงเป็นทศนิยม 2 ตำแหน่ง

            // farenheit --> kelvin
            let kelvin = (tempValue - 32) / 1.8 + 273 // นำค่า kelvin - 32 / 1.8 +273
            kelvinInput.value = kelvin.toFixed(2) // ให้ค่า kelvinInput.value เป็นค่า kelvin ลบ 32 หาร 1.8 + 273 แล้วแปลงเป้นทศนิยม 2 ตำแหน่ง
        }else if(inputName === "kelvin"){
            // kelvin --> celcius
            let celcius = tempValue - 273 // นำค่า celcius - 273
            celciusInput.value = celcius.toFixed(2) // ให้ค่า celciusInput.value เป็นค่า celcius ลบ 273 แล้วแปลงเป็นทศนิยม 2 ตำแหน่ง

            // kelvin --> fahrenheit
            let fahrenheit = (tempValue - 273) * 1.8 + 32 // นำค่า fahrenheit - 273 * 1.8 + 32
            fahrenheitInput.value = fahrenheit.toFixed(2) // ให้ค่า fahrenheit.value เท่ากับ fahrenheit ลบ 32 คูณ 1.8 บวก 32 แล้วแปลงเป็นทศนิยม 2 ตำแหน่ง
        }
    })
})