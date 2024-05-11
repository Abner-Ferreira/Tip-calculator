import React, { useContext, useState } from 'react'
import styles from './calculator.module.css'
import Input from '../Input/Input'
import PorcentsTips from '../PorcentsTips/PorcentsTips'
import TipResult from '../TipResult/TipResult'
import { CalculatorContext } from '../../context/CalculatorContext'

export default function Calculator() {

  const { total, tipAmount, resetCalculator, reset, isReset } = useContext(CalculatorContext)

  

  const resetTip = () => {
    resetCalculator()
  }

  return (
    <>
      <section className={styles.container}>
        <div className={styles.calculator}>
          <Input title={"Bill"} />
          <div className={styles.porcentsContainer}>
            <PorcentsTips />
          </div>
          <Input title={"Number of People"} />
        </div>
        <div className={styles.result}>
          <div className={styles.divResult}>
            <TipResult title="Tip Amount" total={tipAmount} />
            <TipResult title="Total" total={total} />

          </div>
          <button id={styles.resetBtn} className={[reset ? styles.btnAtivo : ""]} disabled={isReset} onClick={resetTip}>Reset</button>
        </div>
      </section>
    </>
  )
}
