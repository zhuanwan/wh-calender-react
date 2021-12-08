import { useState } from 'react'
import './App.css'
import Calender from './Calender'
import type { DateT } from '../types/index.d'
import { _dateToString } from './utils'

function App() {
  const [dateString, setDateString] = useState('')
  const [startDateString, setStartDateString] = useState('')
  const [endDateString, setEndDateString] = useState('')
  const dayCheckedCb = (item: DateT) => {
    console.log('单选', item)
    setDateString(item.dataDayString)
  }

  const rangeCheckedCb = (item: (Date | null)[]) => {
    console.log('多选', item)
    const [startDate, endDate] = item
    if (startDate) {
      setStartDateString(_dateToString(startDate))
    } else {
      setStartDateString('')
    }
    if (endDate) {
      setEndDateString(_dateToString(endDate))
    } else {
      setEndDateString('')
    }
    
  }
  return (
    <div className="App">
      <h3>单选</h3>
      <Calender
        dayCheckedCb={dayCheckedCb}
        defaultCheckedDate={new Date('2022-02-02')}
      />
      <div>当前选择的日期：{dateString}</div>
      <div style={{marginTop: 30}}></div>
      <h3>多选</h3>

      <Calender
        isRange
        rangeCheckedCb={rangeCheckedCb}
        defaultCheckedRange={[new Date('2022-02-09'), new Date('2022-02-25')]}
      />
      <div>当前选择的日期：{startDateString}-{endDateString}</div>
    </div>
  )
}

export default App
