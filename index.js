const leftBtn = document.getElementById('left');
const rightbBtn = document.getElementById('right');

const twoleft = document.getElementById('twoleft');
const tworight = document.getElementById('tworight');

const image = document.getElementById('img1');
const rasmlar = ['./imgs/headblack.jpg', './imgs/headred.jpg', './imgs/headwhite.jpg'];
const num = document.getElementById('number');


// indikatorlar uchun
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

// input uchun 
const go = document.getElementById('go');




// chap ong button lar uchun
let active = 0;
const changeSlide = (direction) => {
    active += direction;

    if (active < 0) active = rasmlar.length - 1;
    if (active >= rasmlar.length) active = 0;
    image.src = rasmlar[active];
    num.innerHTML = active + 1 + "-rasm";
}
leftBtn.onclick = () => changeSlide(-1);
rightbBtn.onclick = () => changeSlide(1);

twoleft.onclick = ()=> changeSlide(-2); // bu knopka lar rasmalarni 2 ta dan o'tkazadi  savolda ( 2 ta chaga, 2 ta o’ngga knopkalari qo’shilsin.) shunday bo'lsin deyilganmi yoki ikki yoniga strelka qo'yilsin va 1 ta dan rasm o'zgarsin deyilgami man savolni shunday tushundim
tworight.onclick = ()=> changeSlide(2);

// indikatorlar uchun 
const indicators = (r) => {
    image.src = rasmlar[r];
    num.innerHTML = r + 1 + "-rasm";
}

one.onclick = () => indicators(0);
two.onclick = () => indicators(1);
three.onclick = () => indicators(2);



// input uchun
const changes = () => {
    const inp = document.getElementById('inp').value;
    if(inp > rasmlar.length || inp == '') return alert("Siz not'g'ri qiymat formatda kirittingiz!");
    image.src = rasmlar[inp-1];
    num.innerHTML = inp + "-rasm";

}

go.onclick = () => changes();
