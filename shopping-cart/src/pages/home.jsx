import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <main className="mx-auto max-w-6xl p-4">
      <h1 className="text-2xl font-bold">Result</h1>
      <p className="mb-4 text-sm text-gray-700">
        Check each product page for other buying options.
      </p>
      <div className="flex flex-col gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default Home;
