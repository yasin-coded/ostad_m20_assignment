import { useCart } from "../hooks/useCart";
import { toast } from "react-toastify";

function CartSummary(){
    const { totalItems, totalPrice }= useCart();
    const discount=0 ;
    const finalTotal= totalPrice-discount;
    const isEmpty = totalItems=== 0;
    const handleApplyPromo = () => {
        toast.error("Invalid promo code!");
    };

    return (
        <aside className="flex flex-col gap-4 bg-white xl: w-96">
            <p className="text-lg">
                Subtotal (before Discount): <strong>${totalPrice.toFixed(2)}</strong>
            </p>
            <p className="text-lg">
                Discount: <strong>${discount.toFixed(2)}</strong>
            </p>
            <p className="text-lg">
                Total ({totalItems} items): <strong>${finalTotal.toFixed(2)}</strong>
            </p>

            <input
            type="text"
            placeholder="Enter Promo Code"
            aria-label="Promo Code"
            className="w-full rounded border border-gray-300 px-4 py-3"
            />

            <button 
            onClick={handleApplyPromo}
            className="w-full cursor-pointer rounded bg-violet-600 py-3 font-bold text-white hover:bg-violet-900 ease-in-out duration-300">
                Enter Promo Code
            </button>

            <button 
            disabled={isEmpty}
            className="w-full cursor-pointer rounded bg-brand py-3 font-bold text-black disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 hover:bg-amber-600 ease-in-out duration-300"
            >
                Proceed to Checkout
            </button>
        </aside>
    );
}

export default CartSummary;