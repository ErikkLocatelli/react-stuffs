import React, {useState} from 'react'
import InputText from '../InputText'
import Button from '../Button'
import TextArea from './TextArea'
import Select from './Select'
import Titutlo from '../Titulo'
import Radio from './Radio'
import Checkbox from './Checkbox'
import MultiCheck from './multiCheck'
import Validation from './Validation'

const Input = () => {
    const produtos = ['celular', 'Geladeira', 'Smartphone']
    const [checkBox, setCheck] = useState(false)
    const [select, setSelect] = useState('')
    const [sucesso, setSucess] = useState(false)
    const [erro, setError] = useState(false)
    const [form, setForm] = React.useState({
        nome: '',
        email: '',
        senha: '',
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
    });

    const handleCheck = ({target}) => {
        setCheck(target.checked)
        console.log(checkBox)
    }

    const handleChange = ({target}) => {
        const { id, value } = target
        setForm({...form, [id]: value})
    }

    const handleSelect = ({target}) => {
        const {value} = target
        setSelect(value)
        console.log(select)
    }

    async function sendData(event) {
        event.preventDefault()
        setError(false)
        setSucess(false)        

        try {

            const response = await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
                });

            if(!response.ok) {
                throw new Error
            }

            setSucess(true)

        } catch(error) {
            setError(true)
        } 
    }

  return (
   <div>
       {/* <form onSubmit={sendData}>
        <Titutlo texto={"Teste formulário"} />
        <InputText label={"Nome"} id={"Nome"} value={form.nome} placeholder={"Escreva seu nome"} onChange={handleChange}/>
        <InputText label={"Email"} id={"Email"} value={form.email} placeholder={"Escreva seu email"} type={'email'} onChange={handleChange} />
        <InputText label={"Senha"} id={"Senha"} value={form.senha} placeholder={"Escreva sua senha"} type={'password'} onChange={handleChange} />
        <InputText label={"CEP"} id={"CEP"} value={form.cep} placeholder={"Escreva seu cep"} type={'text'} onChange={handleChange}/>
        <InputText label={"Rua"} id={"Rua"} value={form.rua} placeholder={"Escreva sua rua"} type={'text'} onChange={handleChange}/>
        <InputText label={"Número"} id={"Número"} value={form.numero} placeholder={"Escreva seu número"} type={'text'} onChange={handleChange}/>
        <InputText label={"Bairro"} id={"Bairro"} value={form.bairro} placeholder={"Escreva seu bairro"} type={'text'} onChange={handleChange}/>
        <InputText label={"Cidade"} id={"Cidade"} value={form.cidade} placeholder={"Escreva seu cidade"} type={'text'} onChange={handleChange}/>
        <InputText label={"Estado"} id={"Estado"} value={form.cidade} placeholder={"Escreva seu estado"} type={'text'} onChange={handleChange}/>
        <InputText type='select'/>
        <Button texto={"Enviar"} style={{marginTop: "10px"}}/>
        {sucesso && <p>Dados enviados com sucesso</p>}
        {erro && <p>Acontenceu um erro, tente novamente</p>}
        <TextArea label={"Envie sua mensagem"} id={"mensagem"} rows={"5"} />
        <Radio value="smartphone" texto={'smartphone'}/>
        <Checkbox onChange={handleCheck} value={'Notebook'} checked={checkBox} texto={"aceito os termos"}/>
       </form>
       <div>
        <Titutlo texto={"Teste Select"}/>
        <Select data={produtos} value={select} onChange={handleSelect} />
        <Titutlo texto={"Radio Button"} />
       </div> */}
       {/* <MultiCheck /> */}
       <Validation />
   </div>
  )
}

export default Input
