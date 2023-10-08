import dayjs from 'dayjs'

export const formateTime = (date: string) => {
  return dayjs(new Date(date)).format('YYYY-MM-DD HH:mm')
}
