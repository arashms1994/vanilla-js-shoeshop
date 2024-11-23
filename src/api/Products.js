import { BaseUrl } from "/src/api/config";

export async function GetProducts() {
  const response = await fetch(`${BaseUrl}/products`);
  const Products = await response.json();
  return Products;
}

export async function GetProductsId(id) {
  const response = await fetch(`${BaseUrl}/products/${id}`);
  const Product = await response.json();
  return Product;
}

// GetProducts().then((products) => {
//   let products = products
//   const brands = products.map((product) => product.brand)
//   console.log(brands);
//   })