import React, { createContext, useState } from 'react'

export const CalculatorContext = createContext({})

export default function CalculatorProvider({ children }) {

  const [porcentagem, setPorcentagem] = useState(0)
  const [billTot, setBillTot] = useState(0)
  const [personTot, setPersonTot] = useState(0)
  const [tipAmount, setTipAmount] = useState('0.00')
  const [total, setTotal] = useState('0.00')

  const [reset, setReset] = useState(false)
  const [isReset, setIsReset] = useState(true)
  const [ativo, setAtivo] = useState(null)


  const tipPerPerson = () => {
    var total = ((billTot * porcentagem) / 100) / personTot
    setTipAmount(total.toFixed(2))
  }
  const totalPerPerson = () => {
    var total = billTot / personTot + Number(tipAmount)
    setTotal(total.toFixed(2))
    setIsReset(false)
    setReset(true)
  }

  const resetCalculator = () => {
    setBillTot(0)
    setPersonTot(0)
    setPorcentagem(0)
    setTipAmount(0)
    setTotal(0)
    setIsReset(true)
    setReset(false)
    setAtivo(null)
  }

  return (
    <CalculatorContext.Provider value={{ total, tipAmount, billTot, setBillTot, personTot, setPersonTot, porcentagem, setPorcentagem, tipPerPerson, totalPerPerson, resetCalculator, reset, isReset, ativo, setAtivo }}>
      {children}
    </CalculatorContext.Provider>
  )
}
