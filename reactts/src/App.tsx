import Card from './components/Card.tsx'
import { Counter } from './components/Counter.tsx'
import type {Juice} from '../types'
import List from './components/List.tsx'

const menu: Juice[] = [
  { id: 1, name: "Mango Juice", price: 150 },
  { id: 2, name: "Banana Shake", price: 180 },
  { id: 3, name: "Apple Juice", price: 130 },
  { id: 4, name: "Chocolate Shake", price: 200 },
  { id: 5, name: "Orange Juice", price: 120 },
  { id: 6, name: "Pineapple Juice", price: 160 },
  { id: 7, name: "Watermelon Juice", price: 140 },
  { id: 8, name: "Grape Juice", price: 170 },
  { id: 9, name: "Strawberry Shake", price: 220 },
  { id: 10, name: "Pomegranate Juice", price: 250 },
  { id: 11, name: "Peach Juice", price: 180 },
  { id: 12, name: "Lemonade", price: 100 },
  { id: 13, name: "Mango Shake", price: 200 },
  { id: 14, name: "Avocado Shake", price: 280 },
  { id: 15, name: "Guava Juice", price: 150 },
]
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
    <div>
      <List items = {menu} />
    </div>
    
    </>
  )
}

export default App
