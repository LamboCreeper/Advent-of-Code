use std::fs;
use std::convert::TryInto;

fn part_one() {
    let path = "data.txt";
    let contents = fs::read_to_string(path).expect("");
    let lines = contents.split("\n");
    let mut total = 0;

    for line in lines {
        let mut values = Vec::new();

        for char in line.chars() {
            if char.is_digit(10) {
                values.push(char.to_digit(10).unwrap());
            }
        }

        let first = values[0];
        let last = values[values.len() - 1];
        let calibration = [first.to_string(), last.to_string()].join("");

        total += calibration.parse::<i32>().unwrap();
    }

    println!("Total Calibration: {total}");
}

fn part_two() {
    let path = "data.txt";
    let contents = fs::read_to_string(path).expect("");
    let lines = contents.split("\n");
    let mut total = 0;

    let mapping = vec![
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ];

    for line in lines {
        let mut values = Vec::new();
        let mut formatted = String::from(line);

        for word in &mapping {
            let str = word.to_string();
            let index = mapping.iter().position(|&r| r == str.as_str()).unwrap().to_string();

            let first = word.chars().nth(0).unwrap().to_string();
            let last = word.chars().nth(word.len() - 1).unwrap().to_string();
            let new = [first.as_str(), index.as_str(), last.as_str()].join("");

            formatted = formatted.replace(word, &new);
        }

        for char in formatted.chars() {
            if char.is_digit(10) {
                values.push(char.to_digit(10).unwrap().try_into().unwrap());
            }
        }

        let first: i32 = values[0];
        let last: i32 = values[values.len() - 1];
        let calibration = [first.to_string(), last.to_string()].join("");

        total += calibration.parse::<i32>().unwrap();
    }

    println!("Total Calibration: {total}");
}

fn main() {
    part_one();
    part_two();
}
