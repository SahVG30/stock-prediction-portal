import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/login/', formData)
      console.log('response.data=>', response.data)
      
      // Store token if your backend returns one
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
      }
      
      alert('Login successful!')
      // Redirect to dashboard or home page
      // window.location.href = '/dashboard'
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message)
      alert('Login failed: ' + (error.response?.data?.message || 'Invalid credentials'))
    }
  }

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
  }

  return (
    <div style={containerStyle}>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div style={formStyle}>
              <h3 className='text-light text-center mb-4'>Login</h3>
              <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <label htmlFor='email' className='form-label text-light'>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='password' className='form-label text-light'>Password</label>
                  <input
                    type='password'
                    className='form-control'
                    id='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type='submit' className='btn btn-primary w-100'>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login