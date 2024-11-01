import React from "react";

export default async function TestData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();

  console.log("d", data);

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
}
