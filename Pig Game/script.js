var curPlayer, scores, roundScore, gamePlaying, previous, winningScore;

init();
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        document.querySelector('#dice-1').style.display = 'block';
        document.querySelector('#dice-1').src = 'dice-' + dice1 + '.png';
        document.querySelector('#dice-2').style.display = 'block';
        document.querySelector('#dice-2').src = 'dice-' + dice2 + '.png';

        if(dice1 !== 1 && dice2 !== 1){
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + curPlayer).textContent = roundScore;
        }
        else{
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    var input = document.querySelector('.final-score').value;
    var winningScore;
    if(input)
        winningScore = input;
    else
        winningScore = 100;
    
    if(gamePlaying){
        scores[curPlayer] += roundScore; 
        document.querySelector('#score-' + curPlayer).textContent = scores[curPlayer];

        if(scores[curPlayer] >= winningScore) {
            document.querySelector('#name-' + curPlayer).textContent = 'Winner!';
            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';
            document.querySelector('.player-' + curPlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + curPlayer + '-panel').classList.add('winner');
            gamePlaying = false;
        }
        else {
            nextPlayer();
            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';
        }
    }
});

function nextPlayer() {
    curPlayer === 0 ? curPlayer = 1 : curPlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
        
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    curPlayer = 0;
    roundScore = 0;
    previous = 0;
    gamePlaying = true;
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
    
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}
