"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LobbyChat() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (username.trim()) {
      localStorage.setItem("chatUsername", username);
      router.push("/chat");
    }
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f3e5f5"
    }}>
      <h1 style={{
        color: "#9c4dcc",
        fontSize: "2.5em",
        marginBottom: "20px"
      }}>Lobby Chat</h1>
      <form onSubmit={handleSubmit} style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "400px"
      }}>
        <input 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          type="text" 
          placeholder="Ingrese nombre de usuario" 
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
    </div>
  );
}
