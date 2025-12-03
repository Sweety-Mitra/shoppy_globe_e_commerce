import useProducts from "../hooks/useProducts";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const { products, loading, error } = useProducts(); // custom hook

  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="product-grid">
      {products.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
}
