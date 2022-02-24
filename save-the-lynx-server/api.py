from flask import Flask, request
from game import Game
from enums import State

app = Flask(__name__)

game = Game()

game_state_codes = {
    State.setup: 0,
    State.started: 1, 
    State.victory: 2, 
    State.defeat: 3
}

@app.route("/start-game", methods=("GET", "POST"))
def start_game():
    """Start game."""
    new_players = request.get_json()
    if request.method == "POST":
        game.players = []
        if len(new_players) == 2:
            game.players.append({
                'name': new_players[0],
                'id': 1
            })
            game.players.append({
                'name': new_players[1],
                'id': 2
            })
            game.current_player = 1
            game.start()
        return {
            "board": game.board,
            "firstPlayer": game.players[(game.current_player)-1]
        }

@app.route("/move", methods=("GET", "POST"))
def new_game_move():
    """Game move."""
    curr_move = request.get_json()
    if request.method == "POST":
        if curr_move:
            game.game_move(curr_move[1], curr_move[0])
        return {
            "board": game.board,
            "state": game_state_codes[game.state],
            "error": game.game_errors,
            "next": game.players[(game.current_player)-1]
        }

@app.route("/start-game-over", methods=("GET", "POST"))
def start_game_over():
    """Refresh to a new game."""
    req = request.get_json()
    if request.method == "POST":
        if req:
            game.refresh_game()

    return {
        "state": game_state_codes[game.state]
    }

