import styles from "@/styles/AskAndAnswer.module.css";

export default function AskAndAnswer() {
  const qa = [
    {
      question:
        "Este eBook é apropriado para alguém que já passou por uma situação de infidelidade no relacionamento?",
      answer:
        "Sim, este eBook é especialmente útil para pessoas que passaram por infidelidade no relacionamento. Ele oferece orientação sobre como lidar com a confiança quebrada e sugere estratégias para restaurar a paz e a confiança no relacionamento.",
    },
    {
      question:
        "Eu posso usar este eBook para prevenir a infidelidade no meu relacionamento?",
      answer:
        "Absolutamente. O eBook Desvendando a Traição não apenas ajuda a lidar com a infidelidade, mas também fornece estratégias eficazes para prevenir a traição e fortalecer o relacionamento.",
    },
    {
      question:
        "O que o eBook Desvendando a Traição sugere como uma maneira de lidar com a quebra de confiança em um relacionamento?",
      answer:
        "O eBook sugere várias estratégias para lidar com a quebra de confiança, incluindo autoconhecimento, comunicação eficaz e conselhos empáticos e práticos para restaurar a confiança no relacionamento.",
    },
    {
      question:
        "Este eBook fala sobre como identificar os sinais de infidelidade?",
      answer:
        "Sim, o eBook Desvendando a Traição fornece orientações sobre como identificar os sinais de infidelidade em um relacionamento.",
    },
    {
      question:
        "E se eu não gostar do guia desvendando a traição, perco meu dinheiro?",
      answer:
        "Não, entendemos que cada leitor tem necessidades e expectativas individuais. Se você não ficar satisfeito com o eBook Desvendando a Traição, não se preocupe. Oferecemos uma garantia de reembolso de 100% do valor pago. Se você não estiver satisfeito, nós iremos reembolsá-lo imediatamente. ",
    },
  ];

  return (
    <div className={styles.container}>
      <h2>Perguntas e Respostas</h2>
      <div className={styles.list_qa}>
        {qa.map((item, index) => (
          <div key={index} className={styles.content}>
            <h3
              className={
                index % 2 === 0 ? styles.questionEven : styles.questionOdd
              }
            >
              {item.question}
            </h3>
            <p className={styles.answer}>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
