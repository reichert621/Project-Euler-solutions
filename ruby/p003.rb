#
# Solution to Project Euler problem 3
# by Alex Reichert
#
# https://github.com/reichert621/Project-Euler-solutions
#

def compute
  n = 600851475143

  while true
    p = smallest_prime_factor(n)

    if p < n
      n /= p
    else
      return n
    end
  end
end

def smallest_prime_factor(n)
  limit = Math.sqrt(n).floor

  (2..limit).each { |i| return i if n % i == 0 }

  return n
end
