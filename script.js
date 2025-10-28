const playerProfile = {
    name: '',
    wins: 0,
    losses: 0,
    ties: 0,
    choices: []
};

const computerProfile = {
  choices: []
};

let personChoice;
let computerRandomizer;
let computerChoice;

updateStats()

function rpsInit() {
    let personChoice = window.prompt("Rock (R), Paper (P), or Scissors (S): ");

    if (personChoice !== null) {
    // User entered a value and clicked OK
        if (personChoice.length < 1) {
            window.alert("You didn't enter a choice.");
        }
        else if (personChoice.length > 1) {
            window.alert("You did not choose R, P, or S for your choice.");
        }
        else if (personChoice.length = 1) {
            if (personChoice.toUpperCase() !== "R"
                && personChoice.toUpperCase() !== "P"
                && personChoice.toUpperCase() !== "S") {
                    window.alert("You did not choose R, P, or S for your choice.");
            }
            else {
                computerRound(computerRandomizer);
                roundResult(personChoice, computerChoice);
            }
        }
        else {
            window.alert("Hmmm not sure what happened. Please try again.");
        }
    } else {
        quit();
    }
}

function computerRound (computerRandomizer) {
    computerRandomizer = getRandomInt(99);
    if (computerRandomizer >= 0 && computerRandomizer <= 33) {
        computerChoice = "R";
    }
    else if (computerRandomizer >= 34 && computerRandomizer <= 66) {
        computerChoice = "S";
    }
    else if (computerRandomizer >= 67 && computerRandomizer <= 100) {
        computerChoice = "P";
    }
    
    return computerChoice;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function roundResult (personChoice, computerChoice) {
    playerProfile.choices.push(personChoice.toUpperCase());
    computerProfile.choices.push(computerChoice.toUpperCase());

    let result;

    switch (personChoice.toUpperCase()) {
        case "R":
            switch (computerChoice.toUpperCase()) {
                case "R":
                    playerProfile.ties = playerProfile.ties + 1;
                    result = 'You tied!';
                    break;
                case "P":
                    playerProfile.losses = playerProfile.losses + 1;
                    result = 'You lost :(';
                    break;
                case "S":
                    playerProfile.wins = playerProfile.wins + 1;
                    result = 'You won!';
                    break;
            }
            break;
        case "P":
            switch (computerChoice.toUpperCase()) {
                case "R":
                    playerProfile.wins = playerProfile.wins + 1;
                    result = 'You won!';
                    break;
                case "P":
                    playerProfile.ties = playerProfile.ties + 1;
                    result = 'You tied!';
                    break;
                case "S":
                    playerProfile.losses = playerProfile.losses + 1;
                    result = 'You lost :(';
                    break;
            }
            break;
        case "S":
            switch (computerChoice.toUpperCase()) {
                case "R":
                    playerProfile.losses = playerProfile.losses + 1;
                    result = 'You lost :(';
                    break;
                case "P":
                    playerProfile.wins = playerProfile.wins + 1;
                    result = 'You won!';
                    break;
                case "S":
                    playerProfile.ties = playerProfile.ties + 1;
                    result = 'You tied!';
                    break;
            }
            break;
    }

    window.alert("Person choice: " + personChoice.toUpperCase() + ", Computer choice: " + computerChoice.toUpperCase() + " " + result);
    updateStats()

    quit();
}

function quit() {
    // User clicked Cancel or closed the prompt
    let quit = window.confirm("Would you like to quit?");
    if (quit) {
        updateStats()

        window.alert(
            "Wins: " + playerProfile.wins +
            " Losses: " + playerProfile.losses +
            " Ties: " + playerProfile.ties +
            " Choices: " + playerProfile.choices
        );
    }
    else {
        rpsInit()
    }
}

function updateStats() {
    document.getElementById("wins").innerHTML = playerProfile.wins;
    document.getElementById("losses").innerHTML = playerProfile.losses;
    document.getElementById("ties").innerHTML = playerProfile.ties;
    document.getElementById("playerChoices").innerHTML = playerProfile.choices;
    document.getElementById("computerChoices").innerHTML = computerProfile.choices;
}