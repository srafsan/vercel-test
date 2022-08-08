import React from 'react'
import Circle from '../components/Circle'
import styles from '../styles/Contact.module.css'

function contact() {
  return (
    <div className={styles.container}>
        <Circle backgroundColor='green' left='-40vh' top='-20vh'/>
        <Circle backgroundColor='yellow' right='-30vh' bottom='-60vh'/>
        <h1 className={styles.title}>GET IN TOUCH</h1>
        <form className={styles.form} action="">
         <input className={styles.inputS} placeholder='Username' type="text" />
         <input className={styles.inputS} placeholder='Phone' type="text" />
         <input className={styles.inputL} placeholder='Email' type="text" />
         <input className={styles.inputL} placeholder='Subject' type="text" />
         <textarea className={styles.textArea} placeholder="Message" name="" id=""  rows={6}></textarea>
         <button className={styles.buttonS}>SUBMIT</button>
        </form>
    </div>
  )
}

export default contact