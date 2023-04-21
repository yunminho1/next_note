"use client";

import { useState } from "react";

export default function Count() {
  const [num, setNum] = useState(0);

  return (
    <>
      <p>{num}</p>
      <button onClick={() => setNum((num) => num + 1)}>증가하기</button>
    </>
  );
}
