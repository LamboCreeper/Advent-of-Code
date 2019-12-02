import os

directory = os.path.dirname(os.path.realpath(__file__))
data = open("{0}/data.txt".format(directory), "r").read()

opcodes = [int(i) for i in data.split(",")]

# Part 1 uses these numbers:
opcodes[1] = 12
opcodes[2] = 2
# Part 2 uses these numbers:
# opcodes[1] = 82
# opcodes[2] = 26

for i in range(0, len(opcodes), 4):
    x = opcodes[i + 1]
    y = opcodes[i + 2]
    z = opcodes[i + 3]

    if opcodes[i] == 1:
        opcodes[z] = opcodes[x] + opcodes[y]

    if opcodes[i] == 2:
        opcodes[z] = opcodes[x] * opcodes[y]

    if opcodes[i] == 99:
        print(data)
        print("".join(str("{0},".format(opcode)) for opcode in opcodes))

        break
