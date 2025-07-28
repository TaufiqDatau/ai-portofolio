import React from "react";
import Input from "/src/component/textInput.tsx";
import Bubble from "/src/component/chatBubbles.tsx";

function HomePage() {
  return (
    <div>
      <Bubble />
      <Input />
    </div>
  );
}

export default HomePage;
