import { Link } from "react-router-dom";
import { MapPin, Search, ShoppingCart } from "lucide-react";

function Navbar({ onCartClick }) {
  const totalItems = 0; 

  return (
    <header className="bg-nav text-white">
      <div className="flex flex-wrap items-center gap-2 px-3 py-2.5 md:flex-nowrap md:gap-3 md:px-4 md:py-3">
        <Link to="/" className="shrink-0">
          <img src="/amazon-white-logo.png" alt="Amazon home" className="h-8" />
        </Link>


        <div className="hidden items-center gap-1 md:flex cursor-pointer">
          <MapPin size={18} />
          <div className="text-xs leading-tight">
            <p>Deliver to</p>
            <p className="text-sm font-bold">Bangladesh</p>
          </div>
        </div>

        <div className="order-last flex w-full items-center rounded bg-white md:order-none md:flex-1">
          <input
            type="text"
            placeholder="Search Amazon"
            aria-label="Search Amazon"
            className="w-full rounded-l px-4 py-2 text-black focus:outline-none"
          />
          <button aria-label="Search" className="px-4 py-2 text-gray-500">
            <Search size={20} />
          </button>
        </div>

        <div className="hidden shrink-0 whitespace-nowrap text-xs leading-tight cursor-pointer">
          <p>Hello, sign in</p>
          <p className="text-sm font-bold">Account & Lists</p>
        </div>

        <div className="hidden shrink-0 whitespace-nowrap text-xs leading-tight md:block cursor-pointer">
          <p>Returns</p>
          <p className="text-sm font-bold">& Orders</p>
        </div>

        <button
          onClick={onCartClick}
          aria-label={`Open cart, ${totalItems} items`}
          className="ml-auto flex shrink-0 items-center gap-1 md:ml-0 cursor-pointer"
        >
          <span className="relative">
            <ShoppingCart size={28} />
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-400 text-xs font-bold text-black">
              {totalItems}
            </span>
          </span>
          <span className="font-bold">cart</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;