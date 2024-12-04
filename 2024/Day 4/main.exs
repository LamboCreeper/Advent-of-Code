defmodule DayFour do
  defp parse_input(input) do
    input
    |> String.trim()
    |> String.split("\n")
    |> Enum.map(fn row -> String.split(row, "") end)
  end

  defp get_letter(_, x, y) when x < 0 or y < 0 do
    nil
  end

  defp get_letter(word_search, x, y) do
    row = Enum.at(word_search, x)

    if row != nil do
      Enum.at(row, y)
    else
      nil
    end
  end

  defp check_for_m(word_search, x, y) do
    # [R, L, T, B, TR, BR, BL, BR]
    [
      {1, 0},
      {-1, 0},
      {0, 1},
      {0, -1},
      {1, 1},
      {1, -1},
      {-1, -1},
      {-1, 1}
    ]
    |> Enum.filter(fn {next_x_dir, next_y_dir} ->
      case get_letter(word_search, next_x_dir + x, next_y_dir + y) do
        "M" -> true
        _ -> false
      end
    end)
    |> Enum.map(fn {next_x_dir, next_y_dir} ->
      potential_a =
        get_letter(word_search, next_x_dir + x + next_x_dir, next_y_dir + y + next_y_dir)

      potential_s =
        get_letter(
          word_search,
          next_x_dir + x + next_x_dir + next_x_dir,
          next_y_dir + y + next_y_dir + next_y_dir
        )

      if potential_a == "A" && potential_s == "S" do
        true
      else
        false
      end
    end)
  end

  def part_one(input) do
    word_search = parse_input(input)

    word_search
    |> Enum.with_index()
    |> Enum.map(fn {row, x} ->
      row
      |> Enum.with_index()
      |> Enum.map(fn {letter, y} ->
        if letter == "X" do
          check_for_m(word_search, x, y)
        end
      end)
    end)
    |> List.flatten()
    |> Enum.count(fn match -> match == true end)
    |> IO.inspect()
  end
end

{_, input} = File.read("./data.txt")

DayFour.part_one(input)
