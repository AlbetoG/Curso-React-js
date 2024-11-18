import { useState } from 'react'
import { Products } from './components/Products.jsx'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { IS_DEVELOPMENT } from './config.js'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'

function App() {
  const { filterProducts } = useFilters()

  // const [products] = useState(initialProducts)
  const filteredProducs = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducs} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
