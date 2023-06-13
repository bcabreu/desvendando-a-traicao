import styles from "@/styles/Button.module.css";

import { Roboto } from "@next/font/google";
import Link from "next/link";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export function Button() {
  return (
    <>
      <Link href="https://pay.kiwify.com.br/moHMIDE">
        <button type="submit" className={styles.button}>
          <h4 className={`${roboto.className} ${styles.paragraph}`}>
            Revele a verdade hoje!
          </h4>
        </button>
      </Link>
    </>
  );
}
