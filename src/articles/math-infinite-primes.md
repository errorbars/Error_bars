---
title: "Why the primes never run out"
dek: "Euclid's proof is more than two thousand years old and still fits in a paragraph. It also has a twist most people get wrong."
subject: math
author: Field Notes
date: 2026-10-04
image: /images/articles/math-infinite-primes.jpg
imageAlt: "Concentric golden circles and a spiral on a dark grid"
imageCaption: "Photo idea: a page from an old geometry book, or a sieve of Eratosthenes drawn by hand."
imageCredit: "Placeholder"
---

Primes get rarer as numbers grow. Between 1 and 100 there are 25 of them; between 1,000,000 and 1,000,100 there are only 6. It's natural to wonder whether they eventually stop. They don't, and Euclid showed why around 300 BCE.

## The proof

Suppose someone hands you a list that claims to contain every prime: $p_1, p_2, \ldots, p_n$. Multiply them all together and add one:

$$N = p_1 p_2 \cdots p_n + 1$$

Divide $N$ by any prime on the list and you get a remainder of exactly 1. So none of them divides $N$.

But every whole number bigger than 1 is either prime or divisible by some prime. Either $N$ is itself a prime missing from the list, or it has a prime factor missing from the list. Both ways, the list was incomplete. Since this works for any finite list, no finite list can hold them all.

## The twist

A common retelling says that $N$ is always a new prime. It isn't. Take the first six primes:

$$2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13 + 1 = 30031 = 59 \times 509$$

The number 30031 isn't prime. But its factors, 59 and 509, aren't on the list, which is all the proof needs.

## How rare do they get?

The prime number theorem, proved in 1896, says that the number of primes below a large number $x$ is roughly $x / \ln x$. Primes thin out, but slowly enough that there are always more ahead.
