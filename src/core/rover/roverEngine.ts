import {Direction, Turn, Plateau, Position} from "@/domain/rover";


const direction: Direction[] = [Direction.North, Direction.East, Direction.South, Direction.West];

const moveDelta: Record<Direction, [number, number]> = {
    [Direction.North]: [0, 1],
    [Direction.East]: [1, 0],
    [Direction.South]: [0, -1],
    [Direction.West]: [-1, 0]
}

export function getNextDirection(current: Direction, turn: Turn): Direction {
    const idx = direction.indexOf(current);
    const nextIdx = turn === Turn.Left ? (idx + 3) % 4 : (idx + 1) % 4;
    return direction[nextIdx];
}

export function getDelta(direction: Direction): [number, number] {
    return moveDelta[direction];
}

export function validateBounds(x: number, y: number, plateau: Plateau) {
    if (x < 0 || x > plateau.width || y < 0 || y > plateau.height) {
        throw new Error(`Rover out of bounds: attempted to move to (${x}, ${y})`);
    }
}

export function move(position: Position, plateau: Plateau): Position {
    const [dx, dy] = getDelta(position.direction);
    const newX = position.x + dx;
    const newY = position.y + dy;
    validateBounds(newX, newY, plateau);
    return {
        x: newX,
        y: newY,
        direction: position.direction
    };
}