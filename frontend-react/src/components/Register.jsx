import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setErrors({
      ...errors,
      [e.target.name]: ''
    })
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required'
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters'
    } else if (formData.username.length > 20) {
      newErrors.username = 'Username must be at most 20 characters'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    } else if (formData.password.length > 50) {
      newErrors.password = 'Password must be at most 50 characters'
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter'
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one lowercase letter'
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one number'
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setSuccess('')
      return
    }

    setLoading(true)
    setErrors({})
    setSuccess('')

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', formData)
      console.log('response.data=>', response.data)
      setSuccess('Registration Successful')
      setFormData({ username: '', email: '', password: '' })
    } catch (error) {
      console.error('Registration error:', error.response?.data)
      setSuccess('')
      if (error.response?.data) {
        setErrors(error.response.data)
      } else {
        setErrors({ general: 'Registration failed. Please try again.' })
      }
    } finally {
      setLoading(false)
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

  const errorStyle = {
    color: '#ff6b6b',
    fontSize: '13px',
    marginTop: '5px',
    marginBottom: '10px'
  }

  return (
    <div style={containerStyle}>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div style={formStyle}>
              <h3 className='text-light text-center mb-4'>Create an Account</h3>
              <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <label htmlFor='username' className='form-label text-light'>Username</label>
                  <input
                    type='text'
                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    id='username'
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                    placeholder='3-20 characters'
                    required
                  />
                  {errors.username && (
                    <div style={errorStyle}>
                      {Array.isArray(errors.username) ? errors.username[0] : errors.username}
                    </div>
                  )}
                </div>

                <div className='mb-3'>
                  <label htmlFor='email' className='form-label text-light'>Email</label>
                  <input
                    type='email'
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='your@email.com'
                    required
                  />
                  {errors.email && (
                    <div style={errorStyle}>
                      {Array.isArray(errors.email) ? errors.email[0] : errors.email}
                    </div>
                  )}
                </div>

                <div className='mb-3'>
                  <label htmlFor='password' className='form-label text-light'>Password</label>
                  <input
                    type='password'
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    id='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Min 8 chars, 1 uppercase, 1 number'
                    required
                  />
                  {errors.password && (
                    <div style={errorStyle}>
                      {Array.isArray(errors.password) ? errors.password[0] : errors.password}
                    </div>
                  )}
                </div>

                {success && (
                  <div className='alert alert-success py-2' role='alert'>
                    {success}
                  </div>
                )}

                {errors.general && (
                  <div className='alert alert-danger py-2' role='alert'>
                    {errors.general}
                  </div>
                )}

                <button 
                  type='submit' 
                  className='btn btn-primary w-100'
                  disabled={loading}
                >
                  {loading ? 'Registering...' : 'Register'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register