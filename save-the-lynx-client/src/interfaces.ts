export interface IPlayer {
    name: string,
    id: number
}

export interface IBoardSpaceProp {
    searched: number;
    state: number;
    coordinate: number[];
    coordinateClicked: (chosenSpace: number[]) => void;
    // className: string;
}
