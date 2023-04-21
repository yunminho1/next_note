"use client";

import { useRouter } from "next/navigation";
export default function ProductGoButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/product");
      }}
    >
      제품으로 이동
    </button>
  );
}
