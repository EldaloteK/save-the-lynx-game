from flask import Flask, jsonify, request
from game import Game
from enums import State

app = Flask(__name__)

game = Game()

game_state_codes = {
    State.started: 1, 
    State.victory: 2, 
    State.defeat: 3
}
# player = Player()

# @app.route("/player")
# def get_current_player():
#     """Get current player in game."""
#     return jsonify(
#         player=game.current_player
#     )

@app.route("/first-player", methods=("POST",))
def set_starting_player():
    """Set the player to start the game."""
    first_player = request.get_json()
    if request.method == "POST":
        print(first_player)
        game.current_player = first_player
        game.players.append({
            'name': first_player,
            'id': 1,
            'current_move': (0,0)
        })
        return "Starting player set"

@app.route("/second-player", methods=("GET", "POST"))
def set_second_player():
    """Set the second player."""
    second_player = request.get_json()
    if request.method == "POST":
        print(second_player)
        game.players.append({
            'name': second_player,
            'id': 2,
            'current_move': (0,0)
        })
        return "Second player set"

@app.route("/start-game", methods=("GET", "POST"))
def start_game():
    """Start game."""
    start_game = request.get_json()
    if request.method == "POST":
        if start_game:
            game.start()
            print(game.board)
        return {"board": game.board}

@app.route("/move", methods=("GET", "POST"))
def test_move():
    """Test move."""
    curr_move = request.get_json()
    if request.method == "POST":
        if curr_move:
            game.game_move(curr_move[1], curr_move[0])
        return {
            "board": game.board,
            "state": game_state_codes[game.state],
            "error": game.game_errors
        }