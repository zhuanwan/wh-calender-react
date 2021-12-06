import { useState } from 'react'
import './App.css'
import Calender from './Calender'
import type { DateT } from '../types/index.d'

function App() {

  const dayCheckedCb = (item: DateT) => {
    console.log('选中了', item)
  }
  return (
    <div className="App">
     <Calender dayCheckedCb={dayCheckedCb}/>
    </div>
  )
}

export default App
