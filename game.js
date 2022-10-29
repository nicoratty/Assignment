prompt("Enter your Username");
    let score = 0;
function guessNumber() {
let guessNum = 2
        
        // generating a random integer from 1 to 10
        let random = Math.floor(Math.random() * guessNum) + 1;
        let guesss = parseInt(prompt('Enter a number between 1 to  guessNum'));

        let res = document.querySelector('.guess');
        let next = document.querySelector('.next');
        
        
        next.addEventListener("click", function (){
            random = Math.floor(Math.random() * guessNum + 1) + 1;
            guesss = parseInt(prompt('Enter a number between 1 to guessNum'));
            if (guessss == randoms) {
              score += 1;
              res.textContent = score;
            }
        });

    
        if (guesss == random) {
            score += 1;
            res.textContent = score;
    }
        else {
            let guesss = parseInt(prompt('Enter a number between 1 - guessNum'));

    }
        console.log(random);
    }
    guessNumber()
