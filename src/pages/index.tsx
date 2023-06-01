/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import { Roboto } from "@next/font/google";
import styles from "@/styles/Home.module.css";

import { Formulario } from "@/components/Formulario";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/Button";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Desvendando a Traição: Como identificar sinais de infidelidade no seu
          relacionamento.
        </title>
        <meta
          name="description"
          content="Com o nosso e-book 'Desvendando a Traição', você receberá ferramentas e insights para detectar os sinais de infidelidade e tomar as ações necessárias. Restaure a felicidade e a confiança no seu relacionamento."
        />
        <meta
          name="keywords"
          content="traicao, infidelidade, relacionamento, sinais de traicao, como superar traicao, ebook, guia"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Alex Manson" />
        <meta
          property="og:title"
          content="Desvendando a Traição: Como identificar sinais de infidelidade no seu relacionamento."
        />
        <meta
          property="og:description"
          content="Com 'Desvendando a Traição', fornecemos a você ferramentas e insights para detectar os sinais sutis de infidelidade, capacitando você a enfrentar a verdade e tomar as ações necessárias."
        />
        <meta property="og:image" content="/images/mockup-ebook.jpg" />
        <meta
          property="og:url"
          content="desvendandoatraicao.dralexmenson.com"
        />
        <link
          rel="canonical"
          href="https://desvendandoatraicao.dralexmenson.com"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Desvendando a Traição" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@seu_usuario" />
        <meta
          name="twitter:title"
          content="Desvendando a Traição: Como identificar sinais de infidelidade no seu relacionamento."
        />
        <meta
          name="twitter:description"
          content="Com 'Desvendando a Traição', fornecemos a você ferramentas e insights para detectar os sinais sutis de infidelidade, capacitando você a enfrentar a verdade e tomar as ações necessárias."
        />
        <meta name="twitter:image" content="/images/mockup-ebook.jpg" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.ico"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={roboto.className}>
            Não Fique Mais no Escuro: Descubra os Sinais de
            <span> Infidelidade</span> e Restaure a Paz no seu Relacionamento
            com o Guia "Desvendando a Traição"!
          </h1>
        </div>
        <div className={styles.introduction}>
          <p className={roboto.className}>
            Já perdeu o sono, atormentado pela incerteza em seu relacionamento?
            Pequenas mudanças de comportamento do seu parceiro despertam dúvidas
            e medos em você? A suspeita de infidelidade tem corroído a alegria
            do seu amor. É por isso que apresentamos "Desvendando a Traição",
            para dissipar as sombras da desconfiança, permitindo-lhe retomar o
            controle e restaurar a paz em seu relacionamento.
          </p>
          <Button />
        </div>
        <div className={styles.problem_demonstration}>
          <p className={roboto.className}>
            A <span>infidelidade</span> é um problema doloroso e, infelizmente,
            comum. Muitas vezes, os sinais estão lá, mas não conseguimos
            reconhecê-los. Viver com a suspeita constante pode arruinar a
            confiança, o amor e a felicidade em um relacionamento.
          </p>
        </div>
        <div className={styles.sales_video}>
          <video
            width="100%"
            height="auto"
            controls
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/desvendando a traicao.mp4" type="video/mp4" />
            Desculpe, seu navegador não suporta vídeos embutidos.
          </video>
        </div>
        <div className={styles.product_presentation}>
          <div className={styles.text}>
            <p className={roboto.className}>
              Com <span>"Desvendando a Traição"</span>, nós fornecemos a você
              ferramentas e insights para detectar os sinais sutis de
              infidelidade, capacitando você a enfrentar a verdade e tomar as
              ações necessárias.
            </p>
            <Button />
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/images/mockup-ebook.jpg"
              fill
              alt="ipad com pessoa lendo o ebook desvendando a traíção"
            />
          </div>
        </div>
        <div className={styles.product_details}>
          <p className={roboto.className}>
            O <span>Desvendando a Traição</span> é mais do que apenas um e-book,
            é um guia de vida real para a{" "}
            <span>restauração da confiança e da paz no seu relacionamento</span>
            . A <span>infidelidade</span> pode deixar cicatrizes profundas, mas
            com as ferramentas e insights certos, você pode tomar as rédeas da
            situação. Com este guia, você descobrirá como identificar os
            <span>
              {" "}
              comportamentos suspeitos, as mudanças de hábitos e os sinais
              emocionais e físicos de infidelidade
            </span>
            . Este recurso não apenas destaca os indicadores de traição, mas
            também oferece conselhos práticos, estudos de caso e estratégias
            para lidar com ela, o que inclui medidas preventivas e de
            fortalecimento do relacionamento. O e-book{" "}
            <span>Desvendando a Traição</span> foi desenvolvido para ajudá-lo a
            enfrentar os <span>desafios da infidelidade</span> e iniciar a
            jornada de cura. Não permita que a incerteza domine sua vida -
            obtenha clareza, respostas e uma rota de ação com{" "}
            <span>Desvendando a Traição</span> .
          </p>
          <br />
          <br />
          <Button />
        </div>
        <div>
          <Testimonials />
        </div>
        <div className={styles.more_product_details}>
          <h2 className={roboto.className}></h2>
          <p className={roboto.className}>
            "Desvendando a Traição" oferece uma exploração profunda e sensível
            da <span>infidelidade</span>, examinando seu impacto nos
            relacionamentos e oferecendo orientação sobre como
            <span> identificar e reagir</span> aos{" "}
            <span>sinais de traição</span>. Este eBook fornece conselhos
            práticos e empáticos para lidar com a confiança quebrada, bem como
            estratégias para prevenir a<span> infidelidade</span> e fortalecer o
            relacionamento. Enfatizando a importância do autoconhecimento e da
            comunicação eficaz, este guia essencial é destinado a quem deseja
            restaurar a confiança e a paz em seu relacionamento.
          </p>
        </div>
        <div className={styles.lead_capture}>
          <Formulario />
        </div>
        <div className={styles.guarantee}>
          <h2 className={roboto.className}>Garantia de Satisfação Total</h2>
          <p className={roboto.className}>
            Nós acreditamos tanto na qualidade e eficácia do nosso guia
            Desvendando a Traição que oferecemos uma
            <span> garantia de devolução do dinheiro em até 7 dias</span>. Se
            por qualquer motivo você não estiver satisfeito com o conteúdo,
            basta nos enviar um email solicitando o reembolso, sem perguntas e
            sem complicações.
          </p>
        </div>

        <div className={styles.call_for_action}>
          <h2 className={roboto.className}>
            Não deixe a incerteza dominar a sua vida.{" "}
            <span>
              Clique no botão abaixo para comprar Desvendando a Traição
            </span>{" "}
            e comece a restaurar a confiança em seu relacionamento hoje mesmo!
          </h2>
          <Button />
        </div>
      </main>
    </>
  );
}
