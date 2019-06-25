'use strict'

const substrOccurrence = require('substr-occurrence')

module.exports = (str, checks) => {
  if (str === '') return false
  let areSubstringsOverMaximumOccurrences = false
  checks = Object.entries(checks)
  for (let i = 0, len = checks.length; i < len; i++) {
    const substring = checks[i][0]
    const allowedOccurrences = checks[i][1]
    const substringOccurrences = substrOccurrence(substring, str)
    if (substringOccurrences > allowedOccurrences) {
      areSubstringsOverMaximumOccurrences = true
      break
    }
  }
  return areSubstringsOverMaximumOccurrences
}
