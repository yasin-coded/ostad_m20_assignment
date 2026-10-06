import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../hooks/useCart";

function CartItem({ item }) {

    const { increaseQty, decreaseQty, removeFromCart } = useCart();

    return (
        <div className="border-b border-gray-300 p-3">
            <div className="bg-gray-50 p-2">

                <img src={item.image} alt={item.title} className="mx-auto h-28 object-contain" />
            </div>
            <p className="mt-2 text-center text-sm font-bold">${item.price.toFixed(2)}</p>

            <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center border border-gray-300">
                    <button onClick={() => decreaseQty(item.id)} aria-label="Decrease Quantity" className="p-1 disabled:cursor-not-allowed disabled:opacity-40">
                        <Minus size={14} />
                    </button>
                    <span className="w-8 text-center text-sm">{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)} aria-label="Increase Quantity" className="p-1">
                        <Plus size={14} />
                    </button>
                </div>
                {/* Trash button wraps the icon as a child, not self-closing */}
                <button onClick={() => removeFromCart(item.id)} aria-label="Remove item" className="p-1 text-red-600 hover:text-red-800">
                    <Trash2 size={16} />
                </button>
            </div>
        </div>
    );
}

export default CartItem;