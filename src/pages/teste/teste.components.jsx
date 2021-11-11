import React, { useState, useEffect } from "react";
//import "./teste.styles.scss";
import { TestePageContainer } from "./teste.styles";

const Teste = () => {
  const [texto, setTexto] = useState("TESTE");
  const [botao, setBotao] = useState("BOTAO");
  useEffect(() => {
    console.log(new Date(), "O texto é:", texto);
  }, [texto]);
  return (
    <TestePageContainer>
      <div>{texto}</div>
      <button onClick={() => setTexto(texto + "!")}>{botao}</button>
      <button onClick={() => setBotao(botao + "?")}>EITA</button>
    </TestePageContainer>
  );
};
export default Teste;
