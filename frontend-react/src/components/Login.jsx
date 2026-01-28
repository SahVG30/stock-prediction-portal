import React, {useContext, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

  const handleLogin = async (e) =>{
    e.preventDefault();
    setLoading(true);

    const userData = {username, password}
    console.log('userData==>', userData);

    try{
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
      localStorage.setItem('accessToken', response.data.access)
      localStorage.setItem('refreshToken', response.data.refresh)
      console.log('Login successful');
      setIsLoggedIn(true)
      navigate('/dashboard')
    }catch(error){
      console.error('Invalid credentials')
      setError('Invalid credentials')
    }finally{
      setLoading(false)
    }
  }
  

  return (
    <div className='login-page'>
      <div className='login-container'>
        <div className='login-card'>
          <div className='login-header'>
            <span className='login-icon'>📊</span>
            <h1>StockVision AI</h1>
            <p>Welcome back</p>
          </div>
          
          <form onSubmit={handleLogin} className='login-form'>
            <div className='form-group'>
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username"
                className='form-input' 
                placeholder='Enter your username' 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            
            <div className='form-group'>
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password"
                className='form-input' 
                placeholder='Enter your password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            {error && (
              <div className='alert-error'>
                <span>⚠️</span>
                {error}
              </div>
            )}
            
            <button type='submit' className='login-button' disabled={loading}>
              {loading ? (
                <><FontAwesomeIcon icon={faSpinner} spin /> Logging in...</>
              ) : (
                <>Sign In</>  
              )}
            </button>
          </form>
          
          <div className='login-footer'>
            <p>Don't have an account? <a href="/register">Create one</a></p>
          </div>
        </div>
        
        <div className='login-side'>
          <div className='login-benefits'>
            <h2>Start Predicting Today</h2>
            <ul>
              <li>⚡ Real-time stock predictions</li>
              <li>🤖 AI-powered LSTM models</li>
              <li>📊 Advanced analytics</li>
              <li>🎯 95% accuracy rate</li>
            </ul>
          </div>
        </div>
      </div>
      
      <style>{`
        .login-page {
          background: linear-gradient(135deg, #f5f5f5 0%, #f8f9fa 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .login-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          max-width: 1000px;
          width: 100%;
        }
        
        .login-card {
          background: #fff;
          border-radius: 12px;
          padding: 40px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid #e8e8e8;
        }
        
        .login-header {
          text-align: center;
          margin-bottom: 30px;
        }
        
        .login-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 15px;
        }
        
        .login-header h1 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 5px;
        }
        
        .login-header p {
          color: #5a5a5a;
          font-size: 0.95rem;
        }
        
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .form-group label {
          font-weight: 600;
          color: #1a1a1a;
          font-size: 0.9rem;
        }
        
        .form-input {
          padding: 12px 16px;
          border: 2px solid #e8e8e8;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: inherit;
        }
        
        .form-input:focus {
          border-color: #0caa41;
          box-shadow: 0 0 0 3px rgba(12, 170, 65, 0.1);
          outline: none;
        }
        
        .alert-error {
          background: #fce8e6;
          color: #d93025;
          padding: 12px 16px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
        }
        
        .login-button {
          background: #0caa41;
          color: #fff;
          border: none;
          padding: 14px 20px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .login-button:hover:not(:disabled) {
          background: #0a9438;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(12, 170, 65, 0.3);
        }
        
        .login-button:disabled {
          background: #7dd3a0;
          cursor: not-allowed;
        }
        
        .login-footer {
          text-align: center;
          margin-top: 20px;
        }
        
        .login-footer p {
          color: #5a5a5a;
          font-size: 0.9rem;
        }
        
        .login-footer a {
          color: #0caa41;
          text-decoration: none;
          font-weight: 600;
        }
        
        .login-footer a:hover {
          text-decoration: underline;
        }
        
        .login-side {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .login-benefits {
          background: linear-gradient(135deg, #0caa41 0%, #0a9438 100%);
          color: #fff;
          padding: 40px;
          border-radius: 12px;
          text-align: center;
        }
        
        .login-benefits h2 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 25px;
        }
        
        .login-benefits ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .login-benefits li {
          padding: 10px 0;
          font-size: 1rem;
          line-height: 1.6;
        }
        
        @media (max-width: 991px) {
          .login-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .login-side {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export default Login