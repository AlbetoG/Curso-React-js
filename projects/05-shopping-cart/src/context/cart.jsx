import { createContext, useReducer } from "react";
import { cartInitialState, cartReducer } from '../reducers/cart.js'

export const CartContext = createContext()


function useCardReducer() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({
        type: 'CLEAR_CART'
    })

    return { state, addToCart, removeFromCart, clearCart }
}

export function CartProvider({ children }) {
    // const [cart, setCart] = useState([])

    // const addToCart = (product) => {
    //     // If the product exist in the cart, only sum quantity
    //     const productInCartIndex = cart?.findIndex(item => item.id === product.id)
    //     if (productInCartIndex >= 0) {
    //         const newCart = structuredClone(cart)
    //         newCart[productInCartIndex].quantity += 1
    //         return setCart(newCart)
    //     }
    //     // If not exist product, add new product
    //     setCart((prevState) => {
    //         return ([
    //             ...prevState,
    //             {
    //                 ...product,
    //                 quantity: 1
    //             }
    //         ])
    //     })
    // }

    // const removeFromCart = (product) => {
    //     setCart(prevState =>
    //         prevState.filter(item => item.id !== product.id)
    //     )
    // }

    // const clearCart = () => {
    //     setCart([])
    // }

    const { state, addToCart, removeFromCart, clearCart } = useCardReducer()

    return <CartContext.Provider value={{ cart: state, addToCart, removeFromCart, clearCart }}>
        {children}
    </CartContext.Provider>
}