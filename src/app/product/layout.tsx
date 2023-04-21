import { Metadata } from "next";
import Link from "next/link";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "멋진 제품 사람들",
  description: "멋진제품을 확인하세요",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/product/women">여성옷</Link>
        <Link href="/product/men">남성옷</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
