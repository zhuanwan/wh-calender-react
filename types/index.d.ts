export type PropsT = {
  defaultCheckedDay?: string // 2022-02-02, 一开始选中的日期
  dayCheckedCb?: (v: DateT) => void  // 当前选中的天
}

export type DateT = {
  date: Date,
  dataDayString: string
  dates: number
  isToday: boolean
  isFirstDay: boolean
  isLastDay: boolean
  isInvalidDay: boolean
  isLessThanToday: boolean
  active: boolean
  [key: string]: string | boolean | number | Date
}

export default function Calender(params: PropsT): JSX.Element;

