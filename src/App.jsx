import './App.css'
import PesquisarCep from './components/BuscaCep'
import NavBar from './layout/Nav.jsx'
import Footer from './layout/Footer.jsx'
function App() {
  

  return (
    <div className='grid'>

      <div className='header'>
         <NavBar/>
      </div>

      <div className='main'>
        <PesquisarCep/>
      </div>

      <div className='footer'>
        <Footer/>
      </div>
    </div>
  )
}

export default App
