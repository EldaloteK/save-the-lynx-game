# Save The Lynx Game

Save The Lynx Game is a two-player board game created to raise awarenesss of and 
depict the restoration of the Canadian lynx habitat. With this theme in mind,
my goal was to learn the ReactJS framework along with brushing up on my Flask knowledge.
During this years Advent Of Code, I enjoyed utilizing the flood-fill algorithm
to complete several of the questions. That is also what enlightened me to
include the algorithm in this project.

## _A project to delve into:_

- React and Flask frameworks.
- Utilization of the flood-fill algorithm.
- Migrating a project from Javascript to Typescript.

## _Game overview:_

Beginning with two players, each will input and submit their name.
Once started, the game board is displayed as a 10x10 grid of numbers aka plots of land.
The player to go first is displayed at the top of the board. Turns are alternated between players.
A turn consists of a player selecting an unselected square plot on the board. 
By selecting this plot of land, the player chooses to restore the habitat with trees native to
that area. All four-connected adjacent numbers equal to the original selected number will also be restored. 
The area continues to be restored until none of the four-connected neighbors are of the same original number. 
The first player to restore the habitat of the lynx wins.