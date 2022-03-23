const submit_btn = document.querySelector('.submit-btn');
const card1 = document.querySelector('.card-content-1');
const card2 = document.querySelector('.card-content-2');
const rating = document.querySelectorAll('.rating-btn');
const score = document.querySelector('.score');
let star_score=4;

submit_btn.addEventListener('click',onSubmit)

rating.forEach(btn =>{
    btn.addEventListener('click' , handleRatingBtnClick)
})

function onSubmit(){
    card1.classList.add('hide');
    score.textContent = star_score;
    card2.classList.remove('hide');
}

function handleRatingBtnClick(e){
    rating.forEach(btn =>{
        btn.classList.remove('active');
    })
    if(e.target.classList.contains('rating-btn')){
        e.target.classList.add('active');
    }
    else
        e.target.parentElement.classList.add('active');

    star_score = e.target.textContent;
}