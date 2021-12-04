const fs = require("fs");

function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

fs.readFile("./data.txt", "utf-8", (error, data) => {
    console.log("Part 1");

    if (error) return console.error(error.message);

    const rows = data.split("\n");
    const randomNumbers = rows[0].split(",");
    const boardData = rows.filter(row => row !== "");
    let prev = 0;
    let boards = [];
    let checker = [];

    boardData.shift();

    for (let i = 0; i < boardData.length + 1; i += 5) {
        if (i === 0) continue;
        let boardRows = [];
        let checkerForRow = [];

        for (let j = 5; j > 0; j--) {
            boardRows.push(
                boardData[i - j]
                    .split(" ")
                    .filter(number => number !== "")
            );

            checkerForRow.push([false, false, false, false, false]);
        }

        boards.push(boardRows);
        checker.push(checkerForRow);

        prev = i;
    }

    randomNumbers.forEach(number => {
        boards.forEach((board, boardIndex) => {
            board.forEach((row, rowIndex) => {
                if (row.includes(number)) {
                    checker[boardIndex][rowIndex][row.indexOf(number)] = true;
                    let colValues = [];
                    let rowValues = [];

                    for (let i = 0; i < 5; i++) {
                        colValues.push(checker[boardIndex][rowIndex][i]);
                        rowValues.push(checker[boardIndex][i][row.indexOf(number)]);
                    }

                    if (colValues.every(col => col === true) || rowValues.every(row => row === true)) {
                        console.log(`WINNING BOARD: ` + boardIndex);
                        let sum = 0;

                        for (let i = 0; i < 5; i++) {
                            for (let j = 0; j < 5; j++) {
                                if (checker[boardIndex][i][j] === false) {
                                    sum += Number(boards[boardIndex][i][j]);
                                }
                            }
                        }

                        console.log(sum * Number(number));

                        process.exit(0);
                    }
                }
            })
        });
    });
});

fs.readFile("./data.txt", "utf-8", (error, data) => {
    console.log("Part 2");

    if (error) return console.error(error.message);

    const rows = data.split("\n");
    const randomNumbers = rows[0].split(",");
    const boardData = rows.filter(row => row !== "");
    let prev = 0;
    let boards = [];
    let checker = [];

    boardData.shift();

    for (let i = 0; i < boardData.length + 1; i += 5) {
        if (i === 0) continue;
        let boardRows = [];
        let checkerForRow = [];

        for (let j = 5; j > 0; j--) {
            boardRows.push(
                boardData[i - j]
                    .split(" ")
                    .filter(number => number !== "")
            );

            checkerForRow.push([false, false, false, false, false]);
        }

        boards.push(boardRows);
        checker.push(checkerForRow);

        prev = i;
    }

    let winningBoards = {};

    randomNumbers.forEach(number => {
        boards.forEach((board, boardIndex) => {
            board.forEach((row, rowIndex) => {
                if (row.includes(number)) {
                    checker[boardIndex][rowIndex][row.indexOf(number)] = true;
                    let colValues = [];
                    let rowValues = [];

                    for (let i = 0; i < 5; i++) {
                        colValues.push(checker[boardIndex][rowIndex][i]);
                        rowValues.push(checker[boardIndex][i][row.indexOf(number)]);
                    }

                    if ((colValues.every(col => col === true) || rowValues.every(row => row === true)) && !winningBoards[boardIndex]) {
                        let sum = 0;

                        for (let i = 0; i < 5; i++) {
                            for (let j = 0; j < 5; j++) {
                                if (checker[boardIndex][i][j] === false) {
                                    sum += Number(boards[boardIndex][i][j]);
                                }
                            }
                        }

                        winningBoards[boardIndex] = sum * Number(number);

                        if (Object.values(winningBoards).length === boards.length) {
                            console.log('WINNING BOARD: ' + sum * Number(number));
                        }
                    }
                }
            })
        });
    });

});