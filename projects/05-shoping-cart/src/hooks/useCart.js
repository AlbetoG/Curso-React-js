import { useContext } from "react"
import { CartContext } from "../context/cart.jsx"

export const useCart = () => {
    const { cart, addToCart, clearCart, removeFromCart } = useContext(CartContext)
    if (cart === 'undefined') {
        throw new Error("useCart must be used within a CartProvider");
    }

    return { cart, addToCart, clearCart, removeFromCart }
}