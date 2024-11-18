
import { useId } from "react"
import { CartIcon, ClearCartIcon } from "./Icons"
import '../css/Cart.css'
import { useCart } from "../hooks/useCart.js"


function CartItem({ thumbnail, price, title, quantity, addToCart }) {
    return (
        <li>
            {/* <img src="{thumbnail}" alt="Imagen" /> */}
            <div>
                <strong>{title}</strong> - ${price}
            </div>
            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart() {
    const cartCheckboxId = useId()

    const { cart, addToCart, clearCart } = useCart()

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden />

            <aside className="cart">
                <ul>
                    {cart && cart.map((product) =>
                        <CartItem
                            key={product.id}
                            thumbnail={product.image}
                            title={product.title}
                            price={product.price}
                            quantity={product.quantity}
                            addToCart={() => addToCart(product)}
                        />
                    )}
                </ul>
                <button onClick={() => { clearCart() }}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}