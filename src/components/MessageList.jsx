export default function MessageList({ messages }) {
    return (
      <>
        {
          messages?.map((message) => (
            <div key={message.id} style={{
              marginBottom: "20px",
              padding: "12px",
              backgroundColor: "#f3e5f5", 
              borderRadius: "10px", 
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)", 
              maxWidth: "80%",
              marginLeft: "auto",
              marginRight: "auto",
              wordWrap: "break-word",
              lineHeight: "1.5", 
              fontFamily: "'Arial', sans-serif", 
            }}>
              <span style={{
                color: "#9c4dcc", 
                fontSize: "1.1em",
                fontWeight: "bold", 
              }}>
                {message.author.name}: 
              </span>
              <p style={{
                marginTop: "5px", 
                color: "#333", 
                fontSize: "1em", 
              }}>
                {message.content}
              </p>
            </div>
          ))
        }
      </>
    )
  }
  