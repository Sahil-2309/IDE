import React from 'react'
import './Register.css'
import { useForm } from 'react-hook-form'

const Register = () => {
  const { handleSubmit, register } = useForm()

  const onSubmit = (data) => {
    console.log('Email:', data.email)
    console.log('Username:', data.username)
    console.log('Password:', data.password)
  }

  return (
    <div className='register-form'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type='email'
            id='email'
            className='register-input'
            name='email'
            placeholder='Email'
            autoComplete='current-email'
            required
            {...register('email')}
          />
        </div>
        <div>
          <input
            type='text'
            id='username'
            className='register-input'
            name='username'
            placeholder='Username'
            autoComplete='current-username'
            required
            {...register('username')}
          />
        </div>
        <div>
          <input
            type='password'
            id='password'
            className='register-input'
            name='password'
            placeholder='Password'
            autoComplete='current-password'
            required
            {...register('password')}
          />
        </div>
        <button type='submit' className='register-button'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Register
