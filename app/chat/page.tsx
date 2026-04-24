"use client"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "motion/react"
import { Card } from "@/components/ui/card"
export default function Page() {
  const router = useRouter()

  // type Message = {
  //   role: "user" | "assistant"
  //   content: string
  // }
  // chat history data
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hey there! , how can i help you today?",
    },
  ])

  // user input
  const [input, setInput] = useState("")

  const send = async () => {
    if (!input.trim()) return
    const userText = input
    setInput("")

    // add message to history
    setMessages((prev) => [...prev, { role: "user", content: userText }])
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: messages }),
    })
    if (!res.ok) {
      console.log("fetch failed")
      return
    }
    const data = await res.json()

    setMessages((prev) => [...prev, { role: "assistant", content: data.reply }])
  }
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
      className="flex min-h-svh flex-col p-0"
    >
      {/*minimal top bar*/}
      <div className="fixed top-0 h-12 w-full bg-[#090b0c] p-2">
        <h1
          onClick={() => router.push("../")}
          className="cursor-default text-2xl sm:text-5xl"
        >
          Rem.ai
        </h1>
      </div>
      {/*Message/history area*/}
      <div className="mt-12 flex flex-1 flex-col items-center justify-end">
        <div className="max-h-2xl flex w-full flex-1 flex-col items-center justify-center overflow-y-auto px-2 pt-12 sm:max-w-2xl">
          {messages.map((m, i) => (
            <div key={i} className="flex w-full items-start justify-end">
              {m.role === "user" ? (
                <Card
                  className="m-2 flex w-auto max-w-xl items-end p-2 text-2xl sm:max-w-2xl"
                  key={i}
                >
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {m.content}
                  </ReactMarkdown>
                </Card>
              ) : (
                <Card
                  className="m-2 mr-auto w-3/5 p-2 text-2xl sm:max-w-2xl"
                  key={i}
                >
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {m.content}
                  </ReactMarkdown>
                </Card>
              )}
            </div>
          ))}
        </div>
        {/*Input bar*/}
        <div className="sticky bottom-0 flex w-full max-w-3xl flex-col items-center gap-2 bg-[#090b0c] p-4">
          <div className="jusitfy-center relative flex w-full max-w-3xl">
            <Textarea
              className="mx-auto no-scrollbar h-auto min-h-4 max-w-5xl resize-none rounded-2xl border border-gray-700 bg-gray-900 p-4 pr-14 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-gray-600 focus:outline-none sm:w-full"
              placeholder="Ask rem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  send()
                }
              }}
            />

            <button
              onClick={() => send()}
              className="absolute right-3 bottom-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 transition hover:bg-gray-600"
            >
              <ArrowRight size={18} className="text-white" />
            </button>
          </div>
          <span className="text-[10px] text-gray-400 sm:text-[15px]">
            Rem.ai can make mistakes, double check responses.
          </span>
        </div>
      </div>
    </motion.div>
  )
}
