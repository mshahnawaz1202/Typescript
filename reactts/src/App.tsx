
import { Counter } from './components/Counter.tsx'
import type { Juice } from '../types'
import List from './components/List.tsx'
import OrderForm from './components/OrderForm.tsx'
import CardList from './components/CardList.tsx'

const menu: Juice[] = [
  { id: 1, name: 'Mango Juice', price: 150 },
  { id: 2, name: 'Banana Shake', price: 180 },
  { id: 3, name: 'Apple Juice', price: 130 },
  { id: 4, name: 'Chocolate Shake', price: 200 },
  { id: 5, name: 'Orange Juice', price: 120 },
  { id: 6, name: 'Pineapple Juice', price: 160 },
  { id: 7, name: 'Watermelon Juice', price: 140 },
  { id: 8, name: 'Grape Juice', price: 170 },
  { id: 9, name: 'Strawberry Shake', price: 220 },
  { id: 10, name: 'Pomegranate Juice', price: 250 },
  { id: 11, name: 'Peach Juice', price: 180 },
  { id: 12, name: 'Lemonade', price: 100 },
  { id: 13, name: 'Mango Shake', price: 200 },
  { id: 14, name: 'Avocado Shake', price: 280 },
  { id: 15, name: 'Guava Juice', price: 150 },
]

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      
      {/* Header */}
      <header className="border-b border-orange-100 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center">
          <div className="mb-2 text-5xl"></div>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Juice Shop
          </h1>

          <p className="mt-2 text-lg text-gray-500">
            Fresh juices and delicious shakes
          </p>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl space-y-10 px-6 py-10">

        {/* Counter */}
        <section>
          <Counter />
        </section>

        {/* Menu */}
        <section>
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Menu 
            </h2>

            <p className="mt-1 text-gray-500">
              Choose your favorite fresh drink
            </p>
          </div>

          <List items={menu} />
        </section>

        {/* Order Form */}
        <section className="rounded-3xl bg-orange-100/60 p-6 sm:p-10">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Place Your Order
            </h2>

            <p className="mt-2 text-gray-500">
              Tell us what you'd like to drink
            </p>
          </div>

          <OrderForm
            onSubmit={(order) => {
              console.log(
                'Order placed:',
                order.name,
                order.cups
              )
            }}
          />
        </section>

        {/* Card List */}
        <section>
          <CardList
            title="Code with Shah Nawaz"
            footer={
              <button
                type="button"
                className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 active:scale-95"
              >
                Order Now
              </button>
            }
          >
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="font-medium text-gray-800">
                Built with React + TypeScript
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Learning components, props, state and events.
              </p>
            </div>
          </CardList>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-orange-100 bg-white py-6 text-center">
        <p className="text-sm text-gray-500">
          © 2026 Juice Shop • Made with React & TypeScript
        </p>
      </footer>
    </div>
  )
}

export default App

