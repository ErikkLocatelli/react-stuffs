// rafc
import React from "react";
import Clients from "./components/clients";
import Arrays from "./components/arrays";
import ArrayExec from "./components/arraysExec";
import Events from "./components/events";
import Titulo from "./components/Titulo";
import Form from "./components/Form";
import Produtos from "./components/Produtos";
import States from "./components/States";
import FetchProdutos from "./components/FetchProdutos";

const App = () => {

  const userNam = 'Erik Locatelli'

  return (
    <div>
      <FetchProdutos />
    </div>
  )
};

export default App
