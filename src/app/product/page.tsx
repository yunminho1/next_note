import MeowAticle from "@/components/MeowAticle";
import { getProducts } from "@/service/products";
import Link from "next/link";

// export const revalidate = 3;
export default async function Page() {
  const item = await getProducts();

  return (
    <div>
      <p>제품 소개 페이지 !!!!</p>
      <ul>
        {item.map((data, index) => (
          <li key={index}>
            <Link href={`/product/${data.id}`}>{data.name}</Link>
          </li>
        ))}
      </ul>
      <MeowAticle />
    </div>
  );
}
