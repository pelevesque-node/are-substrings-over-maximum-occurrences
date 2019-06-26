[![Build Status](https://travis-ci.org/pelevesque/are-substrings-over-maximum-occurrences.svg?branch=master)](https://travis-ci.org/pelevesque/are-substrings-over-maximum-occurrences)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/are-substrings-over-maximum-occurrences/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/are-substrings-over-maximum-occurrences?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# are-substrings-over-maximum-occurrences

Checks if substrings are over maximum occurrences in a string.

## Node Repository

https://www.npmjs.com/package/@pelevesque/are-substrings-over-maximum-occurrences

@related:  
https://github.com/pelevesque/are-substrings-under-minimum-occurrences  
https://github.com/pelevesque/are-substrings-under-minimum-density  
https://github.com/pelevesque/are-substrings-over-maximum-density   

## Installation

`npm install @pelevesque/are-substrings-over-maximum-occurrences`

## Tests

### Standard Style & Unit Tests

`npm test`

### Unit Tests & Coverage

`npm run cover`

## Usage

### Requiring

```js
const areSubstringsOverMaximumOccurrences = require('@pelevesque/are-substrings-over-maximum-occurrences')
```

### One Check

```js
// over occurrences returns true
// 'a' has 4 occurrences, more than the specified limit of 2
const str = 'aaaabbbb'
const checks = { 'a': 2 }
const result = areSubstringsOverMaximumOccurrences(str, checks)
// result === true
```

```js
// equal to occurrences returns false
const str = 'aaaabbbb'
const checks = { 'a': 4 }
const result = areSubstringsOverMaximumOccurrences(str, checks)
// result === false
```

```js
// under occurrences returns false
const str = 'a man, a hog, and another hog'
const checks = { 'hog': 1 }
const result = areSubstringsOverMaximumOccurrences(str, checks)
// result === false
```

### Multiple Checks

```js
// when one is over occurrences, it returns true ('a' is over 2)
const str = 'aaaabbbb'
const checks = { 'a': 2, 'b': 8, 'c': 2 }
const result = areSubstringsOverMaximumOccurrences(str, checks)
// result === true
```

```js
// when all are under or equal to occurrences, it returns false
const str = 'a man, a hog, and another hog'
const checks = { 'a': 8, 'hog': 8, 'c': 8 }
const result = areSubstringsOverMaximumOccurrences(str, checks)
// result === false
```
