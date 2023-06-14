// import Image from "next/image";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
SwiperCore.use([Autoplay, Navigation, Pagination]);
import styles from "@/styles/Testimonials.module.css";

// import { Roboto } from "next/font/google";

// const roboto = Roboto({
//   weight: "400",
//   subsets: ["latin"],
// });

const testimonialsData = [
  {
    image: "/images/image11.jpg",
    person: "Joana, 35 anos, Rio de Janeiro",
    text: "Depois de passar por uma traição no meu casamento, achei que nunca conseguiria superar a dor. Este e-book me ensinou a importância do autoconhecimento e do diálogo aberto no relacionamento. Com as orientações e reflexões propostas, consegui me reerguer e trabalhar junto com meu parceiro na reconstrução da nossa relação. Hoje, somos mais fortes e unidos do que nunca.",
  },
  {
    image: "/images/image2.jpg",
    person: "Felipe, 28 anos, Rio de Janeiro",
    text: "O e-book abriu meus olhos para a importância da comunicação no relacionamento. Aprendi a estabelecer limites claros e expectativas para o comportamento, além de resolver conflitos de forma saudável. Isso mudou completamente minha vida amorosa e me ajudou a construir uma relação mais sólida e feliz com minha namorada.",
  },
  {
    image: "/images/image3.jpg",
    person: "Mariana, 42 anos, Curitiba",
    text: "Este e-book veio no momento certo da minha vida. Estava passando por dificuldades no meu relacionamento e, graças às estratégias de prevenção da traição apresentadas, consegui reconectar-me emocional e fisicamente com meu marido. Nossa relação melhorou muito, e agora temos uma parceria mais forte e saudável.",
  },
  {
    image: "/images/image4.jpg",
    person: "Daniel, 31 anos, Belo Horizonte",
    text: "Nunca imaginei que um e-book pudesse ter um impacto tão profundo na minha vida. As lições sobre autoconhecimento e comunicação aberta me fizeram repensar minha abordagem aos relacionamentos e me tornaram um parceiro melhor. Meu relacionamento atual é o mais saudável e feliz que já tive, graças a este livro.",
  },
  {
    image: "/images/image5.jpg",
    person: "Luciana, 38 anos, Salvador",
    text: "Após ser traída em um relacionamento anterior, tinha dificuldades em confiar novamente em alguém. Este e-book me proporcionou as ferramentas necessárias para enfrentar meus medos e trabalhar na construção de uma relação saudável e confiável com meu atual parceiro. Sou eternamente grata por esta leitura transformadora.",
  },
  {
    image: "/images/image6.jpg",
    person: "Carlos, 32 anos, Recife",
    text: "Eu sempre tive dificuldade em expressar meus sentimentos e pensamentos, o que causava problemas nos meus relacionamentos. Ao ler este e-book, entendi a importância do diálogo aberto e honesto e aprendi a me comunicar de maneira mais eficaz com minha esposa. Isso fortaleceu nossa relação e trouxe mais harmonia e compreensão para nossa vida.",
  },
  {
    image: "/images/image7.jpg",
    person: "Fernanda, 29 anos, Brasília",
    text: "Sempre acreditei que a traição seria o fim de qualquer relacionamento, mas este e-book me mostrou o contrário. Aprendi que, com paciência, trabalho duro e comprometimento, é possível reconstruir a relação após a traição. As reflexões e dicas deste livro me ajudaram a perdoar meu parceiro e a reconstruir nossa vida juntos de forma mais saudável e amorosa.",
  },
];

export function Testimonials() {
  return (
    <>
      <div className={styles.testimonies}>
        <h2>O Poder da Mudança: Depoimentos Inspiradores de Nossos Leitores</h2>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          breakpoints={{
            // quando a tela tem no mínimo 640px, exibe 2 slides por view
            640: {
              slidesPerView: 2,
            },
            // quando a tela tem no mínimo 768px, exibe 3 slides por view
            768: {
              slidesPerView: 3,
            },
            // quando a tela tem no mínimo 1024px, exibe 4 slides por view
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {testimonialsData.map((item, index) => (
            <SwiperSlide key={index}>
              {/* <Image
                src={item.image}
                alt={item.person}
                width={500}
                height={300}
              /> */}
              <h4>{item.person}</h4>
              <p>{item.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
