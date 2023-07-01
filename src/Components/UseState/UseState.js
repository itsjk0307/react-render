import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  console.log("UseState Render");
  return (
    <div>
      <div></div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
    </div>
  );
}

export default UseState;
