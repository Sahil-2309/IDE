import React from 'react'
import './Login.css'
import { useForm } from 'react-hook-form'

const Login = () => {
  const { handleSubmit, reset, register } = useForm()
  const onSubmit = (data) => {
    console.log('Username:', data.username)
    console.log('Password:', data.password)
    reset()
  }

  return (
    <div className='login-form'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <div>
          <input
            type='text'
            id='username'
            className='login-input'
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
            className='login-input'
            name='password'
            placeholder='Password'
            autoComplete='current-password'
            required
            {...register('password')}
          />
        </div>
        <button type='submit' className='login-button'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login
