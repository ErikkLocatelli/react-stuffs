// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
import React from "react";
import Clients from "./components/clients";
import Arrays from "./components/arrays";
import ArrayExec from "./components/arraysExec";

const App = () => {
  return (
    <div>
      <h1>Exercicíos: </h1>
      <Clients />
      {/* <Arrays /> */}
      <ArrayExec />
    </div>
  )
};

export default App
