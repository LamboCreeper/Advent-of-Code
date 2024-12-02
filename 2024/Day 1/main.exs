defmodule DayOne do
  defp get_left_and_right(input) do
    input
    |> String.trim()
    |> String.split("\n")
    |> Enum.reduce(
      {[], []},
      fn row, {left, right} ->
        [l, r] = String.split(row, "   ")

        {
          [String.to_integer(l) | left],
          [String.to_integer(r) | right]
        }
      end
    )
  end

  def part_one(input) do
    [left, right] = Tuple.to_list(get_left_and_right(input))

    sortedLeft = Enum.sort(left)
    sortedRight = Enum.sort(right)

    distance =
      Enum.reduce(
        sortedLeft,
        {0, 0},
        fn l, {acc, index} ->
          r = Enum.at(sortedRight, index)
          d = if l > r, do: l - r, else: r - l

          distance = acc + d

          {distance, index + 1}
        end
      )

    IO.inspect(distance)
  end

  def part_two(input) do
    [left, right] = Tuple.to_list(get_left_and_right(input))

    similarity =
      Enum.reduce(
        left,
        {0, 0},
        fn l, {acc, index} ->
          s = l * Enum.count(right, fn i -> i == l end)

          similarity = acc + s

          {similarity, index + 1}
        end
      )

    IO.inspect(similarity)
  end
end

{_, input} = File.read("./data.txt")

DayOne.part_one(input)
DayOne.part_two(input)
