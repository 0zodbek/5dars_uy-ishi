let eng = document.getElementById('LanguageENG')
let rus = document.getElementById('LanguageRUS')
let uzb = document.getElementById('LanguageUZB')
let heading1 = document.querySelector('h1')
let heading21 = document.getElementById('h21');
let heading22 = document.getElementById('h22');
let firstParagrif = document.querySelector('p');
let button = document.getElementById('tryFigma')
let check = document.querySelector('.check #check')
let body = document.querySelector('body') 
let p12 = document.getElementById('p12')
let h12 = document.getElementById('h12')
let tryfigma = document.getElementsByClassName('btn')
const righCard = document.querySelector(".cardWrapper .darkCard .rightCard");
const lighCard = document.querySelector(".cardWrapper .whiteCard .leftCard");

// console.log(tryfigma);
uzb.addEventListener('click',function(){
heading1.textContent = 'Figma bilan ijodkorlik kuchini oching!'
heading21.textContent = 'QORA REJIM'
heading22.textContent = 'YORQIN REJIM'
firstParagrif.textContent = "Dizayn o'yiningizni oshirishga tayyormisiz ?"
button.textContent = 'Ozingizni sinang'
h12.textContent = 'Figma bilan ijodkorlik kuchini oching!'
p12.textContent = "Dizayn o'yiningizni oshirishga tayyormisiz ?";
tryfigma.textContent = 'ozingizni sinang'
})
rus.addEventListener('click',function(){
    heading1.textContent = 'Раскройте силу творчества с Figma!'
heading21.textContent = 'ТЕМНЫЙ'
heading22.textContent = 'СВЕТОВОЙ'
firstParagrif.textContent = "Готовы улучшить свою дизайнерскую игру?"
button.textContent = 'Попробуйте сейчас'
h12.textContent = 'Раскройте силу творчества с Figma!'
p12.textContent = "Готовы улучшить свою дизайнерскую игру?"
// btn.textContent = 'Попробуйте сейчас'
})
eng.addEventListener('click',function(){
    heading1.textContent = 'Unlock the Power of Creativity with Figma!'
    heading21.textContent = 'DARK MODE'
    heading22.textContent = 'LIGHT MODE'
    firstParagrif.textContent = "Ready to elevate your design game? "
    button.textContent = 'Try Figma now'
    h12.textContent = 'Unlock the Power of Creativity with Figma!'
    p12.textContent = "Ready to elevate your design game? "
})
check.onclick = mode;
function mode() {
    if(check.checked) {
        righCard.style.display = "none"
        lighCard.style.display = "flex"
    } else {
        righCard.style.display = "flex"
        lighCard.style.display = "none"
    }
}