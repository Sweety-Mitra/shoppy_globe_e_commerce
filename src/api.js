// Fetch all products from DummyJSON API
export async function fetchProducts() {
  const response = await fetch("https://dummyjson.com/products");

  if (!response.ok) {
    throw new Error("Failed to fetch product list");
  }

  const data = await response.json();
  return data.products; // API returns { products: [...] }
}

// Fetch a single product by ID
export async function fetchProductById(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product details");
  }

  return await response.json();
}
