import ProductGoButton from "@/components/GoButton";
import { getProduct, getProducts } from "@/service/products";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const product = await getProduct(slug);

  return {
    title: `제품의 이름: ${product?.name}`,
  };
}

export const revalidate = 3;

export default async function page({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  if (!product) {
    redirect("/product");
  }
  return (
    <div>
      {product?.name} 제품 설명페이지
      {product && (
        <Image
          src={`/images/${product?.image}`}
          alt={product?.name}
          width="300"
          height="300"
        />
      )}
      <ProductGoButton />
    </div>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
