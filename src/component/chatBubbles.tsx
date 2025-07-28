import React, { useState, useRef, useEffect } from "react";

function Bubble({
  children,
  isOwnMessage = false,
  backgroundColor = "#0084ff",
  textColor = "white",
}) {
  return (
    <div
      style={{
        ...styles.container,
        backgroundColor,
        alignSelf: isOwnMessage ? "flex-end" : "flex-start",
      }}
    >
      <div style={{ ...styles.content, color: textColor }}>
        {children || "test"}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "70%",
    padding: "12px 16px",
    borderRadius: "18px",
    marginBottom: "8px",
    wordWrap: "break-word",
  },
  content: {
    fontSize: "16px",
    lineHeight: "1.4",
  },
};

export default Bubble;
