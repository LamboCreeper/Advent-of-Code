"""
Fuel required to launch a given module is based on its mass.
Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

What is the sum of the fuel requirements for all of the modules on your spacecraft?
"""

import os

directory = os.path.dirname(os.path.realpath(__file__))
data = open("{0}/data.txt".format(directory), "r").read()

masses = data.split("\n")


def get_fuel(mass):
    """ Gets the total amount of fuel required. """

    return int(mass / 3) - 2


total_fuel = 0

for mass in masses:
    mass = int(mass)
    fuel = get_fuel(mass)

    total_fuel = total_fuel + fuel

print("Total Fuel Requirement: {0}".format(total_fuel))
