import styles from "@/styles/Price.module.css";
import Button from "./Button";

export default function Price() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.oldPrice}>
          <h3>R$ 99,90</h3>
          <p>por apenas:</p>
        </div>
        <div className={styles.newPrice}>
          <p>
            <span>R$</span> 47,00
          </p>
        </div>
        <Button />
      </div>
    </>
  );
}
