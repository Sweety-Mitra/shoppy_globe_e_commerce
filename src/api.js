// Fetch all products from DummyJSON API
export async function fetchProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products");

    if (!res.ok) throw new Error("Unable to load product list");

    const data = await res.json();
    return data.products;
  } catch (err) {
    throw new Error(err.message || "Error fetching products");
  }
}

// Fetch a single product by ID
export async function fetchProductById(id) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);

    if (!res.ok) throw new Error("Product not found");

    return await res.json();
  } catch (err) {
    throw new Error(err.message || "Error fetching product");
  }
}
