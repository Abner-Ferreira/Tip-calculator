import React, { useState } from 'react'
import styles from './porcentsTips.module.css'
import Button from '../Button/Button'

export default function PorcentsTips() {


  const [customValue, setCustomValue] = useState(0)



  return (
    <>
      <section className={styles.containerTips}>
        <span>Select Tip %</span>
        <div className={styles.porcents}>
          <Button />
        </div>
      </section>

    </>
  )
}
