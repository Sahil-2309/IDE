import React, { useState } from 'react'
import './Form.css'
import { FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa'
import Login from '../Login/Login'
import Register from '../Register/Register'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

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
    <Router>
      <div className='hero'>
        <div className='form-box'>
          <div className='button-box'>
            <div id='btn'></div>
            <Link to='/login'>
              <button type='button' className='toggle-btn' onClick={loginM}>
                Log in
              </button>
            </Link>
            <Link to='/register'>
              {' '}
              <button type='button' className='toggle-btn' onClick={registerM}>
                Register
              </button>
            </Link>
          </div>
          <div className='social-icons'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaGoogle className='icon' />
          </div>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default Form
