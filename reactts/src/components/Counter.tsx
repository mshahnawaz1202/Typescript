
import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div>
        <p className="text-sm font-medium text-gray-500">
          Cups Ordered
        </p>

        <p className="mt-1 text-3xl font-bold text-gray-900">
          {count}
        </p>
      </div>

      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
        className="rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-600 active:scale-95"
      >
        + Order
      </button>
    </div>
  )
}

