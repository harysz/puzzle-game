let cards = document.querySelectorAll('.card');
let fail = document.querySelector('.failCount');

let isFlipped = false;
let waitAbit=false;
let firstCard, secondCard;
let count=0;

function clicked() {
    if (waitAbit) return;
    if (this===firstCard) return;
    this.classList.add('flip');
    if (!isFlipped) {
        isFlipped = !isFlipped;
        firstCard = this;
    } else {
        isFlipped = false;
        secondCard = this;
        checkValue();
    }
    function checkValue() {
        let Bingo=firstCard.dataset.name === secondCard.dataset.name
            Bingo ? disable(): unflip();
    }
    function addOne(){
        count++;
        fail.classList.add('failed');
        count >= 10 ?
        (fail.classList.add('mega'),fail.innerHTML='wow you are a rare case indeed'):
        fail.innerHTML=`fail count: ${count}`;
    }
    function disable(){
        firstCard.removeEventListener('click', clicked);
        secondCard.removeEventListener('click', clicked);
    }
    function unflip(){
        waitAbit=true;
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            addOne();
            anotherGues();
        }, 1500)
    }
    function anotherGues(){
        [isFlipped, waitAbit] = [false,false];
        [firstCard,secondCard]=[null,null];
    }
  
}cards.forEach(card => card.addEventListener('click', clicked));
(function Randomise(){
    cards.forEach(card=>{
     let random= Math.floor(Math.random()*12);
     card.style.order=random;
     });
 })();