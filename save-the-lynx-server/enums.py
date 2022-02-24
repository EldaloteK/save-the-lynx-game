from enum import Enum

class State(Enum):
    setup = "setup"
    started = "started"
    victory = "victory"
    defeat = "defeat"