import { processRover } from '@/application/rover';
import { Direction, Position, Plateau } from '@/domain/rover';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
});

const inputLines: string[] = [];

console.log('Enter input (Ctrl+D when done):');

rl.on('line', (line) => {
    inputLines.push(line.trim());
});

rl.on('close', () => {
    try {
        if (inputLines.length < 3 || (inputLines.length - 1) % 2 !== 0) {
            throw new Error('Invalid input format.');
        }

        const [maxX, maxY] = inputLines[0].split(' ').map(Number);
        const plateau: Plateau = { width: maxX, height: maxY };

        for (let i = 1; i < inputLines.length; i += 2) {
            try {
                const [xStr, yStr, dirStr] = inputLines[i].split(' ');
                const x = parseInt(xStr);
                const y = parseInt(yStr);
                const direction = dirStr as Direction;

                const start: Position = { x, y, direction };
                const commands = inputLines[i + 1];

                const result = processRover(start, commands, plateau);
                console.log(`${result.x} ${result.y} ${result.direction}`);
            } catch (err) {
                console.error(`Rover ${Math.floor(i / 2) + 1} error: ${err instanceof Error ? err.message : err}`);
            }
        }


    } catch (err) {
        console.error('Error:', err instanceof Error ? err.message : err);
    }
});