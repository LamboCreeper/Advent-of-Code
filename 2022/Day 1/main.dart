import "dart:io";

Future<void> main() async {
  File data = new File("./data.txt");
  List<String> lines = await data.readAsLines();

  List<List<int>> values = [[]];

  int valuesIndex = 0;

  lines.forEach((line) {
    if (line == "") {
      values.add([]);
      valuesIndex += 1;
      return;
    }

    values[valuesIndex].add(int.parse(line));
  });

  List<int> totalValues = values.map((group) => group.reduce((value, element) => value + element)).toList();

  totalValues.sort();

  List<int> reversed = totalValues.reversed.toList();
  int highest = reversed[0];

  print("Highest: $highest");
  
  int middle = reversed[1];
  int low = reversed[2];
  int total = highest + middle + low;

  print("Top Three: $total");
}