const cpuOptions = ['Rock', 'Paper', 'Scissors'];
const returnCpuChoice = () => {
    return cpuOptions[Math.floor(Math.random() * 3)];
}

const userChoice = document.getElementById("userChoice");
const outcome = document.getElementById('outcome');
const choices = document.getElementById('choices');
let userCount = 0;
let cpuCount = 0;

outcome.innerHTML = userChoice.value;

const rps = () => {
    const cpuChoice = returnCpuChoice();
    choices.innerHTML = "You chose " + userChoice.value + " and your opponent chose " + cpuChoice + ".";
    const userPic = document.getElementById('userPic');
    const cpuPic = document.getElementById('cpuPic');
    const userScore = document.getElementById('userScore');
    const cpuScore = document.getElementById('cpuScore');
    


    if (userChoice.value === 'Rock') {
        userPic.src = 'images/rock.jpg';
        userPic.removeAttribute('hidden');
    } else if (userChoice.value === 'Scissors') {
        userPic.src = 'images/scissors.jpg';
        userPic.removeAttribute('hidden');
    } else if (userChoice.value === 'Paper') {
        userPic.src = 'images/paper.jpg';
        userPic.removeAttribute('hidden');
    }

    if (cpuChoice === 'Rock') {
        cpuPic.src = 'images/rock.jpg';
        cpuPic.removeAttribute('hidden');
    } else if (cpuChoice === 'Scissors') {
        cpuPic.src = 'images/scissors.jpg';
        cpuPic.removeAttribute('hidden');
    } else if (cpuChoice === 'Paper') {
        cpuPic.src = 'images/paper.jpg';
        cpuPic.removeAttribute('hidden');
    }
    
    if (userChoice.value === cpuChoice) {
        outcome.innerHTML = "It appears that we have a tie!"
    } else if (userChoice.value === 'Rock' && cpuChoice === 'Paper') {
        cpuCount++;
        cpuScore.innerHTML = 'Opponent: ' + cpuCount;
        outcome.innerHTML = "Paper covers Rock, you lose!";
    } else if (userChoice.value === 'Rock' && cpuChoice === 'Scissors') {
        userCount++;
        userScore.innerHTML = 'You: ' + userCount;
        outcome.innerHTML = "Rock smashes Scissors, you win!";
    } else if (userChoice.value === 'Paper' && cpuChoice === 'Scissors') {
        cpuCount++;
        cpuScore.innerHTML = 'Opponent: ' + cpuCount;
        outcome.innerHTML = "Scissors cuts Paper, you lose!";
    } else if (userChoice.value === 'Paper' && cpuChoice === 'Rock') {
        userCount++;
        userScore.innerHTML = 'You: ' + userCount;
        outcome.innerHTML = "Paper covers Rock, you win!";
    } else if (userChoice.value === 'Scissors' && cpuChoice === 'Rock') {
        cpuCount++;
        cpuScore.innerHTML = 'Opponent: ' + cpuCount;
        outcome.innerHTML = "Rock smashes Scissors, you lose!";
    } else if (userChoice.value === 'Scissors' && cpuChoice === 'Paper') {
        userCount++;
        userScore.innerHTML = 'You: ' + userCount;
        outcome.innerHTML = "Scissors cuts Paper, you win!";
    }
    
    
    document.getElementById('outcome').removeAttribute('hidden');
};
btn2.addEventListener('click', function() {
    document.getElementById('output').hidden=true;
    document.getElementById('outcome').hidden=false;
    document.getElementById('choices').hidden=false;
    document.getElementById('userPic').hidden=false;
    document.getElementById('cpuPic').hidden=false;
});
btn2.addEventListener('click', rps);
