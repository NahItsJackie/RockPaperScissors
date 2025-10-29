//Player Profile Object
const playerProfile = {
    name: 'Jackie',
    wins: 0,
    losses: 0,
    ties: 0,
    choices: []
};

//Computer Profile Object
const computerProfile = {
    name: 'Jarvis',
    wins: 0,
    losses: 0,
    ties: 0,
    choices: []
};

let storedPlayerProfile;
let storedComputerProfile;
let winRate;
let lossRate;
let tieRate;

const storedWinRate = winRate;
const storedLossRate = lossRate;
const storedTieRate = tieRate;

//Check if Local Storage key (localPlayerProfile) exists. If it does not, it creates it.
if (localStorage.getItem('localPlayerProfile') !== null) {
    storedPlayerProfile = JSON.parse(localStorage.getItem('localPlayerProfile'));
    document.getElementById('wins').textContent = `${storedPlayerProfile.wins} | Win Rate: `;
    document.getElementById('losses').textContent = `${storedPlayerProfile.losses} | Loss Rate: `;
    document.getElementById('ties').textContent = `${storedPlayerProfile.ties} | Tie Rate: `;
    document.getElementById('playerChoices').textContent = `${storedPlayerProfile.choices}`;
} else {
    localStorage.setItem('localPlayerProfile', JSON.stringify(playerProfile));
    storedPlayerProfile = JSON.parse(localStorage.getItem('localPlayerProfile'));
    document.getElementById('wins').textContent = `${storedPlayerProfile.wins} | Win Rate: `;
    document.getElementById('losses').textContent = `${storedPlayerProfile.losses} | Loss Rate: `;
    document.getElementById('ties').textContent = `${storedPlayerProfile.ties} | Tie Rate: `;
    document.getElementById('playerChoices').textContent = `${storedPlayerProfile.choices}`;
}

//Check if Local Storage key (localComputerProfile) exists. If it does not, it creates it.
if (localStorage.getItem('localComputerProfile') !== null) {
    storedComputerProfile = JSON.parse(localStorage.getItem('localComputerProfile'));
    document.getElementById('computerChoices').textContent = `${storedComputerProfile.choices}`;
} else {
    localStorage.setItem('localComputerProfile', JSON.stringify(computerProfile));
    storedComputerProfile = JSON.parse(localStorage.getItem('localComputerProfile'));
    document.getElementById('computerChoices').textContent = `${storedComputerProfile.choices}`;
}

function gameInit(playerChoice) {
    playerProfile.choices = storedPlayerProfile.choices;
    playerProfile.choices.push(playerChoice);
    document.getElementById('playerChoices').textContent = `${storedPlayerProfile.choices}`;
    
    computerChoice = computerRound()

    roundResult(playerChoice, computerChoice)
}

function computerRound () {
    computerProfile.choices = storedComputerProfile.choices;

    let computerChoice;
    let randomizer = Math.floor(Math.random() * 99);
    if (randomizer >= 0 && randomizer <= 33) {
        computerChoice = "rock";
    }
    else if (randomizer >= 34 && randomizer <= 66) {
        computerChoice = "paper";
    }
    else if (randomizer >= 67 && randomizer <= 100) {
        computerChoice = "scissors";
    }

    computerProfile.choices.push(computerChoice);
    document.getElementById('computerChoices').textContent = `${storedComputerProfile.choices}`;

    return computerChoice;
}

function roundResult(playerChoice, computerChoice) {
    playerProfile.wins = parseInt(storedPlayerProfile.wins);
    playerProfile.losses = parseInt(storedPlayerProfile.losses);
    playerProfile.ties = parseInt(storedPlayerProfile.ties);

    if (playerChoice == computerChoice) {
        playerProfile.ties = parseInt(storedPlayerProfile.ties) + 1;
        window.alert("Better luck next time. You tied!");
    }
    else if ((playerChoice == 'rock' && computerChoice == 'paper') ||
    (playerChoice == 'paper' && computerChoice == 'scissors') ||
    (playerChoice == 'scissors' && computerChoice == 'rock')) {
        playerProfile.losses = parseInt(storedPlayerProfile.losses) + 1;
        window.alert("Whelp, you lost to some random but not random computer choice. Try again!");
    }
    else if ((playerChoice == 'rock' && computerChoice == 'scissors') ||
    (playerChoice == 'paper' && computerChoice == 'rock') ||
    (playerChoice == 'scissors' && computerChoice == 'paper')) {
        playerProfile.wins = parseInt(storedPlayerProfile.wins) + 1;
        window.alert("Hey! Congrats. You beat the system.");
    }

    localStorage.setItem('localPlayerProfile', JSON.stringify(playerProfile));
    storedPlayerProfile = JSON.parse(localStorage.getItem('localPlayerProfile'));

    localStorage.setItem('localComputerProfile', JSON.stringify(playerProfile));
    storedComputerProfile = JSON.parse(localStorage.getItem('localComputerProfile'));

    winRate = (storedPlayerProfile.wins / (storedPlayerProfile.wins + storedPlayerProfile.losses + storedPlayerProfile.ties) * 100).toFixed(2);
    lossRate = (storedPlayerProfile.losses / (storedPlayerProfile.wins + storedPlayerProfile.losses + storedPlayerProfile.ties) * 100).toFixed(2);
    tieRate = (storedPlayerProfile.ties / (storedPlayerProfile.wins + storedPlayerProfile.losses + storedPlayerProfile.ties) * 100).toFixed(2);

    document.getElementById('wins').textContent = `${storedPlayerProfile.wins} | Win Rate: ${winRate}%`;
    document.getElementById('losses').textContent = `${storedPlayerProfile.losses} | Loss Rate: ${lossRate}%`;
    document.getElementById('ties').textContent = `${storedPlayerProfile.ties} | Tie Rate: ${tieRate}%`;
}

function reset() {
    playerProfile.wins = 0;
    playerProfile.losses = 0;
    playerProfile.ties = 0;
    playerProfile.choices = [];

    computerProfile.wins = 0;
    computerProfile.losses = 0;
    computerProfile.ties = 0;
    computerProfile.choices = [];
    
    localStorage.setItem('localPlayerProfile', JSON.stringify(playerProfile));
    storedPlayerProfile = JSON.parse(localStorage.getItem('localPlayerProfile'));

    localStorage.setItem('localComputerProfile', JSON.stringify(computerProfile));
    storedComputerProfile = JSON.parse(localStorage.getItem('localComputerProfile'));

    document.getElementById('wins').textContent = `${storedPlayerProfile.wins} | Win Rate: `;
    document.getElementById('losses').textContent = `${storedPlayerProfile.losses} | Loss Rate: `;
    document.getElementById('ties').textContent = `${storedPlayerProfile.ties} | Tie Rate: `;
    document.getElementById('playerChoices').textContent = `${storedPlayerProfile.choices}`;
    document.getElementById('computerChoices').textContent = `${storedComputerProfile.choices}`;
}