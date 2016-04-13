#
# Solution to Project Euler problem 2
# by Alex Reichert
#
# https://github.com/reichert621/Project-Euler-solutions
#

def compute
  sum = 0
  x = 1
  y = 2

  while (x < 4000000)
    sum += x if x.even?

    x, y = y, x + y
  end

  sum
end
