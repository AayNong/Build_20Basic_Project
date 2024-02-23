const btn = document.querySelector(".btn")
const coupon = document.querySelector(".coupon")

btn.addEventListener("click",(e)=>{
    //console.log("Copied")
    coupon.select()
    coupon.setSelectionRange(0,9999999)
    navigator.clipboard.writeText(coupon.value)
    btn.textContent="Copied!!"
    setTimeout(()=>{
        btn.textContent="Copy"
    },3000)
})