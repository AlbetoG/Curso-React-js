import '../css/Products.css'
import { useCart } from '../hooks/useCart.js'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'

export function Products({ products }) {
    const { addToCart, removeFromCart, cart } = useCart()
    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }
    return (
        <main className='products'>
            <ul>
                {products.map(product => {
                    const isProductInCart = checkProductInCart(product)
                    return (
                        <li key={product.id}>
                            {/* <img src={product.thumbnail} alt={product.title} /> */}
                            <div>
                                <strong>
                                    {product.title} - ${product.price}
                                </strong>
                            </div>
                            <div>
                                <button style={{ backgroundColor: isProductInCart ? 'red' : '' }}
                                    onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}>
                                    {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                                </button>
                            </div>
                        </li>)
                })}
            </ul>
        </main>
    )
}