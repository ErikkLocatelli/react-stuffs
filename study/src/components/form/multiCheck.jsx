import React, {useState} from 'react'
import Checkbox from './Checkbox'
import Button from '../Button'
import Radio from './Radio'

const MultiCheck = () => {
    
    const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];
    const [cores, setCores] = useState([])
    const [form, setForm] = useState(null)

    const handleSumbit = (e) => {
        e.preventDefault()
        if(cores.length > 0) {
            setForm(cores)
            console.log('Dados enviado":', cores)
        } else {
            console.log('Adicione ao menos um dado')
        }
    }

    const handleChange = ({target}) => {
        if (target.checked) {
            setCores([...cores, target.value])
        } else {
            setCores(cores.filter(item => item !== target.value ))
        }
    }

    console.log(cores)
  return (
    <div>
      <form onSubmit={handleSumbit}>
        {coresArray.map((item, index) => ( <Checkbox key={index} texto={item} value={item} onChange={handleChange} checked={cores.includes(item)} />))}
        <Button type={'submit'} texto={"Enviar"} />
      </form>
      {form && <p>Dados enviados com sucesso</p>}
      <Radio dados={coresArray} />
    </div>
  )
}

export default MultiCheck
