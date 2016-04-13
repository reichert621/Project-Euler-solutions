; Solution to Project Euler problem 1
; by Alex Reichert

; https://github.com/reichert621/Project-Euler-solutions

(defn factor-of? [f n]
  (zero? (rem n f)))

(defn sum [s]
  (reduce + s))

(defn has-factors-in? [n coll]
  (some #(factor-of? % n) coll))

(defn compute []
  (sum (filter #(has-factors-in? % [3 5]) (range 1000))))
