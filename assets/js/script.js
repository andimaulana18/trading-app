let slides = document.querySelectorAll('.reviews .flex .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function previous(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

let monthButton = document.querySelector('.pricing .toggle-buttons .month-button');
let yearButton = document.querySelector('.pricing .toggle-buttons .year-button');
let monthlyPlan = document.querySelectorAll('.pricing .box-container .box .month');
let yearlyPlan = document.querySelectorAll('.pricing .box-container .box .year');

yearButton.onclick = () => {
    monthButton.classList.remove('active');
    yearButton.classList.add('active');

    monthlyPlan.forEach(mo => {mo.style.display = 'none'});
    yearlyPlan.forEach(ye => {ye.style.display = 'block'});
}

monthButton.onclick = () => {
    monthButton.classList.add('active');
    yearButton.classList.remove('active');

    monthlyPlan.forEach(mo => {mo.style.display = 'block'});
    yearlyPlan.forEach(ye => {ye.style.display = 'none'});
}