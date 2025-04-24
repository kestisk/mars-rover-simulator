import {processRover} from "@/application/rover";
import {Direction} from "@/domain/rover";


describe('processRover', () => {
    it('should process full command sequence', () => {
        const start = {x: 1, y: 2, direction: Direction.North}
        const plateau = {width: 5, height: 5}
        const commands = "LMLMLMLMM";
        const result = processRover(start, commands, plateau);
        expect(result).toEqual({x: 1, y: 3, direction: Direction.North});
    });
    it('should process full command sequence', () => {
        const start = {x: 3, y: 3, direction: Direction.East}
        const plateau = {width: 5, height: 5}
        const commands = "MMRMMRMRRM";
        const result = processRover(start, commands, plateau);
        expect(result).toEqual({x: 5, y: 1, direction: Direction.East});
    })
})