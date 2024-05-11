import React from 'react'
import styles from './tipResult.module.css'

export default function TipResult({title, total}) {
  return (
    <>
    <section className={styles.container}>
      <div className={styles.divTotal}>
        <p className={styles.title}>{title}</p>
        <span className={styles.span}>/ person</span>
      </div>
      <p className={styles.total}>
        ${total}
      </p>
    </section>

    </>
  )
}
