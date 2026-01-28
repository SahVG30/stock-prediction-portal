import React, {useState} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleRegistration = async (e) =>{
    e.preventDefault();
    setLoading(true);
    
    const userData = {
      username, email, password
    }
    
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
      console.log('response.data==>', response.data)
      console.log('Registration successful');
      setErrors({})
      setSuccess(true)
    }catch(error){
      setErrors(error.response.data)
      console.error('Registration error: ', error.response.data)
    }finally{
      setLoading(false)
    }
  }
  return (
    <div className='register-page'>
      <div className='register-container'>
        <div className='register-side'>
          <div className='register-benefits'>
            <h2>Join StockVision AI</h2>
            <ul>
              <li>🚀 Get started in seconds</li>
              <li>🤖 Access AI predictions</li>
              <li>📈 Track your portfolio</li>
              <li>✅ 100% secure & private</li>
            </ul>
            <p className='have-account'>Already have an account? <a href="/login">Sign in here</a></p>
          </div>
        </div>
        
        <div className='register-card'>
          <div className='register-header'>
            <span className='register-icon'>📊</span>
            <h1>Create Account</h1>
            <p>Join thousands of traders using StockVision AI</p>
          </div>
          
          <form onSubmit={handleRegistration} className='register-form'>
            <div className='form-group'>
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username"
                className='form-input' 
                placeholder='Choose your username' 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              {errors.username && <span className='error-text'>{errors.username}</span>}
            </div>
            
            <div className='form-group'>
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email"
                className='form-input' 
                placeholder='your@email.com' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <span className='error-text'>{errors.email}</span>}
            </div>
            
            <div className='form-group'>
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password"
                className='form-input' 
                placeholder='Create a strong password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && <span className='error-text'>{errors.password}</span>}
            </div>
            
            {success && (
              <div className='alert-success'>
                ✓ Registration successful! Redirecting to login...
              </div>
            )}
            
            <button type='submit' className='register-button' disabled={loading}>
              {loading ? (
                <><FontAwesomeIcon icon={faSpinner} spin /> Creating account...</>
              ) : (
                <>Create Account</>
              )}
            </button>
            
            <p className='terms-text'>
              By signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
            </p>
          </form>
        </div>
      </div>
      
      <style>{`
        .register-page {
          background: linear-gradient(135deg, #f5f5f5 0%, #f8f9fa 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .register-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          max-width: 1000px;
          width: 100%;
        }
        
        .register-side {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .register-benefits {
          background: linear-gradient(135deg, #0caa41 0%, #0a9438 100%);
          color: #fff;
          padding: 40px;
          border-radius: 12px;
          text-align: center;
        }
        
        .register-benefits h2 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 25px;
        }
        
        .register-benefits ul {
          list-style: none;
          padding: 0;
          margin: 0 0 30px 0;
        }
        
        .register-benefits li {
          padding: 10px 0;
          font-size: 1rem;
          line-height: 1.6;
        }
        
        .have-account {
          border-top: 1px solid rgba(255, 255, 255, 0.3);
          padding-top: 20px;
          margin: 0;
          font-size: 0.9rem;
        }
        
        .have-account a {
          color: #fff;
          text-decoration: underline;
          font-weight: 600;
        }
        
        .register-card {
          background: #fff;
          border-radius: 12px;
          padding: 40px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid #e8e8e8;
        }
        
        .register-header {
          text-align: center;
          margin-bottom: 30px;
        }
        
        .register-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 15px;
        }
        
        .register-header h1 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 5px;
        }
        
        .register-header p {
          color: #5a5a5a;
          font-size: 0.95rem;
        }
        
        .register-form {
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
        
        .error-text {
          color: #d93025;
          font-size: 0.8rem;
          margin-top: -4px;
        }
        
        .alert-success {
          background: #e6f7ed;
          color: #0caa41;
          padding: 12px 16px;
          border-radius: 8px;
          text-align: center;
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .register-button {
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
        
        .register-button:hover:not(:disabled) {
          background: #0a9438;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(12, 170, 65, 0.3);
        }
        
        .register-button:disabled {
          background: #7dd3a0;
          cursor: not-allowed;
        }
        
        .terms-text {
          text-align: center;
          color: #5a5a5a;
          font-size: 0.8rem;
          margin: 0;
        }
        
        .terms-text a {
          color: #0caa41;
          text-decoration: none;
          font-weight: 600;
        }
        
        .terms-text a:hover {
          text-decoration: underline;
        }
        
        @media (max-width: 991px) {
          .register-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .register-side {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export default Register