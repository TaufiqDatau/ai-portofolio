import React, { useState, useRef, useEffect } from "react";

function Input() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef(null);

  // Auto-resize textarea based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      // Handle sending message
      console.log("Sending:", value);
      setValue("");
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.textContainer}>
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type a message..."
            style={styles.textarea}
            rows={1}
          />
        </div>
        <div style={styles.buttonContainer}>
          <button
            type="submit"
            disabled={!value.trim() || loading}
            style={{
              ...styles.button,
              backgroundColor: value.trim()
                ? styles.button.backgroundColor
                : "#cccccc",
            }}
          >
            {loading ? "Loading" : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    border: "solid 1px",
    borderRadius: "1rem",
    padding: "5px",
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  textarea: {
    resize: "none",
    width: "inherit",
    fontSize: "20px" /* Font size */,
    lineHeight: "1.5" /* Line spacing (optional) */,
    padding: "10px" /* Inner spacing */,
    fontFamily: "Arial, sans-serif" /* Font family (optional) */,
    border: "0",
    maxHeight: "15vh",
    outline: "none",
  },
  textContainer: {
    display: "flex",
    width: "100%",
  },
  button: {
    margin: "0",
    borderRadius: "50%",
    height: "48px",
    width: "48px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "end",
    width: "100%",
    paddingHorizontal: "2rem",
  },
};

export default Input;
