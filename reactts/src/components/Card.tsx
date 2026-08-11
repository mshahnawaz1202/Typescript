
interface CardProps{
  name: string,
  price: number
  isSpecial: boolean
}

function Card({name, price, isSpecial = false}: CardProps) {
  return (
    <article>
        <h2>
            {name} {isSpecial && <span>⭐</span>}
        </h2>
        <p>{price}</p>
    </article>
  )
}

export default Card