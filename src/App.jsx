import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  /* Definirali smo useState koji će zapisati
  vrijednost iz input polja u varijablu inputText,
  pomoću setter setInputText funkcije. */
  const [inputText, setInputText] = useState("");
  return (
    <>
      {/* SetInputText funkciju proslijedili
    u našu Form komponentu kao prop. */}
      <Form setInputText={setInputText} />
      <TodoList />
    </>
  );
}

export default App;
