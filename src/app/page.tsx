import Image from "next/image";
import styles from "./page.module.css";
import Count from "@/components/Count";
export default function Home() {
  return (
    <>
      <h1>홈페이지다.Ver3</h1>
      <Count />
    </>
  );
}
