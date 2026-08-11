import type {Juice} from '../types'
import Card from './Card'

interface ListProps{
    items: Juice[]
}

function List({items}: ListProps) {
  return (
    <div>
      {items.map((j)=> (
        <Card
        key = {j.id}
        name = {j.name}
        price = {j.price}
        isSpecial = {j.price > 150}
        />
      ))}
    </div>
  )
}

export default List