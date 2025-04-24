# Mars Rover Simulator

CLI-based Mars Rover challenge implemented in TypeScript using Clean Architecture principles and full unit test coverage.

## 📦 Tech Stack
- TypeScript
- Node.js
- Jest (unit testing)
- ts-node (runtime)

## 🚀 How to Run

### Install Dependencies
```bash
npm install
```

### Run the CLI
```bash
npm start
```

Then enter the input in terminal manually (end with Ctrl+D):
```
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
2 2 N
MMMMRML
1 1 E
MMLM
```

### Expected Output:
```
1 3 N
5 1 E
Rover 3 error: Rover out of bounds: attempted to move to (2, 6)
3 2 N
```

### Or use file as input
Create a file called `input.txt` in the project root with the following content:

```
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
2 2 N
MMMMRML
1 1 E
MMLM
```

Then run:
```bash
npm start < input.txt
```

## 🧪 Run Tests
```bash
npm test
```

## ✅ Features
- Fully testable logic with Jest
- CLI input support via `readline`
- Handles multiple rovers sequentially
- Throws and handles out-of-bounds errors
- Clean, modular project structure

---

Made with ❤️ by Sezer Kesti