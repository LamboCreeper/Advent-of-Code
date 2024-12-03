defmodule DayThree do
  def part_one(input) do
    Regex.scan(~r/mul\(\d*,\d*\)/, input)
    |> Enum.map(fn instruction ->
      [left, right] =
        instruction
        |> List.first()
        |> String.slice(4..-2//1)
        |> String.split(",")

      String.to_integer(left) * String.to_integer(right)
    end)
    |> Enum.sum()
    |> IO.inspect()
  end

  def part_two(input) do
    filtered =
      Regex.replace(~r/don't\(\).*?(do\(\)|$)/, String.replace(input, "\n", ""), "")

    part_one(filtered)
  end
end

{_, input} = File.read("./data.txt")

DayThree.part_one(input)
DayThree.part_two(input)
