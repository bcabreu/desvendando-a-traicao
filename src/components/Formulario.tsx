import React, { useState } from "react";
import styles from "@/styles/Formulario.module.css";

// import { Roboto } from "next/font/google";

// const roboto = Roboto({
//   weight: "400",
//   subsets: ["latin"],
// });

export function Formulario() {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      // Limpe os campos após o sucesso
      setEmail("");
      setStatusMessage("Inscrição bem sucedida!");
    } catch (error) {
      console.error(error);
      setStatusMessage(
        "Erro ao se inscrever. Por favor, tente novamente mais tarde."
      );
    }

    // Remova a mensagem após 5 segundos
    setTimeout(() => setStatusMessage(""), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>
        Se inscreva e ganhe o <span>primeiro capítulo</span> do ebook
        gratuitamente.
      </h3>
      <label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Digite seu e-mail"
        />
      </label>
      <input type="submit" value="Inscrever" />
      {statusMessage && (
        <p
          className={
            statusMessage === "Inscrição bem sucedida!"
              ? ` ${styles.statusMessageSuccess}`
              : ` ${styles.statusMessageError}`
          }
        >
          {statusMessage}
        </p>
      )}
    </form>
  );
}
