
import type { PropsWithChildren, ReactNode } from 'react'

interface CardListProps extends PropsWithChildren {
  title: string
  footer?: ReactNode
}

function CardList({
  title,
  children,
  footer,
}: CardListProps) {
  return (
    <section className="mx-auto w-full max-w-5xl rounded-2xl bg-gray-50 p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          {title}
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>

      {footer && (
        <footer className="mt-6 border-t border-gray-200 pt-5">
          {footer}
        </footer>
      )}
    </section>
  )
}

export default CardList

