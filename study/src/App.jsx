// rafc
import React, {useState} from "react";
import Clients from "./components/clients";
import Arrays from "./components/arrays";
import ArrayExec from "./components/arraysExec";
import Events from "./components/events";
import Titulo from "./components/Titulo";
import Form from "./components/Form";
import Produtos from "./components/Produtos";
import States from "./components/States";
import FetchProdutos from "./components/FetchProdutos";
import Effect from "./components/Effect";
import Preference from "./components/Preference";
import UseRef from "./components/UseRef";
import Comprar from "./components/Comprar";
import UseStateComp from "./components/useState";
import Produto2 from "./components/Produto2";
import { GlobalStorage } from "./components/Context";
import Input from "./components/form/Input";
import ChalengeForm from "./components/form/chalengeForm";
import Anima from "./css-trial/components/anima";
import TestRoutes from "./components/routers/TestRoutes";
import Button from "./moreReact/Button";
import Header from './moreReact/Header'
import { useAsyncError } from "react-router-dom";
import Reducer from "./moreReact/Reducer";

const App = () => {

  const userNam = 'Erik Locatelli'
  const [contagem, setContar] = useState(0) 

  return (
    // <GlobalStorage>
    //   <Produto2 />
    // </GlobalStorage>
    // <div>
    //   <Input />
    // </div>
    <div>
      {/* <TestRoutes />
      <Button onClick={() => setContar(contagem + 1)}
       width = {100}
       backgroundColor = "red"
       text = {"oi"} />
      <Header /> */}
      <Reducer />
    </div>
  
  )
};

export default App
