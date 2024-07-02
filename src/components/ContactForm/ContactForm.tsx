'use client'

import { useState, useCallback } from 'react'
import { DataForm } from '../../types/ContactForm'
import Input from './Input'
import styles from './ContactForm.module.css'

export default function ContactForm(): JSX.Element {
  const [data, setData] = useState<DataForm>({
    name: '',
    email: '',
    message: '',
  })
  const [success, setSuccess] = useState(false)

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setSuccess(true)
      console.log(data)
    },
    [data]
  )

  return (
    <section>
      <h2 className='section-title'>Contactame</h2>
      <form className='contact-form' onSubmit={handleSubmit}>
        <Input
          label='Nombre'
          required
          value={data?.name}
          onChange={e => setData({ ...data, name: e.target.value })}>
          Ingresa tu nombre
        </Input>
        <Input
          label='Email'
          required
          value={data?.email}
          onChange={e => setData({ ...data, email: e.target.value })}>
          Ingresa tu email
        </Input>
        <Input
          label='Mensaje'
          value={data?.message}
          type='textarea'
          onChange={e => setData({ ...data, message: e.target.value })}>
          Ingresa tu mensaje
        </Input>
        <button type='submit' className={styles.formButton}>
          Enviar
        </button>
      </form>

      {success && <p className={styles.successMessage}>Mensaje enviado!</p>}
    </section>
  )
}
