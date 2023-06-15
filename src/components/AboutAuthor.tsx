import Image from "next/image";
import styles from "@/styles/AboutAuthor.module.css";

// import { Roboto } from "next/font/google";

// const roboto = Roboto({
//   weight: "400",
//   subsets: ["latin"],
// });

export default function AboutAuthor() {
  return (
    <>
      <div className={styles.about_author}>
        <Image
          className={styles.image}
          src="/images/alex-manson.jpg"
          width={100}
          height={100}
          alt="Dr. Alex Manson"
        />
        <h2>Quem é Alex Manson</h2>
        <p>
          Alex Manson é um renomado especialista em relacionamentos, com foco em
          estudos comportamentais para analisar a infidelidade em casais. Ele
          obteve seu doutorado em Psicologia, com ênfase em Comportamento Humano
          e Relacionamentos Interpessoais, na prestigiosa Universidade de
          Harvard. Ao longo de sua carreira, Manson tem se dedicado a ajudar
          pessoas a entenderem e lidarem com as complexidades dos
          relacionamentos amorosos e a infidelidade. Manson conduziu uma série
          de estudos inovadores que comprovam os métodos e abordagens
          apresentados em seu ebook.
        </p>
        <p>
          Com um profundo conhecimento em psicologia, comportamento humano e
          relacionamentos, Alex Manson é considerado uma autoridade no estudo da
          infidelidade e seus efeitos nos casais. Seu ebook baseia-se em anos de
          pesquisa e experiência prática, fornecendo insights valiosos e
          orientações para aqueles que buscam entender e lidar com a
          infidelidade em seus relacionamentos.
        </p>
      </div>
    </>
  );
}
