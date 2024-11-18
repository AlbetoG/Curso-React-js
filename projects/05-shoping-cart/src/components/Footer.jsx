import '../css/Footer.css'
import { useCart } from '../hooks/useCart.js'

export function Footer() {
  // const { filters } = useFilters()
  const { cart } = useCart()

  return (
    <footer className='footer'>
      {/* {cart && (
        JSON.stringify(cart, null, 2)
      )} */}
      <h4>Prueba técnica de React ⚛️ － <span>@midudev</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  )
}