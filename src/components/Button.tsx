import styles from "@/styles/Button.module.css";

import Image from "next/image";
import Link from "next/link";

export default function Button({ showContainer = true }) {
  return (
    <>
      <Link href="https://pay.kiwify.com.br/moHMIDE">
        <button type="submit" className={styles.button}>
          <h4 className={`${styles.paragraph}`}>
            Compre agora!
          </h4>
        </button>
      </Link>
      {showContainer && (
        <div className={styles.container}>
          <div className={styles.content}>
            <Image
              src="/images/comprasegura.png"
              height={25}
              width={25}
              alt="Compra Segura"
            />
            <p className={styles.p}>
              Compra <span>Segura</span>
            </p>
          </div>

          <div className={styles.content}>
            <Image
              src="/images/satisfacao-garantida.png"
              height={25}
              width={25}
              alt="Satisfação Garantida"
            />
            <p className={styles.p}>
              <span>Satisfação</span> Garantida
            </p>
          </div>

          <div className={styles.content}>
            <Image
              src="/images/privacidade.png"
              height={25}
              width={25}
              alt="Privacidade Protegida"
            />
            <p className={styles.p}>
              <span>Privacidade</span> Protegida
            </p>
          </div>
        </div>
      )}
    </>
  );
}
