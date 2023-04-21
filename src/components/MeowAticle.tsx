"use client";
import { useEffect, useState } from "react";
import styles from "./meow.module.css";

export default function MeowAticle() {
  const [text, setText] = useState("데이터 준비중");

  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);

  return <article className={styles.article}>{text}</article>;
}
