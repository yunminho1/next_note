import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Count from "@/components/Count";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>홈페이지다.</h1>
      <Count />
    </>
  );
}