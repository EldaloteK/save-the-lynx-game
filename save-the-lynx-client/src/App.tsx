import Header from './components/header';
import BoardSpace from './components/board-space';
import classNames from 'classnames';
import React, { useState } from "react";
import { IPlayer } from './interfaces';


function App() {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");

  const [currentPlayer, setCurrentPlayer] = useState<IPlayer>({
    name: '',
    id: 0
  });
  const [board, setBoard] = useState([]);

  // 0: setup, 1: game-play, 2: victory, 3: defeat
  const [gameState, setGameState] = useState(0);

  const gameMove = ((move: number[]) => {
    fetch('/move', {
      method: "POST",
      headers: {
      'Content-Type' : 'application/json'
      },
      body: JSON.stringify(move)
    }).then(res => res.json())
    .then(data => {
      setGameState(data.state);
      if (!data.state.won) {
        setCurrentPlayer(data.next);
        setBoard(data.board);
      } else {
        setGameState(2);
      }
    });
  });

  const startGame = () => {
    fetch('/start-game', {
      method: "POST",
      headers: {
      'Content-Type' : 'application/json'
      },
      body: JSON.stringify([playerOne, playerTwo])
    }).then(res => res.json())
    .then(data => {
      setBoard(data.board);
      setGameState(1);
      setCurrentPlayer(data.firstPlayer);
    })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const processCoordinateClick = (chosenSpace: number[]) => {
    gameMove(chosenSpace);
  }

  return (
    <div className="App">
      <h1><Header /></h1>
      <form onSubmit={handleSubmit}>
        <label>Enter first player's name:
          <input 
            type="text" 
            value={playerOne}
            onChange={(e) => setPlayerOne(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <form onSubmit={handleSubmit}>
        <label>Enter second player's name
          <input 
            type="text" 
            value={playerTwo}
            onChange={(e) => setPlayerTwo(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <button onClick={() => startGame()}>
        Start game
      </button>
      <p>Game state: {gameState}.</p>
      <ul>
        {board.map((row: number[], index: number) =>
          row.map((column: number, colIndex: number) =>
            <BoardSpace
              key={[index, colIndex]}
              className={classNames(
                'space-state',
                board[index][colIndex] === 0 && 'space-state-seen',
                board[index][colIndex] === -1 && 'space-state-found'
              )}
              searched={board[index][colIndex]}
              coordinateClicked={processCoordinateClick}
              coordinate={[index, colIndex]}
            />
          )
        )}
      </ul>
      <p>The current player is {currentPlayer.name}.</p>
    </div>
  );
}

export default App;
