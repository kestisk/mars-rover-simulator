import {Turn} from "@/domain/rover";
import {Plateau, Position} from "@/domain/rover";
import {getNextDirection, move} from "@/core/rover/roverEngine";

export type RoverCommand = Turn | 'M'


function isTurn(command: RoverCommand): command is Turn {
    return command === Turn.Left || command === Turn.Right;
}

function isMove(command: RoverCommand): command is 'M' {
    return command === 'M';
}

export function processRover(
    start: Position,
    commandString: string,
    plateau: Plateau
): Position {
    let currentPosition = {...start};
    const commands = commandString.split('') as RoverCommand[];

    for (const cmd of commands) {
        if (isTurn(cmd)) {
            currentPosition.direction = getNextDirection(currentPosition.direction, cmd);
        } else if (isMove(cmd)) {
            currentPosition = move(currentPosition, plateau)
        } else {
            throw new Error(`Invalid command '${cmd}'`);
        }
    }
    return currentPosition;
}