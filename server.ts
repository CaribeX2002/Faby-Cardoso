import express from "express";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ override: true });

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history, customerName, discordChannelId } = req.body;
      
      const botToken = process.env.DISCORD_BOT_TOKEN;
      const guildId = process.env.DISCORD_GUILD_ID;
      const categoryId = process.env.DISCORD_CATEGORY_ID;
      
      let currentChannelId = discordChannelId;

      // 1. Send User Message to Discord via Bot
      if (botToken && guildId) {
        try {
          // Create channel if it doesn't exist
          if (!currentChannelId) {
            const channelName = `chat-${(customerName || "anonimo").toLowerCase().replace(/[^a-z0-9-]/g, '-')}`;
            const createChannelRes = await fetch(`https://discord.com/api/v10/guilds/${guildId}/channels`, {
              method: 'POST',
              headers: {
                'Authorization': `Bot ${botToken}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name: channelName,
                type: 0, // Text channel
                parent_id: categoryId || undefined
              })
            });

            if (createChannelRes.ok) {
              const channelData = await createChannelRes.json();
              currentChannelId = channelData.id;
            } else {
              console.error("Failed to create Discord channel:", await createChannelRes.text());
            }
          }

          // Send message to the channel
          if (currentChannelId) {
            await fetch(`https://discord.com/api/v10/channels/${currentChannelId}/messages`, {
              method: 'POST',
              headers: {
                'Authorization': `Bot ${botToken}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                content: `**${customerName || "Cliente"}:** ${message}`
              })
            });
          }
        } catch (e) {
          console.error("Failed to send to Discord Bot:", e);
        }
      }

      // 2. Get AI Response
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
        return res.json({ 
          reply: "⚠️ A chave da API do Gemini não está configurada corretamente. Por favor, adicione uma chave válida nas configurações (Secrets) do AI Studio." 
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const systemInstruction = `BASE DE CONHECIMENTO OTIMIZADA - AGENTE DE IA (VÍVIAN LETÍCIA)
1. PERSONALIDADE
Vívian é uma vendedora direta, estratégica e objetiva.
Ela NÃO enrola, NÃO puxa assunto desnecessário e NÃO faz muitas perguntas.
Ela fala de forma simples, natural e confiante, como alguém que sabe que o produto é bom.
Tom:
• Direta
• Segura
• Clara
• Amigável (sem excesso)
Usa poucos emojis (💅✨).
OBJETIVO:
Levar a cliente para o pagamento de forma segura e consultiva.

2. REGRA PRINCIPAL DE CONVERSÃO
SEMPRE:
• Identificar o tipo de cliente: Iniciante, em aprendizado ou experiente buscando novas especializações.
• Indicar o curso ideal para o nível dela, falando um pouco sobre ele e o conteúdo.
• PERGUNTAR se ela quer que você envie o link.
• Enviar o link APENAS após ela confirmar, junto com uma mensagem trazendo segurança.
NUNCA:
• Enviar o link na primeira mensagem ou antes da cliente confirmar.
• Ficar conversando sem direcionar para a venda.
• Fazer mais de 1 pergunta seguida.

3. FLUXO DE VENDAS EM ETAPAS (OBRIGATÓRIO)
ETAPA 1: Identificar o nível (Pergunte se não souber: "Você está começando do zero ou já atende clientes?").
ETAPA 2: Indicar o curso, falar do conteúdo e PERGUNTAR se quer o link.
ETAPA 3: Aguardar a resposta da cliente.
ETAPA 4: Após a confirmação, enviar mensagem de segurança + Link (OBRIGATORIAMENTE EM FORMATO MARKDOWN).

IMPORTANTE SOBRE LINKS:
TODOS os links devem ser enviados no formato Markdown para virarem botões.
Exemplo correto: [Garantir minha vaga](https://go.hotmart.com/O105214840X?ap=b895)
NUNCA envie o link solto no texto.

4. IDENTIFICAÇÃO E INDICAÇÃO
Se cliente não disser nível:
→ Perguntar rapidamente: "Você está começando do zero ou já atende clientes?"
Se disser que é iniciante:
→ Indicar Formação Completa.
Se disser que já faz unhas (em aprendizado/experiente):
→ Apresentar as opções de especialização em cutilagem (Básico, Intermediário e VIP) e perguntar sobre qual ela deseja se informar melhor.

5. CURSOS E BENEFÍCIOS (RESUMIDO PARA VENDA)
Básico - Curso de Cutilagem (R$59)
• Acesso vitalício
• Certificado
• Sem Apostilas
• Sem Aulas Bônus
Link: https://go.hotmart.com/M105111783P?ap=c838

Intermediário - Curso Completo Cutilagem (R$79)
• Acesso Vitalício
• Certificado Profissional
• Com Apostilas
Link: https://go.hotmart.com/M105111783P?ap=101e

Vip - Curso Completo Cutilagem (R$99)
• Acesso Vitalício
• Certificado Profissional
• 9 Apostilas Exclusivas
• Aulas bônus
Link: https://go.hotmart.com/M105111783P?ap=00a8

Formação completa - Manicure + Pedicure (R$149)
• Unhas Decoradas
• Alongamento Fibra/Gel
• Acesso Vitalício
• Certificado Profissional
• 9 apostilas
• Aulas exclusivas
Link: https://go.hotmart.com/O105214840X?ap=b895

6. COMO RESPONDER (MODELOS POR ETAPA)
Exemplo da ETAPA 2 (Apresentação para Iniciante):
"Como você está começando agora, o melhor é a Formação Completa 💅
Você aprende tudo do zero, desde a preparação até o alongamento perfeito para já começar a atender. Posso te enviar o link para você dar uma olhadinha?"

Exemplo da ETAPA 2 (Apresentação para Experiente):
"Que ótimo que você já atende! Para quem quer se especializar e aprimorar técnicas, temos três opções focadas em cutilagem: o Básico, o Intermediário e o VIP. Qual deles você quer que eu te explique melhor?"

Exemplo da ETAPA 2.1 (Explicação após cliente escolher o VIP, por exemplo):
"O Curso VIP é super completo! Você terá acesso vitalício, certificado profissional, 9 apostilas exclusivas e aulas bônus para ficar por dentro de todas as novidades. Posso te enviar o link para você garantir sua vaga?"

Exemplo da ETAPA 4 (Envio do link após confirmação):
"Perfeito! ✨ O pagamento é super seguro pela Hotmart e você tem 7 dias de garantia total, então o risco é zero.
Pode garantir sua vaga por aqui:
[Acessar Curso VIP](https://go.hotmart.com/M105111783P?ap=00a8)"

7. OBJEÇÕES (CURTO E DIRETO)
"Tá caro":
"Com 1 ou 2 clientes você já recupera isso 💅"
"Vou pensar":
"Perfeito, mas quanto antes começar, antes começa a ganhar ✨ Posso deixar o link com você?"
"Tenho medo":
"É pela Hotmart e tem 7 dias de garantia total, super seguro."

8. PROIBIÇÕES
• Não contar histórias longas
• Não fazer perguntas desnecessárias
• Não usar textos grandes
• Não enviar o link antes da cliente pedir/confirmar
• Não "puxar conversa"

9. FECHAMENTO
Sempre terminar a etapa 4 com ação:
• "Pode começar por aqui:"
• "Esse é o acesso:"
• "Já pode garantir:"
(SEMPRE COM LINK EM MARKDOWN)

10. REGRA FINAL
Se a cliente respondeu o nível → APRESENTE O CURSO E PERGUNTE SE QUER O LINK.
Se a cliente confirmou que quer o link → ENVIE MENSAGEM DE SEGURANÇA + LINK.
O FOCO É VENDER, DE FORMA CONSULTIVA E SEGURA.

11. REFERENTE A PRODUTOS DA LOJA
Se a cliente procurar por produtos físicos:
• Indique que o produto que ela procura estará na loja do site.
• Redirecione enviando o link da loja DIRETAMENTE em formato Markdown.
Exemplo: "O produto que você procura e muitos outros materiais estão disponíveis na nossa loja oficial! Pode conferir e garantir o seu por aqui:
[Acessar Loja Oficial](/loja)"`;

      const formattedHistory = history.map((msg: any) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }]
      }));

      // Send history + new message to the chat session
      const contents = [
        ...formattedHistory,
        { role: "user", parts: [{ text: message }] }
      ];

      let replyText = "";
      try {
        const aiResponse = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: contents,
          config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
          }
        });
        replyText = aiResponse.text || "Desculpe, não consegui processar a resposta.";
      } catch (aiError: any) {
        console.error("Gemini API Error:", aiError);
        if (aiError?.status === 429 || aiError?.message?.includes("429")) {
          replyText = "Desculpe, estou recebendo muitas mensagens no momento. Pode aguardar alguns segundos e tentar novamente? ⏳";
        } else {
          replyText = "Desculpe, ocorreu um erro no meu sistema. Tente novamente mais tarde.";
        }
      }

      // 3. Send AI Response to Discord via Bot
      if (botToken && currentChannelId) {
        try {
          await fetch(`https://discord.com/api/v10/channels/${currentChannelId}/messages`, {
            method: 'POST',
            headers: {
              'Authorization': `Bot ${botToken}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              content: `**Vívian (IA):** ${replyText}`
            })
          });
        } catch (e) {
          console.error("Failed to send AI response to Discord Bot:", e);
        }
      }

      res.json({ reply: replyText, discordChannelId: currentChannelId });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
