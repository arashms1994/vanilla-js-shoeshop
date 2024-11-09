import { BaseUrl } from "./confug";

export async function GetProducts() {
  const response = await fetch(`${BaseUrl}/Products`);
  const Products = await response.json();
  return Products;
}

export async function GetProductsId(id) {
  const response = await fetch(`${BaseUrl}/Products/${id}`);
  const Product = await response.json();
  return Product;
}
