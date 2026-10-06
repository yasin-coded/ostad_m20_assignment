import { Link } from "react-router-dom";
import { X, ArrowRight } from "lucide-react";
import { useCart } from "../hooks/useCart";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";

function CartSidebar({ isOpen, onClose }) {
  const { cart, totalPrice } = useCart();

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />


      <aside
        inert={!isOpen}
        className={`fixed right-0 top-0 z-50 flex h-full w-64 flex-col overflow-y-auto bg-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={onClose} aria-label="Close cart" className="self-start p-3">
          <X />
        </button>

        <div className="flex flex-col items-center gap-2 px-3 pb-4">
          <p className="text-lg font-bold">Sub Total</p>
          <p className="font-bold text-red-700">${totalPrice.toFixed(2)}</p>
          <Link
            to="/mycart"
            onClick={onClose}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-black py-1 text-sm"
          >
            Go to Cart <ArrowRight size={16} />
          </Link>
        </div>

        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          cart.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </aside>
    </>
  );
}

export default CartSidebar;