const playerProfile = {
  wins: 0,
  losses: 0,
  ties: 0,
  choices: []
};

let personChoice;
let computerRandomizer;
let computerChoice;

document.getElementById("wins").innerHTML = playerProfile.wins;
document.getElementById("losses").innerHTML = playerProfile.losses;
document.getElementById("ties").innerHTML = playerProfile.ties;
document.getElementById("choices").innerHTML = playerProfile.choices;

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
    switch (computerRandomizer = getRandomInt(3)) {
    case computerRandomizer = 0:
        computerChoice = "R"
        break;
    case computerRandomizer = 1:
        computerChoice = "S"
        break;
    case computerRandomizer = 2:
        computerChoice = "P"
        break;
    }
    return computerChoice;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function roundResult (personChoice, computerChoice) {
    playerProfile.choices.push(personChoice);

    switch (personChoice.toUpperCase()) {
        case "R":
            switch (computerChoice.toUpperCase()) {
                case "R":
                    playerProfile.ties = playerProfile.ties + 1;
                    window.alert("Person choice: " + personChoice.toUpperCase() + ", Computer choice: " + computerChoice.toUpperCase() + " You tied!");
                    document.getElementById("ties").innerHTML = playerProfile.ties;
                    document.getElementById("choices").innerHTML = playerProfile.choices;
                    break;
                case "P":
                    playerProfile.losses = playerProfile.losses + 1;
                    window.alert("Person choice: " + personChoice.toUpperCase() + ", Computer choice: " + computerChoice.toUpperCase() + " You lost :(");
                    document.getElementById("losses").innerHTML = playerProfile.losses;
                    document.getElementById("choices").innerHTML = playerProfile.choices;
                    break;
                case "S":
                    playerProfile.wins = playerProfile.wins + 1;
                    window.alert("Person choice: " + personChoice.toUpperCase() + ", Computer choice: " + computerChoice.toUpperCase() + " You won!");
                    document.getElementById("wins").innerHTML = playerProfile.wins;
                    document.getElementById("choices").innerHTML = playerProfile.choices;
                    break;
            }
            break;
        case "P":
            switch (computerChoice.toUpperCase()) {
                case "R":
                    playerProfile.wins = playerProfile.wins + 1;
                    window.alert("Person choice: " + personChoice.toUpperCase() + ", Computer choice: " + computerChoice.toUpperCase() + " You won!");
                    document.getElementById("wins").innerHTML = playerProfile.wins;
                    document.getElementById("choices").innerHTML = playerProfile.choices;
                    break;
                case "P":
                    playerProfile.ties = playerProfile.ties + 1;
                    window.alert("Person choice: " + personChoice.toUpperCase() + ", Computer choice: " + computerChoice.toUpperCase() + " You tied!");
                    document.getElementById("ties").innerHTML = playerProfile.ties;
                    document.getElementById("choices").innerHTML = playerProfile.choices;
                    break;
                case "S":
                    playerProfile.losses = playerProfile.losses + 1;
                    window.alert("Person choice: " + personChoice.toUpperCase() + ", Computer choice: " + computerChoice.toUpperCase() + " You lost :(");
                    document.getElementById("losses").innerHTML = playerProfile.losses;
                    document.getElementById("choices").innerHTML = playerProfile.choices;
                    break;
            }
            break;
        case "S":
            switch (computerChoice.toUpperCase()) {
                case "R":
                    playerProfile.losses = playerProfile.losses + 1;
                    window.alert("Person choice: " + personChoice.toUpperCase() + ", Computer choice: " + computerChoice.toUpperCase() + " You lost :(");
                    document.getElementById("losses").innerHTML = playerProfile.losses;
                    document.getElementById("choices").innerHTML = playerProfile.choices;
                    break;
                case "P":
                    playerProfile.wins = playerProfile.wins + 1;
                    window.alert("Person choice: " + personChoice.toUpperCase() + ", Computer choice: " + computerChoice.toUpperCase() + " You won!");
                    document.getElementById("wins").innerHTML = playerProfile.wins;
                    document.getElementById("choices").innerHTML = playerProfile.choices;
                    break;
                case "S":
                    playerProfile.ties = playerProfile.ties + 1;
                    window.alert("Person choice: " + personChoice.toUpperCase() + ", Computer choice: " + computerChoice.toUpperCase() + " You tied!");
                    document.getElementById("ties").innerHTML = playerProfile.ties;
                    document.getElementById("choices").innerHTML = playerProfile.choices;
                    break;
            }
            break;
    }

    quit();
}

function quit() {
    // User clicked Cancel or closed the prompt
    let quit = window.confirm("Would you like to quit?");
    if (quit) {
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