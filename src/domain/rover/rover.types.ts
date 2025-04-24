import {Direction} from "@/domain/rover/rover.enum";

export interface Position {
    x: number;
    y: number;
    direction: Direction;
}

export interface Plateau {
    width: number;
    height: number;
}