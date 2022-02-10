import Header from './components/header';
import BoardSpace from './components/board-space';
import classNames from 'classnames';
import React, { useState } from 'react';

function App() {
  // const [currentPlayer, setCurrentPLayer] = useState(0);
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  // 1: first player to start, 2: second player
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [board, setBoard] = useState([]);
  // 0: setup, 1: game-play, 2: victory, 3: defeat
  const [gameState, setGameState] = useState(0);

  // const gameState = {
  //   initial: 'setup',
  //   setup: {
  //     actions: {},
  //     transition: 'play'
  //   },
  //   play: {},
  //   victory: {},
  //   defeat: {}
  // };

  // useEffect(() => {
  //   fetch('/player').then(res => res.json()).then(data => {
  //     setCurrentPLayer(data.player);
  //   });
  // }, []);  

  // useEffect(() => {
  //   if (gameState === 2) {
  //     console.log('Victory');
  //   }
  // }, [gameState])
  
  const setFirstPlayer = (event) => {
    event.preventDefault();
    fetch('/first-player', {
      method: "POST",
      headers: {
      'Content-Type' : 'application/json'
      },
      body: JSON.stringify(playerOne)
    }).then(res => console.log(res))
  }

  const testMove = ((move) => {
    console.log(move);
    fetch('/move', {
      method: "POST",
      headers: {
      'Content-Type' : 'application/json'
      },
      body: JSON.stringify(move)
    }).then(res => res.json())
    .then(data => {
      if (!data.won) {
        setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
        setBoard(data.board.map((row, index) =>
          row.map((column, colIndex) =>
            <BoardSpace
              key={[index, colIndex]}
              className={classNames(
                'space-state',
                data.board[index][colIndex] === 0 && 'space-state-seen',
                data.board[index][colIndex] === -1 && 'space-state-found'
              )}
              searched={data.board[index][colIndex]}
              coordinateClicked={processCoordinateClick}
              coordinate={[index, colIndex]}
            />
          )
        ));
      } else {
        setGameState(2);
      }
    });
  });

  const setSecondPlayer = (event) => {
    event.preventDefault();
    fetch('/second-player', {
      method: "POST",
      headers: {
      'Content-Type' : 'application/json'
      },
      body: JSON.stringify(playerTwo)
    }).then(res => console.log(res))
  }

  const processCoordinateClick = (chosenSpace) => {
    testMove(chosenSpace);
    console.log(chosenSpace);
  }

  const startGame = () => {
    fetch('/start-game', {
      method: "POST",
      headers: {
      'Content-Type' : 'application/json'
      },
      body: JSON.stringify("start")
    }).then(res => res.json())
    .then(data => {
      setBoard(data.board.map((row, index) =>
        row.map((column, colIndex) =>
          <BoardSpace
            key={[index, colIndex]}
            className={classNames(
              'space-state',
              data.board[index][colIndex] === 0 && 'space-state-seen',
              data.board[index][colIndex] === -1 && 'space-state-found'
            )}
            searched={data.board[index][colIndex]}
            coordinateClicked={processCoordinateClick}
            coordinate={[index, colIndex]}
          />
        )
      ));
      setGameState(1)
    })
  }

  // useEffect(() => {
  //   fetch('/start-game', {
  //     method: "POST",
  //     headers: {
  //     'Content-Type' : 'application/json'
  //     },
  //     body: JSON.stringify(game)
  //   }).then(res => console.log(res))
  // });

  return (
    <div className="App">
      <h1><Header /></h1>
      <form onSubmit={setFirstPlayer}>
        <label>Enter first player's name:
          <input 
            type="text" 
            value={playerOne}
            onChange={(e) => setPlayerOne(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <form onSubmit={setSecondPlayer}>
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
      <ul>{board}</ul>
      <p>The current player is {currentPlayer}.</p>
      {/* <form onSubmit={testMove}>
        <label>Enter test move
          <input 
            type="number" 
            value={move}
            onChange={() => setMove((4,2))}
          />
        </label>
        <input type="submit" />
      </form> */}
      {/* <button onClick={() => {
        testMove([2,2]);
      }}>
        Test move
      </button> */}
    </div>
  );
}

export default App;
