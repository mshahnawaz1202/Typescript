
import type { Juice } from '../types'
import Card from './Card'

interface ListProps {
  items: Juice[]
}

function List({ items }: ListProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((juice) => (
        <Card
          key={juice.id}
          name={juice.name}
          price={juice.price}
          isSpecial={juice.price > 150}
        />
      ))}
    </div>
  )
}

export default List

