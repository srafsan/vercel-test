import React from 'react'
import styles from '../styles/Intro.module.css'
import Image from 'next/image'
import Circle from './Circle'

const Intro = () => {
  return (
    <div className={styles.container}>
        <Circle backgroundColor='#b0ff449' top="-50vh" left="-50vh"/>
        <Circle backgroundColor='#01c686' right="-40vh"/>
       <div className={styles.card}>
        <h1 className={styles.title}>
            <span className={styles.brand}>
              PABON
            </span>
                DIGITAL PRODUCT AGENCY</h1>
            <p className={styles.description}>Create live segments and target the right people for message based on their behaviors</p>
            <button className={styles.button}>Discover</button>
       </div>
       <div className={styles.card}>
       <Image
        src='/img/Avocado.png'
        alt="Avocado"
        width={'100px'}
        height={"100px"}
        layout='fill'
      />
       </div>
    </div>
  )
}

export default Intro