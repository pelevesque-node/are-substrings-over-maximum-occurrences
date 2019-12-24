/* global describe, it */
'use strict'

const expect = require('chai').expect
const areSubstringsOverMaximumOccurrences = require('../index')

describe('#areSubstringsOverMaximumOccurrences()', () => {
  describe('empty string', () => {
    it('should return false with an empty check', () => {
      const str = ''
      const checks = {}
      const result = areSubstringsOverMaximumOccurrences(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false with a check with maximum === 0', () => {
      const str = ''
      const checks = { a: 0 }
      const result = areSubstringsOverMaximumOccurrences(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false with a check with maximum === 1', () => {
      const str = ''
      const checks = { a: 1 }
      const result = areSubstringsOverMaximumOccurrences(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })
  })

  describe('single character substring', () => {
    it('should return true when over maximum', () => {
      const str = 'aaaabbbb'
      const checks = { a: 1 }
      const result = areSubstringsOverMaximumOccurrences(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return false when equal to maximum', () => {
      const str = 'aaaabbbb'
      const checks = { a: 4 }
      const result = areSubstringsOverMaximumOccurrences(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false when under maximum', () => {
      const str = 'aaaabbbb'
      const checks = { a: 8 }
      const result = areSubstringsOverMaximumOccurrences(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })
  })

  describe('multi character substring', () => {
    it('should return true when over maximum', () => {
      const str = 'aaaabbbbaaaabbbb'
      const checks = { aaaa: 1 }
      const result = areSubstringsOverMaximumOccurrences(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return false when equal to maximum', () => {
      const str = 'aaaabbbbaaaabbbb'
      const checks = { aaaa: 2 }
      const result = areSubstringsOverMaximumOccurrences(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false when under maximum', () => {
      const str = 'aaaabbbbaaaabbbb'
      const checks = { aaaa: 4 }
      const result = areSubstringsOverMaximumOccurrences(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })
  })

  describe('single character substrings', () => {
    it('should return true with many over maximum', () => {
      const str = 'aaaabbbbccccdddd'
      const checks = {
        a: 1,
        b: 1,
        c: 1
      }
      const result = areSubstringsOverMaximumOccurrences(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return true with some over maximum', () => {
      const str = 'aaaabbbbccccdddd'
      const checks = {
        a: 1,
        b: 8,
        c: 1
      }
      const result = areSubstringsOverMaximumOccurrences(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return false with many equal to maximum', () => {
      const str = 'aaaabbbbccccdddd'
      const checks = {
        a: 4,
        b: 4,
        c: 4,
        d: 4
      }
      const result = areSubstringsOverMaximumOccurrences(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false with many under maximum', () => {
      const str = 'aaaabbbbccccdddd'
      const checks = {
        a: 8,
        b: 8,
        c: 8,
        d: 8
      }
      const result = areSubstringsOverMaximumOccurrences(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })
  })

  describe('multi character substrings', () => {
    it('should return true with many over maximum', () => {
      const str = 'aaaabbbbccccddddaaaabbbbccccdddd'
      const checks = {
        aaaa: 1,
        bbbb: 1,
        cccc: 1
      }
      const result = areSubstringsOverMaximumOccurrences(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return true with some over maximum', () => {
      const str = 'aaaabbbbccccddddaaaabbbbccccdddd'
      const checks = {
        aaaa: 1,
        bbbb: 8,
        cccc: 1
      }
      const result = areSubstringsOverMaximumOccurrences(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return false with many equal to maximum', () => {
      const str = 'aaaabbbbccccddddaaaabbbbccccdddd'
      const checks = {
        aaaa: 2,
        bbbb: 2,
        cccc: 2,
        dddd: 2
      }
      const result = areSubstringsOverMaximumOccurrences(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false with many under maximum', () => {
      const str = 'aaaabbbbccccddddaaaabbbbccccdddd'
      const checks = {
        aaaa: 4,
        bbbb: 4,
        cccc: 4,
        dddd: 4
      }
      const result = areSubstringsOverMaximumOccurrences(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })
  })
})
