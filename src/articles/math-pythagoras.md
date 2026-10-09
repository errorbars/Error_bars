---
title: "The Pythagorean theorem, proven without words"
dek: "Rearrange four identical triangles inside a square and the theorem falls out on its own, no algebra required."
subject: math
author: Field Notes
date: 2026-09-18
image: /images/articles/math-pythagoras.jpg
imageAlt: "A glowing right triangle and concentric circles on a grid"
imageCaption: "Photo idea: a hand-drawn proof on a chalkboard or graph paper."
imageCredit: "Placeholder"
---

For any right triangle with shorter sides $a$ and $b$ and longest side $c$:

$$a^2 + b^2 = c^2$$

Most of us memorise it in school. Far fewer see why it has to be true, and the best explanation is a picture.

## The rearrangement

Draw a large square with sides of length $a + b$. Inside it, place four copies of your right triangle so that each one sits in a corner, with its hypotenuse facing inward. The space left in the middle is a tilted square with side $c$, so its area is $c^2$.

Now slide the same four triangles around so they pair up into two rectangles, tucked into opposite corners of the big square. The leftover space is now two separate squares: one with side $a$ and one with side $b$.

The big square didn't change, and neither did the four triangles. So the leftover space must be the same both times:

$$c^2 = a^2 + b^2$$

## Checking it with algebra

If you'd like symbols to agree with the picture, add up the first arrangement. The big square's area equals the tilted square plus four triangles:

$$(a+b)^2 = c^2 + 4 \cdot \tfrac{1}{2}ab$$

Expand the left side to $a^2 + 2ab + b^2$, cancel the $2ab$ on both sides, and you're done.

## Older than Pythagoras

A Babylonian clay tablet known as Plimpton 322, written around 1800 BCE, lists sets of whole numbers that fit this relationship, more than a thousand years before Pythagoras was born. His name stuck, but the idea was already old.
