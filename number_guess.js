while(true){
    var guesses = 5;

    const number = Math.floor(Math.random()*100)+1;

    var not_exit = true;

    while (guesses != 0 && not_exit){
        var user_guess = parseInt(prompt("Make a Guess"));

        if (user_guess == number){
            alert("CONGRATULATIONS! YOU'VE GUESSED THE NUMBER "+number);
            not_exit = false;
        }

        else if (user_guess > number){
            guesses -= 1;
            alert("YOUR GUESS IS TOO HIGH. left with "+guesses+" Guesses.");
        }

        else{
            guesses -= 1;
            alert("YOUR GUESS IS TOO LOW. left with "+guesses+" Guesses.");
        }
    }

    if (guesses == 0){
        alert("OUT OF LIVES. THE NUMBER IS "+number);
    }

    var proceed = prompt("WANT TO CONTINUE??.. (yes/no)");

    if( proceed != 'yes'){
        alert("THANKS FOR PLAYING");
        break;
    }
}

