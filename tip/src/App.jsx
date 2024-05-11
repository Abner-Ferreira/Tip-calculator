import './App.css'
import Calculator from './components/Calculator/Calculator'
import logo from './assets/logo.svg'
import CalculatorProvider from './context/CalculatorContext'

function App() {

  return (
    <>
      <CalculatorProvider>
        <main className='container'>
          <img src={logo} alt="logo" />
          <Calculator />


        </main>

      </CalculatorProvider>

    </>
  )
}

export default App
