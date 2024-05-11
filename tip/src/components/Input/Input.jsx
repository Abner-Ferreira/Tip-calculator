import React, { useContext, useState } from 'react'
import dollar from '../../assets/icon-dollar.svg'
import styles from './input.module.css'
import { CalculatorContext } from '../../context/CalculatorContext'

export default function Input({ title }) {

  const { billTot, setBillTot, personTot, setPersonTot } = useContext(CalculatorContext)

  const [validPerson, setValidPerson] = useState(false)

  const checkPerson = (e) => {
    if (e <= 0) {
      setValidPerson(true)
      return
    }
    setValidPerson(false)
    setPersonTot(e)
  }

  return (
    <>
      <section className={styles.containerInput}>
        {
          title === "Bill"
            ? (
              <>
                <legend>{title}</legend>
                <input type="number" placeholder={0} min={0} id={styles.bill} value={billTot} onChange={e => setBillTot(e.target.value)} />

              </>
            ) : (
              <>
                <legend> {title} <span className={[validPerson ? styles.warning : styles.default]}>Can't be zero</span></legend>

                <input type="number" placeholder={0} value={personTot} onChange={(e) => checkPerson(e.target.value)} id={styles.people} className={[validPerson ? styles.warningInput : ""]} />
              </>
            )
        }
      </section>
    </>
  )
}
