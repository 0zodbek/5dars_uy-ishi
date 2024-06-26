let eng = document.getElementById('LanguageENG')
let rus = document.getElementById('LanguageRUS')
let uzb = document.getElementById('LanguageUZB')
let heading1 = document.querySelector('h1')
let heading21 = document.getElementById('h21');
let heading22 = document.getElementById('h22');
let firstParagrif = document.querySelector('p');
let button = document.getElementById('tryFigma')
let check = document.querySelector('.check #check')
let rightCard = document.getElementsByClassName('.cardWrapper .info')
let leftCard = document.getElementsByClassName('.whiteCard')
let body = document.querySelector('body') 
// console.log(check);
uzb.addEventListener('click',function(){
heading1.textContent = 'Figma bilan ijodkorlik kuchini oching!'
heading21.textContent = 'QORA REJIM'
heading22.textContent = 'YORQIN REJIM'
firstParagrif.textContent = "Dizayn o'yiningizni oshirishga tayyormisiz ?"
button.textContent = 'Ozingizni sinang'
})
rus.addEventListener('click',function(){
    heading1.textContent = 'Раскройте силу творчества с Figma!'
heading21.textContent = 'ТЕМНЫЙ'
heading22.textContent = 'СВЕТОВОЙ'
firstParagrif.textContent = "Готовы улучшить свою дизайнерскую игру?"
button.textContent = 'Попробуйте сейчас'
})
eng.addEventListener('click',function(){
    heading1.textContent = 'Unlock the Power of Creativity with Figma!'
    heading21.textContent = 'DARK MODE'
    heading22.textContent = 'LIGHT MODE'
    firstParagrif.textContent = "Ready to elevate your design game? "
    button.textContent = 'Try Figma now'
})
check.addEventListener('click', function(){
   rightCard.style.display = 'block';
   leftCard.style.display = 'block'
// body.innerHTML = ''
})