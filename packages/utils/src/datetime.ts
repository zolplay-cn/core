import type { Dayjs } from 'dayjs'
import dayjs, { ConfigType } from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

export type DateTime = Dayjs
export type DateTimeProps = {
  date: DateTime | null | undefined
  format?: string
  relative?: boolean
}

type ExtendOptions = {
  utc?: boolean
  timezone?: boolean
  relativeTime?: boolean
}
export function extendDateTime(
  options: ExtendOptions = { utc: true, timezone: true, relativeTime: true }
) {
  if (options.utc) {
    dayjs.extend(utc)
  }
  if (options.timezone) {
    dayjs.extend(timezone)
  }
  if (options.relativeTime) {
    dayjs.extend(relativeTime)
  }
}

type ParseOptions = {
  date?: ConfigType
  timezone?: string
}
/**
 * Parse a datetime string in UTC to a local timezone
 *
 * @ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 * @ref https://day.js.org/docs/en/parse/utc
 */
export const parseDateTime = (
  options: string | ParseOptions
): DateTime | null => {
  // take either a string or an object
  const { date, timezone = null } =
    typeof options === 'string' ? { date: options } : options
  if (!date) {
    return null
  }

  try {
    return dayjs(dayjs.utc(date)).tz(timezone ?? dayjs.tz.guess())
  } catch {
    return dayjs(date)
  }
}

/**
 * Format a datetime to human readable format
 *
 * @ref https://day.js.org/docs/en/display/from-now
 * @ref https://day.js.org/docs/en/display/difference
 */
export const formatDateTime = ({
  date,
  format,
  relative,
}: DateTimeProps): string => {
  if (!date) return ''
  if (!relative) return date.format(format)

  return date.fromNow()
}
