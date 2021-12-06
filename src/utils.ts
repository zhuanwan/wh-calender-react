export function _verifyDate(date: string) {
  return new Date(date).getDate() === Number(date.substring(date.length - 2))
}

// 一个月多少天
export function _daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

// 格式化
export function _stringToDate(d: string) {
  const date: any = d.split('-');
  return new Date(date[0], date[1] - 1, date[2], 0, 0, 0);
}

// date to string
export function _dateToString(date: Date){
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}

// 天转换为今天凌晨
export function _timeToDate(date: Date){
  date = new Date(date);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0 ,0 ,0);
}

// 返回一个月41天（包含上月，当月，下月）
export function getDateList(_year: number, _month: number, checkedDay: Date){
  let list = []
  const today = _timeToDate(new Date());
  let date = new Date(_year, _month, 1, 0, 0, 0),
    totalDays = _daysInMonth(_year, _month),
    dates = date.getDate() - date.getDay(),
    isIterateContinue = true,
    i = 0
  while (isIterateContinue) {
    let newDate = new Date(_year, _month, dates, 0, 0, 0)
    let dataDayString = _dateToString(newDate),
      isToday = false, // 是不是今天
      isFirstDay = false, // 是不是当月第一天
      isLastDay = false, // 是不是当月最后一天
      isInvalidDay = false, // 是不是有效的日期,true表示不是当前月的天
      isLessThanToday = false // 是不是小于今天

    if (dates === 1) {
      isFirstDay = true
    } else if (dates === totalDays) {
      isLastDay = true
    }
    if (dates <= 0 || dates > totalDays) {
      isInvalidDay = true
    } else {
      if (_stringToDate(dataDayString) < today) {
        isLessThanToday = true
      } else if (+_stringToDate(dataDayString) === +today) {
        isToday = true
      }
    }

    let showDate = dates
    if (dates > totalDays || dates <= 0) {
      showDate = newDate.getDate()
    }
    list[i] = {
      date: newDate,
      dataDayString: dataDayString,
      dates: showDate,
      isToday: isToday,
      isFirstDay: isFirstDay,
      isLastDay: isLastDay,
      isInvalidDay: isInvalidDay,
      isLessThanToday: isLessThanToday,
      active: +newDate - +checkedDay === 0,
    }
    i++
    dates++
    isIterateContinue = i <= 41
  }
  return list
}

