import type { NextApiRequest, NextApiResponse } from "next";

export default async function subscribe(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      const response = await fetch("https://api.sendinblue.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Aqui estamos acessando a variável de ambiente
          "api-key": `${process.env.SENDER_API_TOKEN}`,
        },
        body: JSON.stringify({
          email: email,
          listIds: [2], // Adicione aqui o ID da lista à qual o contato deve ser adicionado.
          updateEnabled: true, // Permite atualizar o contato se já existir.
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Erro ao se inscrever");

      res.status(200).json({ message: "Inscrição bem sucedida!" });
    } catch (error) {
      res.status(500).json({
        message: "Erro ao se inscrever. Por favor, tente novamente mais tarde.",
      });
    }
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}
