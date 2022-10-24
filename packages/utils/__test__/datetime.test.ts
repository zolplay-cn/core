import { describe, expect, test } from 'vitest'

import { parseDateTime } from '@/datetime'

describe('datetime utils', () => {
  describe('parseDateTime', () => {
    test('should parse a string', () => {
      const parsed = parseDateTime('2021-01-01T10:00:00.000Z')

      expect(parsed?.year()).toBe(2021)
      expect(parsed?.toISOString()).toBe('2021-01-01T10:00:00.000Z')
      expect(parsed?.format('YYYY-MM-DD')).toBe('2021-01-01')
    })

    test('should parse an object', () => {
      const parsed = parseDateTime({ date: '2022-01-01T09:00:00.000Z' })

      expect(parsed?.year()).toBe(2022)
      expect(parsed?.toISOString()).toBe('2022-01-01T09:00:00.000Z')
      expect(parsed?.format('YYYY-MM-DD')).toBe('2022-01-01')
    })

    test('should parse an object with timezone', () => {
      const parsed = parseDateTime({
        date: '2023-01-01',
        timezone: 'Asia/Tokyo',
      })

      expect(parsed?.toISOString()).toBe('2022-12-31T16:00:00.000Z')
    })
  })
})
