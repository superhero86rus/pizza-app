import './App.css'
import Button from './components/Button/Button'

function App() {
  
  return (
    <>
      <Button onClick={ () => console.log('Click!') }>Кнопка</Button>
    </>
  )
}

export default App