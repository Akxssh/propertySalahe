// import OpenAI from "openai"

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// })

// openrouter :
export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
      },
      body: JSON.stringify({
        model: "stepfun/step-3.5-flash",
        messages: [
          {
            role: "system",
            content: "You are Rem.ai, a helpful assistant.",
          },
          ...messages,
        ],
      }),
    })
    console.log("STATUS:", res.status)
    // console.log("BODY:", await res.text())
    if (!res.ok) {
      const errText = await res.text()
      console.error("OpenRouter API error:", res.status, errText)

      return Response.json({ reply: "API error occurred" }, { status: 500 })
    }

    const data = await res.json()

    return Response.json({
      reply: data.choices?.[0]?.message?.content ?? "No response",
    })
  } catch (err) {
    console.error("Route error:", err)

    return Response.json({ reply: "Server crashed" }, { status: 500 })
  }
}
// open ai:

// export async function POST(req: Request) {
//   try {
//     const { message } = await req.json()

//     const completion = await client.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         { role: "system", content: "You are a helpful assistant." },
//         { role: "user", content: "say hello" },
//       ],
//     })

//     const reply = completion.choices[0]?.message?.content ?? "No response"

//     return Response.json({ reply })
//   } catch (err) {
//     console.error("🔥 /api/chat error:", err)

//     return new Response(
//       JSON.stringify({
//         error: "Server crashed",
//         details: err instanceof Error ? err.message : String(err),
//       }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       }
//     )
//   }
// }
