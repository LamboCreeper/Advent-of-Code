const fs = require("fs");

fs.readFile("./data.txt", "utf-8", (error, data) => {
	console.log("Part 1");

	if (error) {
		return console.error(error.message);
	}

	const numbers = data.split("\n");
	let count = 0;

	for (let i = 0; i < numbers.length; i++) {
		if (parseInt(numbers[i]) > parseInt(numbers[i - 1])) {
			count++;
		}
	}

	console.log(count);
});



fs.readFile("./data.txt", "utf-8", (error, data) => {
	console.log("Part 2");

	if (error) {
		return console.error(error.message);
	}

	const numbers = data.split("\n");
	let count = 0;
	let slidingWindows = [];

	for (let i = 0; i < numbers.length; i++) {
		slidingWindows.push(
			parseInt(numbers[i]) + parseInt(numbers[i - 1]) + parseInt(numbers[i - 2])
		);
	}

	for (let i = 0; i < numbers.length; i++) {
		if (slidingWindows[i] > slidingWindows[i - 1]) {
			count++;
		}
	}

	console.log(count);
});