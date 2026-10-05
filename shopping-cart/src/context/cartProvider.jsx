import { useState, useEffect } from "react";
import { CartContext } from "./cartContext";

export function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [{ ...product, qty: 1 }, ...prev];
    });
  };

  const increaseQty= (id)=>{
    setCart ((prev) =>
        prev.map ((item) =>
            item.id=== id ? {... item, qty: item.qty+1 } : item
        )
    );
  };

  const decreaseQty = (id) => {
    setCart ((prev)=>
        prev.map ((item) =>
            item.id=== id && item.qty > 1 ? {...item, qty: item.qty -1 } :item
            )
        );  
    };

 const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
 };

 const clearCart = () => {
    setCart([]);
 };
 
 const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
 const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

 return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
    
    {children}
    
    </CartContext.Provider>
  );
}