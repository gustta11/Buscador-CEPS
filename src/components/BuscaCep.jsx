import './BuscaCep.css'
import {useState} from 'react'

const PesquisarCep = () =>{

        const[Cep, setCep] = useState("")
        const[Endereco, setEndereco] = useState("")

        const EncontrarEndereco = async()=>{
            const response = await fetch(`https://viacep.com.br/ws/${Cep}/json/`)
            const data = await response.json()
            setEndereco(data)
            
        }


        const BuscarCep = (e)=>{
           const CepDigitado = e.target.value
           setCep(CepDigitado)
           
            

        }

        


    return(
        <div className='div_geral_pesquisa'>
            <div className='layout_pesquisa'>
                <input type="text" value={Cep} onChange={BuscarCep} placeholder='Digite aqui'/>
                <input type="button" value="Pesquisar" onClick={EncontrarEndereco} className='button_pesquisar'/>
            </div>
            <div className='layout_conteudo'>  
                        <ul>
                            <li>CEP:{Endereco.cep}</li>
                            <li>LOGRADOURO:{Endereco.logradouro}</li>
                            <li>BAIRRO:{Endereco.bairro}</li>
                            <li>CIDADE:{Endereco.localidade}</li>
                            <li>ESTADO:{Endereco.uf}</li>
                        </ul>
            </div>
        </div>
    )
}

export default PesquisarCep