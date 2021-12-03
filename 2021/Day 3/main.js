const fs = require("fs");

fs.readFile("./data.txt", "utf-8", (error, data) => {
    console.log("Part 1");

    if (error) return console.error(error.message);

    const rows = data.trim().split("\n");
    const counts = [];

    rows.forEach((row, rowId) => {
        row.split("").forEach((char, i) => {
            if (!counts[i]) {
                counts[i] = {
                    0: 0,
                    1: 0,
                };
            }

            counts[i][char]++;
        });
    });

    let gammaRateStr = '';
    let epsilonRateStr = '';

    counts.forEach(column => {
        if (column['0'] > column['1']) {
            gammaRateStr = `${gammaRateStr}0`;
            epsilonRateStr = `${epsilonRateStr}1`;
        } else {
            gammaRateStr = `${gammaRateStr}1`;
            epsilonRateStr = `${epsilonRateStr}0`;
        }
    });

    const gammaRate = parseInt(gammaRateStr, 2);
    const epsilonRate = parseInt(epsilonRateStr, 2);
    const power = gammaRate * epsilonRate;

    console.log(power);
});

fs.readFile("./data.txt", "utf-8", (error, data) => {
    console.log("Part 2");

    if (error) return console.error(error.message);

    let remainingOxygen = data.trim().split("\n");
    let remainingCO2 = data.trim().split("\n");

    const LENGTH = remainingOxygen[0].length;

    for (let i = 0; i < LENGTH; i++) {
        let countsO2 = { '0': 0, '1': 0 };
        let countsCO2 = { '0': 0, '1': 0 };

        remainingOxygen.forEach(row => {
            if (row.charAt(i) === '0') {
                countsO2['0']++;
            } else {
                countsO2['1']++;
            }
        });

        remainingCO2.forEach(row => {
            if (row.charAt(i) === '0') {
                countsCO2['0']++;
            } else {
                countsCO2['1']++;
            }
        });

        let moreCommon;
        let leastCommon;

        if (countsO2['0'] === countsO2['1']) {
            moreCommon = '1';
        } else if (countsO2['0'] > countsO2['1']) {
            moreCommon = '0';
        } else if (countsO2['1'] > countsO2['0']) {
            moreCommon = '1';
        }

        if (countsCO2['0'] === countsCO2['1']) {
            leastCommon = '0';
        } else if (countsCO2['0'] > countsCO2['1']) {
            leastCommon = '1';
        } else if (countsCO2['1'] > countsCO2['0']) {
            leastCommon = '0';
        }

        remainingOxygen = remainingOxygen.length === 1 ? remainingOxygen : remainingOxygen.filter(row => row.charAt(i) === moreCommon);
        remainingCO2 = remainingCO2.length === 1 ? remainingCO2 : remainingCO2.filter(row => row.charAt(i) === leastCommon);
    }

    const oxygen = parseInt(remainingOxygen[0], 2);
    const co2 = parseInt(remainingCO2[0], 2);

    console.log(oxygen * co2);
});