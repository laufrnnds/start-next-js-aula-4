import DefaultLayout from "@/layout/default";
import { FormEvent, useState } from "react";

export default function Create() {
  const [fruit, setFruit] = useState<string>("");
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newFruit = JSON.stringify({ fruta: fruit });
    const response = await fetch("http://localhost:3333/frutas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: newFruit,
    });

    const data = await response.json();
    alert(data.msg);
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Criar Fruta</h2>
      <input
        type="text"
        name="name"
        value={fruit}
        onChange={(e) => setFruit(e.target.value)}
        style={{ color: "black" }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

Create.getLayout = DefaultLayout;
