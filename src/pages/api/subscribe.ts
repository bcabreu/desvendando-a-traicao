import type { NextApiRequest, NextApiResponse } from "next";

export default async function subscribe(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      const response = await fetch("https://api.sender.net/v2/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Aqui estamos acessando a variável de ambiente
          Authorization: `Bearer ${process.env.SENDER_API_TOKEN}`,
        },
        body: JSON.stringify({
          list_id: "sua_lista_id",
          email,
          // fields: { nome },
          options: { confirmation: "force" },
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
