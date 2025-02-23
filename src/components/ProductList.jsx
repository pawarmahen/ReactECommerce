import ProductCard from "./ProductCard";

/* eslint-disable react/prop-types */
export default function ProductList({ products, handleAddToCart }) {
  return (
    <main className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          ></ProductCard>
        ))}
      </div>
    </main>
  );
}
