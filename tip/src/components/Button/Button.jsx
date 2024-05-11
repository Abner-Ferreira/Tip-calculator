import React, { useContext, useState } from 'react'
import styles from './button.module.css'
import Input from '../Input/Input'
import { CalculatorContext } from '../../context/CalculatorContext'

export default function Button({ txt, porcent, ...rest }) {

  const { porcentagem, setPorcentagem, tipPerPerson, totalPerPerson, ativo, setAtivo } = useContext(CalculatorContext)

  
  const [showInput, setShowInput] = useState(false)

  const porcents = [{ porcent: 5, txt: "5%" }, { porcent: 10, txt: "10%" }, { porcent: 15, txt: "15%" }, { porcent: 25, txt: "25%" }, { porcent: 50, txt: "50%" }, { porcent: porcentagem, txt: "Custom" }]

  const handleClick = (index, e) => {
    setAtivo(index)
    if(index === 5) {
      return setShowInput(true), setPorcentagem(0)
    } 
    setShowInput(false)
    setPorcentagem(e.target.value)
    tipPerPerson()
    totalPerPerson()
  }
  
  const handleChange = (e) => {
    setPorcentagem(e.target.value)
  }
  
  const sendCustom = () => {
    tipPerPerson()
    totalPerPerson()
    
  }

  return (
    <>
      {porcents.map((porcent, i) => (
        i === 5 && showInput ? <input
          type="number"
          value={porcentagem}
          onChange={handleChange}
          onBlur={sendCustom}
          id={styles.customInput}
          placeholder="0"
        /> : i === 5 && !showInput ?

          <button key={porcent.txt}  className={ativo === i ? styles.active : styles.defaultCustom} onClick={() => handleClick(i)}>
            {porcent.txt}
          </button>
          :
          <button key={porcent.txt} value={porcent.porcent} className={ativo === i ? styles.active : styles.default} onClick={(e) => handleClick(i,e)}>
            {porcent.txt}
          </button>
      ))}

    </>
  )
}
