import React, {useState} from "react";
import useForm from "./useForm";
import InputText from "../InputText";
import Button from "../Button";

const Validation = () => {
  const cep = useForm('cep')
  const sobrenome = useForm(false)
  const email = useForm('email')
  const nome = useForm('nome')

  const [ sucesso, setSucess ] = useState(false)
  const [ erro, setError ] = useState(false)

  function handleSubmit(event) {
    setSucess(false);
    setError(false)
    event.preventDefault();
    if (cep.validate()) {
      setSucess(true);
    } else {
      setError(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
       <InputText
       label={'Nome'}
        id="nome"
        type="text"
        value={nome.value}
        placeholder="Nome"
        {...nome}
      />
       <InputText
        label={'Sobrenome'}
        id="sobrenome"
        type="text"
        value={sobrenome.value}
        placeholder="Sobrenome"
        {...sobrenome}
      />
       <InputText
        label={'Email'}
        id="email"
        type="text"
        value={email.value}
        placeholder="Email"
        {...email}
      />
      <InputText
        label={'Cep'}
        id="cep"
        type="text"
        value={cep.value}
        placeholder="00000-000"
        {...cep}
      />
      {cep.error && <label>{cep.error}</label>}
      <Button type="submit" style={{marginTop: '10px'}} texto={"Enviar"}/>
      {sucesso && <p>Dados enviados com sucesso</p>}
      {erro && <p>Ocorreu um erro ao enviar os dados</p>}
    </form>
  );
};

export default Validation
