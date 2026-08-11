
interface CardProps {
  name: string
  price: number
  isSpecial?: boolean
}

function Card({
  name,
  price,
  isSpecial = false,
}: CardProps) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            {name}
          </h2>

          <p className="mt-2 text-2xl font-bold text-orange-600">
            Rs. {price}
          </p>
        </div>

        {isSpecial && (
          <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm">
            ⭐ Special
          </span>
        )}
      </div>
    </article>
  )
}

export default Card

