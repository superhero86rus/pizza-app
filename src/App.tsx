import { MouseEvent, useState } from 'react'
import './App.css'
import Button from './components/Button/Button'

function App() {

  const [counter, setCounter] = useState<number>(0);

  const AddCounter = (event: MouseEvent) => {
    console.log(event)
  }
  
  return (
    <>
      <div>{ counter }</div>
      <Button onClick={ AddCounter }>Кнопка</Button>
    </>
  )
}

export default App