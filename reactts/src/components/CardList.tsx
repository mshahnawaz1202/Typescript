import type{PropsWithChildren, ReactNode} from "react"

interface CradListProps extends PropsWithChildren{
    title:string,
    footer?:ReactNode
}

function CardList({title, children, footer}: CradListProps) {
  return (
    <section>
        <h2>{title}</h2>
        <div>{children} </div>
        {footer && <footer>{footer}</footer> }
    </section>
  )
}

export default CardList