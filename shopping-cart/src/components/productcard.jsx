function ProductCard({ product }) {
  const handleAdd = () => {
    console.log("add", product.id);
  };

  return (
    <div className="flex flex-col overflow-hidden rounded border border-gray-200 bg-white md:flex-row">
      <div className="flex items-center justify-center bg-gray-50 p-6 md:w-64 md:shrink-0">
        <img
        src={product.image}
        alt={product.title}
        className="max-h-80 object-contain md:max-h-52"
        />
      </div>
      <div  className="flex flex-col gap-2 p-4 md:justify-center md:p-8">
        <p className="text-xs uppercase tracking-wide text-grey-500">{product.category}</p>
        <h3 className="font-medium md:text-xl text-lg">{product.title}</h3>
        <p className="text-2xl font-medium">${product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-600">Sold by Amazon</p>
        <button
            onClick={handleAdd}
            className="mt-2 self-start rounded-full bg-brand px-6 py-3 font-bold text-black hover:bg-amber-500  ease-in-out duration-300 cursor-pointer"
        >
            Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;