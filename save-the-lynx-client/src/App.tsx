import Header from "./components/header";
import BoardSpace from "./components/board-space";
import classNames from "classnames";
import React, { useState } from "react";
import { IPlayer } from "./interfaces";
import PlayerInputPaw from "./components/player-input-paw";
import LynxAnimal from "./components/lynx-animal";

function App() {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");

  const [currentPlayer, setCurrentPlayer] = useState<IPlayer>({
    name: "",
    id: 0,
  });
  const [board, setBoard] = useState([]);

  const [gameState, setGameState] = useState(0);

  const gameMove = (move: number[]) => {
    fetch("/move", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(move),
    })
      .then((res) => res.json())
      .then((data) => {
        setGameState(data.state);
        if (!data.state.won) {
          setCurrentPlayer(data.next);
          setBoard(data.board);
        } else {
          setGameState(2);
        }
      });
  };

  const startGame = () => {
    fetch("/start-game", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([playerOne, playerTwo]),
    })
      .then((res) => res.json())
      .then((data) => {
        setBoard(data.board);
        setGameState(1);
        setCurrentPlayer(data.firstPlayer);
      });
  };

  const showInputPlayers = () => {
    if (gameState < 1) {
      return (
        <div className="PlayerFormContainer">
          <form className="PlayerForm" onSubmit={handleSubmit}>
            <label>First Player:</label>
            <div className="PlayerFormInputButton">
              <input
                type="text"
                value={playerOne}
                onChange={(e) => setPlayerOne(e.target.value)}
              />
              <button type="submit">
                <PlayerInputPaw />
              </button>
            </div>
          </form>
          <form className="PlayerForm" onSubmit={handleSubmit}>
            <label>Second Player:</label>
            <div className="PlayerFormInputButton">
              <input
                type="text"
                value={playerTwo}
                onChange={(e) => setPlayerTwo(e.target.value)}
              />
              <button type="submit">
                <PlayerInputPaw />
              </button>
            </div>
          </form>
        </div>
      );
    }
  };

  const showStartGame = () => {
    if (gameState < 1) {
      return (
        <button className="StartGameButton" onClick={() => startGame()}>
          Start game
        </button>
      );
    }
  };

  const showGamePlay = () => {
    if (gameState >= 1) {
      return (
        <div className="GamePlay">
          <h2>The current player is {currentPlayer.name}.</h2>
          <div className="BoardContainer">
            <ul className="BoardUl">
              {board.map((row: number[], index: number) =>
                row.map((column: number, colIndex: number) => (
                  <BoardSpace
                    key={[index, colIndex]}
                    className={classNames(
                      "space-state",
                      board[index][colIndex] === 0 && "space-state-seen",
                      board[index][colIndex] === -1 && "space-state-found"
                    )}
                    searched={board[index][colIndex]}
                    coordinateClicked={processCoordinateClick}
                    coordinate={[index, colIndex]}
                  />
                ))
              )}
            </ul>
          </div>
        </div>
      );
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const processCoordinateClick = (chosenSpace: number[]) => {
    gameMove(chosenSpace);
  };

  return (
    <div className="App">
      <h1 className="AppHeader">
        <Header />
      </h1>
      {showInputPlayers()}
      <LynxAnimal />
      {showStartGame()}
      {showGamePlay()}
    </div>
  );
}

export default App;
