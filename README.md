# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mpizzaca/lotide`

**Require it:**

`const _ = require('@mpizzaca/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: returns an object containing all individual characters and how many times they occurred in the string
* `countOnly(arr[], object)`: counts occurrences of items in the arg1 array if they are present (and truthy) in the arg2 object 
* `eqArrays(arr1[], arr2[])`: returns if two arrays are deeply equal
* `eqObjects(obj1, obj2)`: returns if two objects are deeply equal
* `findKey(obj, callback)`: returns the first key in an object that satisfies the provided callback
* `findKeyByValue(obj, value)`: returns the first key in an object that matches the provided value
* `flatten(arr[])`: returns a one dimensional array containing all elements from provided (nested) array
* `head(arr[])`: returns the first element from the provided array
* `letterPositions(string)`: returns an object containing all unique characters and their index in the string
* `map(arr[], callback)`: returns the input array with all elements modified as per the provided callback
* `middle(arr[])`: returns the one (if odd number of elements) or two (if even number of elements) middle elements of the provided array
* `tail(arr[])`: returns a new array with all elements except the first
* `takeUntil(arr[], callback)`: returns a new array starting from the provided array until the callback returns true
* `without(arr[], itemsToRemove[])`: returns a new array without the items specified in the second argument