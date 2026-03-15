import './Header.css'
import { useEffect, useRef } from 'react'

function Header({ cartTotal, total, cart, cartOpen, setCartOpen, search, setSearch, removeFromCart, addToCart }) {
  const cartRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setCartOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
    return (
        <header>
        <h1>My Shop</h1>
        <nav>
            <a href="#">Home</a> 
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
  <div className='search-wrapper'>
  <input 
    type="text" 
    placeholder='Search'
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
  <i className="fas fa-search"></i>
</div>
        <div className='cart-wrapper' ref={cartRef}>
            <span 
            className='cart-icon'
            onClick={() => setCartOpen(!cartOpen)}>
            🛒{cartTotal} - ${total}            
           </span>

           {cartOpen && (
            <div className='cart-dropdown'>
                <h3>Your Cart</h3>
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cart.map(function(item, index) {
                        return (
                         <div key={index} className='cart-item'>
  <span>{item.name}</span>
  <div className='cart-item-controls'>
    <button onClick={() => removeFromCart(item.name)}>
        <i className="fas fa-minus"></i></button>
    <span>{item.quantity}</span>
    <button onClick={() => addToCart(item.name, item.price)}>
        <i className="fas fa-plus"></i></button>
  </div>
  <span>${item.price * item.quantity}</span>
</div>
                        )
                    })
                )}
                <div className='cart-total'>
                    <strong>Total: ${total}</strong>
                </div>
            </div>
           )}
        </div>       
    </header>    
    )
}

export default Header