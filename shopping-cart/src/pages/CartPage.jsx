import { useCart } from "../hooks/useCart";
import EmptyCart from "../components/EmptyCart";
import CartTable from "../components/CartTable";
import CartSummary from "../components/CartSummary";
import { Link } from "react-router-dom";



function CartPage(){
  const { cart, clearCart } = useCart();
  const isEmpty = cart.length === 0;
  
    return (
    <main className="flex flex-col gap-4 p-4 lg:flex-row lg:items-start">
      <section className="min-w-0 flex-1 bg-white p-4">
        <div className="flex items-center justify-between border-b border-gray-300 pb-4">
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
          <button
            onClick={clearCart}
            disabled={isEmpty}
            className="cursor-pointer rounded bg-red-400 px-4 py-3 font-bold text-white disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
          >
            Clear Cart
          </button>
        </div>

        {isEmpty ? (
          <EmptyCart>
            <Link to="/" className="border border-black px-4 py-3 font-bold hover:bg-amber-400 text-black ease-in-out duration-300">
              Go to Shop
            </Link>
          </EmptyCart>
        ) : (
          <CartTable />
        )}
      </section>

      <CartSummary />
    </main>
  );
}

export default CartPage;