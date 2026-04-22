import React, {useState} from 'react'
import Radio from './Radio'
import Titulo from '../Titulo'
import Produtos from '../Produtos';
import Button from '../Button';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const ChalengeForm = () => {

  const [index, setIndex] = useState(0); 
  const [acerto, setAcerto] = useState(0);
  const [respostas, setResposta] = useState([])
  const pergunta = perguntas[index];
  const [resposta, setRespostaAtual] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        const acertou = resposta === pergunta.resposta;

        if(acertou) {
            setAcerto(acerto + 1)
        }
        setResposta([...respostas, {
            id: resposta.id, 
            resposta: resposta, 
            correta: acertou
        }])
        setIndex(index + 1)
        setRespostaAtual("")
    }

    const handleChange = ({target}) => {
        if(target.checked) {
            setRespostaAtual(target.value);
        }
    }

    const handleRestart = () => {
        setAcerto(0)
        setIndex(0)
    }

 
  return (
   <form onSubmit={index == 4 ? handleRestart : handleSubmit}>
    <Titulo texto={index < perguntas.length ? pergunta.pergunta : "Desempenho:"}/>
    {index < perguntas.length && pergunta.options.map((opt) => (
        <Radio dado={opt} key={opt} value={opt} onChange={handleChange} name={pergunta.id} required />
    ))}
    {index == perguntas.length && <div>
        <p>{acerto}/{perguntas.length}</p>
        <p>Suas Respostas: </p>
        {respostas.map(({resposta, correta}) => (
            <p className={correta ? 'right' : 'whrong'}>{resposta}</p>
        ))}
    </div>}
    
    <Button texto={index == perguntas.length ? "Tentar novamente" : "Próxima"} type={"submit"} />
   </form>
  )
}

export default ChalengeForm
