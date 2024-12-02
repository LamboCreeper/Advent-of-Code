defmodule DayTwo do
  defp get_row_values(input) do
    input
    |> String.trim()
    |> String.split("\n")
    |> Enum.map(fn row ->
      row
      |> String.split(" ")
      |> Enum.map(fn value -> value |> String.to_integer() end)
    end)
  end

  defp get_level_differences(values) do
    [_ | level_differences] =
      values
      |> Enum.with_index()
      |> Enum.map(fn {value, index} ->
        if index != 0 do
          Enum.at(values, index - 1) - value
        else
          nil
        end
      end)

    level_differences
  end

  defp all_positive_or_negative(input) do
    p = Enum.all?(input, fn x -> x > 0 end)
    n = Enum.all?(input, fn x -> x < 0 end)

    p || n
  end

  def part_one(input) do
    safe =
      Enum.map(
        get_row_values(input),
        fn row ->
          level_differences = get_level_differences(row)

          if all_positive_or_negative(level_differences) do
            Enum.all?(
              Enum.map(level_differences, fn d -> abs(d) end),
              fn d -> d == nil || (d >= 1 && d <= 3) end
            )
          else
            false
          end
        end
      )

    IO.inspect(Enum.count(safe, fn s -> s == true end))
  end

  defp get_alternate_rows(row) do
    row
    |> Enum.with_index()
    |> Enum.map(fn {_, index} -> List.delete_at(row, index) end)
  end

  def part_two(input) do
    safe =
      Enum.map(
        get_row_values(input),
        fn row ->
          Enum.map(
            [row | get_alternate_rows(row)],
            fn alt_r ->
              level_differences = get_level_differences(alt_r)

              if all_positive_or_negative(level_differences) do
                Enum.all?(
                  Enum.map(level_differences, fn d -> abs(d) end),
                  fn d -> d == nil || (d >= 1 && d <= 3) end
                )
              else
                false
              end
            end
          )
        end
      )

    IO.inspect(Enum.count(safe, fn s -> Enum.any?(s, fn x -> x == true end) end))
  end
end

{_, input} = File.read("./data.txt")

DayTwo.part_one(input)
DayTwo.part_two(input)
