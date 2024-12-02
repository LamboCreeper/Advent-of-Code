use std::fs;

fn main() {
    let path = "data.txt";
    let contents = fs::read_to_string(path).expect("");
    let games = contents.split("\n");

    for game in games {
        let id_to_games: Vec<&str> = contents.split(":").collect();
        let prefix_to_id: Vec<&str> = id_to_games.split(" ");
        let id = prefix_to_id[0];
        let games = id_to_games.split(";");

        println!("{id}");
    }
}
