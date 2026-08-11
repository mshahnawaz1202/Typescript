import Card from './components/Card.tsx'
import { Counter } from './components/Counter.tsx'

function App() {
  

  return (
    <>
    <div>
      <h1>Vite + React</h1>
      <Card name = "Headphone" price = {5000}/>
      <Card name = "IPhone" price = {500000}/>

    </div>

    <div>
      <Counter/>
    </div>
    
    </>
  )
}

export default App
