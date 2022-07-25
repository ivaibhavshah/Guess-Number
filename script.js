'use strict';

// console.log(document.querySelector('.message'));
// document.querySelector('.message').textContent = '🎉 Correct Number !';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// // getting value of guess element of html page
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let score = 20;
let highscore = 0;
let secret_number = Math.trunc(Math.random()*20)+1;


document.querySelector('.check').addEventListener('click', function() {
   
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) 
    {
        document.querySelector('.message').textContent = '😵 No Number!';
    }
    else if(guess == secret_number)
    {
        document.querySelector('.message').textContent = '🤩 Correct number';
        document.querySelector('.number').style.width = "25rem";
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secret_number;
        
        if(score>highscore)
        {
            highscore=score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(guess != secret_number){

        if(score>1)
        {
            document.querySelector('.message').textContent = guess>secret_number ? 'Too High📈' : 'Too Low 📉';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else
        {
            
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = 'You Lost the game 😟😟';
            
        }
    }
}
)
// document.querySelector('.again').addEventListener('click',function (){location.reload(true)});
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secret_number = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value  = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})