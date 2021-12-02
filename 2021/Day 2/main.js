const fs = require("fs");

fs.readFile("./data.txt", "utf-8", (error, data) => {
	console.log("Part 1");

	if (error) return console.error(error.message);

	const instructions = data.split("\n");
	let horizontal = 0;
	let depth = 0;

	instructions.forEach(instruction => {
		const [keyword, value] = instruction.split(" ");

		switch (keyword) {
			case "forward":
				horizontal += Number(value);
				break;
			case "down":
				depth += Number(value);
				break;
			case "up":
				depth -= Number(value);
				break;
		}
	});

	console.log(`depth: ${depth} horizontal: ${horizontal}`);
	console.log(depth * horizontal);
});

fs.readFile("./data.txt", "utf-8", (error, data) => {
	console.log("Part 2");

	if (error) return console.error(error.message);

	const instructions = data.split("\n");
	let horizontal = 0;
	let depth = 0;
	let aim = 0;

	instructions.forEach(instruction => {
		const [keyword, value] = instruction.split(" ");

		switch (keyword) {
			case "forward":
				horizontal += Number(value);
				depth += aim * Number(value);
				break;
			case "down":
				aim += Number(value);
				break;
			case "up":
				aim -= Number(value);
				break;
		}
	});

	console.log(`depth: ${depth} horizontal: ${horizontal}`);
	console.log(depth * horizontal);
});