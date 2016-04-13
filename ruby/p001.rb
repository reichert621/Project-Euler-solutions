#
# Solution to Project Euler problem 1
# by Alex Reichert
#
# https://github.com/reichert621/Project-Euler-solutions
#

def compute
  (0...1000).reduce { |sum, n| (n % 3 == 0 || n % 5 == 0) ? sum + n : sum }
end
