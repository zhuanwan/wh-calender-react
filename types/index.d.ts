export type PropsT = {
  isRange?: boolean // 是选单个日期还是时间段
  defaultCheckedDate?: Date // 2022-02-02, 一开始选中的日期
  defaultCheckedRange?: Array<Date | null> // [2022-02-02, 2022-02-10], 一开始选中的时间段
  dayCheckedCb?: (v: DateT) => void // 当前选中的天
  rangeCheckedCb?: (v: Array<Date | null>) => void // 当前选中的日期段
}

export type DateT = {
  date: Date
  dataDayString: string
  dates: number
  isToday: boolean // 是不是今天
  isFirstDay: boolean // 是不是当月第一天
  isLastDay: boolean // 是不是当月最后一天
  isInvalidDay: boolean // 是不是有效的日期,true表示不是当前月的天
  isLessThanToday: boolean // 是不是小于今天
  active: boolean // 选中的日期
  range: boolean // 选中的时间段
  isStartDayChecked: boolean // 是否是选中时间段的开始时间
  isEndDayChecked: boolean // 是否是选中时间段的结束时间
  [key: string]: string | boolean | number | Date
}

export default function Calender(params: PropsT): JSX.Element
