const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

btn.addEventListener("click",(e)=>{
    e.preventDefault() // ไม่ต้อง reset ค่าที่อยู่ในแบบฟอร์ม
    let weight = document.getElementById("weight").value // ให้เอาค่าทีกรอกในแบบฟอร์มมา
    let height = document.getElementById("height").value

    if(weight === "" || isNaN(weight)){ // ถ้าค่าทีป้อนเข้ามา string หรือค่าว่าง ให้ return ไปที่ result
        return result.innerHTML="Please enter your weight"
    }else if(height === "" || isNaN(height)){ // ถ้าค่าทีป้อนเข้ามา string หรือค่าว่าง ให้ return ไปที่ result
        return result.innerHTML="Please enter your height"
    }else{
        // เริ่มต้นคำนวนค่า BMI = weight / height^2
        //cm => m
        height = height / 100
        let bmi = (weight/Math.pow(height,2)).toFixed(2)

        // BMI 30+ = อ้วนมาก
        //     25.0 - 29.9 = อ้วน
        //     18.5 - 24.9 = น้ำหนักปกติ
        //น้อยว่า 18.5 = ผอมเกินไป
        if(bmi<18.5){
            showResult(bmi,"Too thin","#E5BE02")
        }else if(bmi>=18.5 && bmi<=24.9){
            showResult(bmi,"Normal weight","#30BF1F")
        }else if(bmi>=25.0 && bmi<=29.9){
            showResult(bmi,"Fat","#BF1F1F")
        }else{
            showResult(bmi,"Too fat","#931FBF")
        }
    }
})

function showResult(bmi,message,color){
    result.style.backgroundColor = color
    return result.innerHTML = `Result = ${bmi} (${message})`
}