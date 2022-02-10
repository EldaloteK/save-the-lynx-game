from enums import State
import random

class Game():
    def __init__(self):
        self.players = []
        self.current_player = "Player ?"
        self.state = State.started
        self.board = []
        self.all_coordinates = {}
        self.lynx_location = 0
        self.board_length = 0
        self.game_errors = ""

    def json_fields(self):
        return [
            "players",
            "current_player",
            "state",
            "board"
        ]
    
    def print_board(self):
        """Print the board"""
        print("")
        k = [*range(0, len(self.board), 1)]
        print('  ', k)
        print('')
        for i,j in enumerate(self.board):
            print(i,'',j)
        print("")

    def find_all_neighbors(self, allCoords, line_index, position):
        """Find all neighbors based on current move"""
        surrounding_coords = []

        for (k,v) in [(line_index-1, position), (line_index+1, position), (line_index, position-1), (line_index, position+1)]:
            if ((k,v) in allCoords) and allCoords[(k,v)] == allCoords[(line_index,position)]:
                surrounding_coords.append((k,v))

        for (k1,v1) in surrounding_coords:
            for (k2,v2) in [(k1-1, v1), (k1+1, v1), (k1, v1-1), (k1, v1+1)]:
                if (k2,v2) != (line_index, position) and ((k2,v2) in allCoords and allCoords[(k2,v2)] == allCoords[(line_index,position)]) and (k2,v2) not in surrounding_coords:
                    surrounding_coords.append((k2,v2))

        return surrounding_coords

    def start(self):
        self.state = State.started

        height, width = (4,4)
        pieces = [4,3,2,1]
        self.board = [[random.choice(pieces) for i in range(width)] for j in range(height)]
        self.board_length = len(self.board[0])
        self.all_coordinates = {(i, c):self.board[i][c] for i in range(len(self.board)) for c in range(self.board_length)}
        self.lynx_location = (random.choice(range(1,height)), random.choice(range(1,width)))
        print(self.lynx_location)
        self.print_board()
    
    def game_move(self, move_y, move_x ):
        try:
            if ((move_x, move_y) == self.lynx_location):
                self.game_errors = ""
                print('You won!')
                print('Animal Location: ', self.lynx_location)
                self.board[move_x][move_y] = -1
                self.state = State.victory

            if ((move_x, move_y) in self.all_coordinates and (move_x, move_y) != self.lynx_location):
                self.game_errors = ""
                self.board[move_x][move_y] = 0
                neighbors = self.find_all_neighbors(self.all_coordinates, move_x, move_y)

                for (n1,n2) in neighbors:
                    if (n1,n2) == self.lynx_location:
                        print('You won!!')
                        print('Animal Location: ', self.lynx_location)
                        self.board[n1][n2] = -1
                        self.state = State.victory
                    else:
                        self.board[n1][n2] = 0

                self.print_board()
            else:
                self.game_errors = "Not a valid move"

        except ValueError:
            self.game_errors = "Not a valid move"