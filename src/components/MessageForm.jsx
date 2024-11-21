"use client";

import { createMessage } from "@/utils/api-chat";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MessageForm({ onMessageSent }) {

  const [content, setContent] = useState("")
  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault();
    const username = localStorage.getItem("chatUsername")

    if (!username) {
      router.push("/")
    }

    if (content.trim()) {
      try {
        await createMessage(username, content);
        setContent("");
        onMessageSent();
      } catch (error) {
        console.log("Error enviando mensaje", error)
      }
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginTop: "20px",
        width: "100%",
        maxWidth: "400px"
      }}>
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          rows={3} 
          placeholder="Escribe un mensaje..." 
          required 
          style={{
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "100%",
            fontSize: "1.1em",
            outline: "none"
          }} 
        />
        <button 
          type="submit" 
          style={{
            padding: "10px 20px",
            backgroundColor: "#9c4dcc",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1em"
          }}>
          Enviar
        </button>
      </form>
    </>
  )
}
