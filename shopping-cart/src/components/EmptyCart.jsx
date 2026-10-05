function EmptyCart({ children }) {
    return (
        <div className="flex flex-col items-center gap-3 p-6 text-center">
            <img src="/EmptyCart.png" alt="" className="w-40" />
            <p className="text-lg">Your Cart is Empty</p>
            {children}

        </div>
    );
}

export default EmptyCart;