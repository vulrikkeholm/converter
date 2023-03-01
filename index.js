
const btn1 = document.getElementById("btn")

const length1 = document.getElementById("length")
const volume1 = document.getElementById("volume")
const mass1 = document.getElementById("mass")

let num1 = document.getElementById("inputField")


function fun1() {
        const m2f = num1.value*3.281;
        const f2m = num1.value/3.281;
        const l2g = num1.value*0.264;
        const g2l = num1.value/0.264;
        const k2p = num1.value*2.204;
        const p2k = num1.value/2.204;
        length1.innerHTML= `${num1.value} metres = ${m2f.toFixed(2)} feet | ${num1.value} feet = ${f2m.toFixed(2)} metres`;
        volume1.innerHTML= `${num1.value} litres = ${l2g.toFixed(2)} gallons | ${num1.value} gallons = ${g2l.toFixed(2)} litres`;
        mass1.innerHTML= `${num1.value} kilogrammes = ${k2p.toFixed(2)} pounds | ${num1.value} pounds = ${p2k.toFixed(2)} kilogrammes`;
    }

btn1.addEventListener("click", fun1)
