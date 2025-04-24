import {Direction, Turn} from "@/domain/rover";
import {getNextDirection, move} from "@/core/rover/roverEngine";

describe('getNextDirection', () => {
    const cases: [Direction, Turn, Direction][] = [
        [Direction.North, Turn.Left, Direction.West],
        [Direction.North, Turn.Right, Direction.East],
        [Direction.East, Turn.Left, Direction.North],
        [Direction.East, Turn.Right, Direction.South],
        [Direction.South, Turn.Left, Direction.East],
        [Direction.South, Turn.Right, Direction.West],
        [Direction.West, Turn.Left, Direction.South],
        [Direction.West, Turn.Right, Direction.North],
    ];
    it.each(cases)('should return %s when given %s and %s', (from, turn, expected) => {
        expect(getNextDirection(from, turn)).toEqual(expected);
    })
})

describe('move', () => {
    const plateau = {width: 5, height: 5};

    it('should move rover to the north', () => {
        const position = {x: 2, y: 2, direction: Direction.North};
        expect(move(position, plateau)).toEqual({x: 2, y: 3, direction: Direction.North});
    })
    it('should move rover to the east', () => {
        const position = {x: 2, y: 2, direction: Direction.East};
        expect(move(position, plateau)).toEqual({x: 3, y: 2, direction: Direction.East});
    })
    it('should move rover to the south', () => {
        const position = {x: 2, y: 2, direction: Direction.South};
        expect(move(position, plateau)).toEqual({x: 2, y: 1, direction: Direction.South});
    })
    it('should move rover to the west', () => {
        const position = {x: 2, y: 2, direction: Direction.West};
        expect(move(position, plateau)).toEqual({x: 1, y: 2, direction: Direction.West});
    })
    it('should throw move error when moving out of bounds', () => {
        const position = {x: 0, y: 0, direction: Direction.West};
        expect(() => move(position, plateau)).toThrow('Rover out of bounds: attempted to move to (-1, 0)')
    })
})