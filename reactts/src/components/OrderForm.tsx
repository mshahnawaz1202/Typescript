
import { useState } from 'react'

interface OrderFormProps {
  onSubmit: (order: {
    name: string
    cups: number
  }) => void
}

function OrderForm({ onSubmit }: OrderFormProps) {
  const [name, setName] = useState('Mango Juice')
  const [cups, setCups] = useState(1)

  function handleSubmit(
    e: React.SubmitEvent<HTMLFormElement>
  ) {
    e.preventDefault()

    onSubmit({
      name,
      cups,
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-lg"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Place Your Order 
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Choose your juice and number of cups.
        </p>
      </div>

      {/* Juice Name */}
      <div className="mb-5">
        <label
          htmlFor="juice-name"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Juice Name
        </label>

        <input
          id="juice-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter juice name"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        />
      </div>

      {/* Cups */}
      <div className="mb-6">
        <label
          htmlFor="cups"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Number of Cups
        </label>

        <input
          id="cups"
          type="number"
          min="1"
          value={cups}
          onChange={(e) =>
            setCups(Number(e.target.value) || 0)
          }
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-xl bg-orange-500 px-4 py-3 font-bold text-white shadow-md transition hover:bg-orange-600 active:scale-[0.98]"
      >
        Submit Order
      </button>
    </form>
  )
}

export default OrderForm

