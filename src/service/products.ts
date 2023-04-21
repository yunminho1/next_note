import path from "path";
import { promises as fs } from "fs";
import { json } from "stream/consumers";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};
export async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), "src/data", "products.json");
  const dataJson = await fs.readFile(filePath, "utf-8");
  return JSON.parse(dataJson);
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const dataJson = await getProducts();
  return dataJson.find((data) => id === data.id);
}
