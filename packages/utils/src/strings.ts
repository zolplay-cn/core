import { take } from 'lodash'

/**
 * Get the initial characters of words in a string
 */
export const getNameInitials = (string?: string, limit?: number) => {
  if (!string) return ''

  const words = string.split(' ')
  const initials = take(
    words.map((word) => word.charAt(0)),
    limit || 2
  ).join('')

  return initials
}
