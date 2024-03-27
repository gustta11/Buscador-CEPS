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
        <div>
            <div className='layout_pesquisa'>
                <input type="text" value={Cep} onChange={BuscarCep} />
                <input type="button" value="Pesquisar" onClick={EncontrarEndereco} />
            </div>
            <div className='layout_conteudo'>
                <ul>
                    <li>{Endereco.cep}</li>
                    <li>{Endereco.logradouro}</li>
                    <li>{Endereco.bairro}</li>
                    <li>{Endereco.localidade}</li>
                    <li>{Endereco.uf}</li>
                </ul>
            </div>
        </div>
    )
}

export default PesquisarCep