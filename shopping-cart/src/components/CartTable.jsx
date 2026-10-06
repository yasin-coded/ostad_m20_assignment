import { Minus, Plus } from "lucide-react";
import { useCart } from "../hooks/useCart";


function QtyControl({ item }) {
  const { increaseQty, decreaseQty } = useCart();

  return (
    <div className="flex w-fit items-center border border-gray-300">
      <button
        onClick={() => decreaseQty(item.id)}
        aria-label="Decrease quantity"
        className="cursor-pointer p-2"
      >
        <Minus size={14} />
      </button>
      <span className="w-10 text-center">{item.qty}</span>
      <button
        onClick={() => increaseQty(item.id)}
        aria-label="Increase quantity"
        className="cursor-pointer p-2"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}

function CartTable() {
  const { cart, removeFromCart } = useCart();


  const shortTitle = (title) => title.split(",")[0];

  const lineTotal = (item) => (item.price * item.qty).toFixed(2);

  return (

    <div className="mt-4 overflow-x-auto">
      <table className="w-full min-w-[640px] border border-gray-300 text-left">
        <thead className="text-xs uppercase text-gray-600">
          <tr>
            <th className="p-4">Image</th>
            <th className="p-4">Product</th>
            <th className="p-4">Unit price</th>
            <th className="p-4">Quantity</th>
            <th className="p-4">Total</th>
            <th className="p-4">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="border-t border-gray-300">
              <td className="p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-24 w-24 object-contain"
                />
              </td>
              <td className="p-4 font-medium">{shortTitle(item.title)}</td>
              <td className="p-4">${item.price.toFixed(2)}</td>
              <td className="p-4">
                <QtyControl item={item} />
              </td>
              <td className="p-4">${lineTotal(item)}</td>
              <td className="p-4">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="cursor-pointer hover:underline"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;