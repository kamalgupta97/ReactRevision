import { useState } from "react";

export const Child = ({ count, setCount, frequency }) => {
  useState(() => {
    setCount(count + 1)
  })
  console.log("Hey")
  let data = [1, 2, 3, 4]
  return (
    <div>
      {data.map((item) => (
        <li>{count}</li>
      ))}
    </div>
  );
};
