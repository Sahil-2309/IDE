import React, { useState } from 'react'
import './Form.css'
import { FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa'
import Login from '../Login/Login'
import Register from '../Register/Register'

const Form = () => {
  const [mode, setMode] = useState('login')

  const registerM = () => {
    setMode('register')
    const bt = document.getElementById('btn')
    if (bt) {
      bt.style.left = '110px'
    }
  }
  const loginM = () => {
    setMode('login')
    const bt = document.getElementById('btn')
    if (bt) {
      bt.style.left = '0px'
    }
  }

  return (
    <div className='hero'>
      <div className='form-box'>
        <div className='button-box'>
          <div id='btn'></div>
          <button type='button' className='toggle-btn' onClick={loginM}>
            Log in
          </button>
          <button type='button' className='toggle-btn' onClick={registerM}>
            Register
          </button>
        </div>
        <div className='social-icons'>
          <FaFacebook className='icon' />
          <FaTwitter className='icon' />
          <FaGoogle className='icon' />
        </div>
        {mode === 'login' ? <Login /> : <Register />}
      </div>
    </div>
  )
}

export default Form
