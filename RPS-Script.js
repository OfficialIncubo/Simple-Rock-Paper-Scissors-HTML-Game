        //Functions for Document Object Model (scores, results, moves)
        function UpdateScoreText()
        {document.querySelector('.js-score').innerHTML = `Player score: ${scores.playerScore}, Opponent score: ${scores.opponentScore}, Ties: ${scores.ties}`;}
        function UpdateResultsText()
        {document.querySelector('.js-result').innerHTML = result;}

        //Global variables
        let opponentMove = '';
        let result = '';

        //Scores
        let scores = JSON.parse(localStorage.getItem('savedScore')) || {
            playerScore: 0,
            opponentScore: 0,
            ties: 0
        };

        /*
        if (!scores)
        {
            scores = {
            playerScore: 0,
            opponentScore: 0,
            ties: 0
            };
        }
        */

        UpdateScoreText();

        function pickOpponentMove()
        {
        const randomNumber = Math.random();

        if (randomNumber >= 0 && randomNumber <= 1/3)
        { opponentMove = 'rock'; }
        else if (randomNumber >= 1/3 && randomNumber <= 2/3)
        { opponentMove = 'paper'; }
        else if (randomNumber >= 2/3 && randomNumber <= 1) 
        { opponentMove = 'scissors'; }

        return opponentMove;
        }

        function playGame(playerMove)
        {
            const opponentMove = pickOpponentMove();

    if (playerMove === 'rock')
    {
        if (opponentMove === 'rock')
        {
            result = 'It is a tie!';
        }
        else if (opponentMove === 'paper')
        {
            result = 'You lose!';
        }
        else if (opponentMove === 'scissors')
        {
            result = 'You win!';
        }
    }

    if (playerMove === 'paper')
    {
        if (opponentMove === 'rock')
        {
            result = 'You win!';
        }
        else if (opponentMove === 'paper')
        {
            result = 'It is a tie!';
        }
        else if (opponentMove === 'scissors')
        {
            result = 'You lose!';
        }
    }
        
    if (playerMove === 'scissors')
    {
        if (opponentMove === 'rock')
        {
            result = 'You lose!';
        }
        else if (opponentMove === 'paper')
        {
            result = 'You win!';
        }
        else if (opponentMove === 'scissors')
        {
            result = 'It is a tie!';
        }
    }

    if (result == 'You win!')
        scores.playerScore++;
    else if (result == 'You lose!')
        scores.opponentScore++;
    else scores.ties++;

    localStorage.setItem('savedScore', JSON.stringify(scores));


        function UpdateMoveText()
        {document.querySelector('.js-moves').innerHTML = `Player: ${playerMove.charAt(0).toUpperCase() + playerMove.slice(1)}, Opponent: ${opponentMove.charAt(0).toUpperCase() + opponentMove.slice(1)}`;}
    UpdateScoreText();
    UpdateResultsText();
    UpdateMoveText();

        }