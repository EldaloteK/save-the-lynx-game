export interface IPlayer {
    name: string,
    id: number
};

export interface IBoardSpaceProp {
    searched: number;
    coordinate: number[];
    coordinateClicked: Function;
    className: string;
};
