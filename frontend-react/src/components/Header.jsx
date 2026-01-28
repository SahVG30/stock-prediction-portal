import {useContext} from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Header = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    console.log('Logged out');
    navigate('/login')
  }
  return (
    <>
        <nav className='header-navbar'>
          <div className='container'>
            <div className='navbar-content'>
              <Link className='navbar-brand' to="/">
                <span className='brand-icon'>📊</span>
                <span className='brand-text'>StockVision AI</span>
              </Link>

              <div className='nav-actions'>
                {isLoggedIn ? (
                  <>
                  <Button text='📈 Dashboard' class="btn-primary" url="/dashboard" />
                  <button className='btn btn-logout' onClick={handleLogout}>Logout</button>
                  </>
                ) : (
                  <>
                  <Button text='Login' class="btn-outline-primary" url="/login" />
                  <Button text='Get Started' class="btn-primary" url="/register" />
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
        
        <style>{`
          .header-navbar {
            background: #fff;
            border-bottom: 1px solid #e8e8e8;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          }
          
          .navbar-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
          }
          
          .navbar-brand {
            display: flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            font-size: 1.3rem;
            font-weight: 700;
            color: #1a1a1a;
            transition: opacity 0.3s ease;
          }
          
          .navbar-brand:hover {
            opacity: 0.8;
          }
          
          .brand-icon {
            font-size: 1.5rem;
          }
          
          .brand-text {
            background: linear-gradient(135deg, #0caa41 0%, #0a9438 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .nav-actions {
            display: flex;
            gap: 12px;
            align-items: center;
          }
          
          .btn-primary {
            background: #0caa41;
            color: #fff;
            border-color: #0caa41;
            padding: 10px 20px;
            font-weight: 600;
            border-radius: 6px;
            transition: all 0.3s ease;
          }
          
          .btn-primary:hover {
            background: #0a9438;
            border-color: #0a9438;
          }
          
          .btn-outline-primary {
            background: transparent;
            color: #0caa41;
            border: 2px solid #0caa41;
            padding: 8px 18px;
            font-weight: 600;
            border-radius: 6px;
            transition: all 0.3s ease;
          }
          
          .btn-outline-primary:hover {
            background: #e6f7ed;
          }
          
          .btn-logout {
            background: transparent;
            color: #d93025;
            border: 2px solid #d93025;
            padding: 8px 18px;
            font-weight: 600;
            border-radius: 6px;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          
          .btn-logout:hover {
            background: #fce8e6;
          }
          
          @media (max-width: 767px) {
            .brand-text {
              display: none;
            }
            
            .nav-actions {
              gap: 8px;
            }
            
            .nav-actions button,
            .nav-actions a {
              padding: 8px 12px;
              font-size: 0.85rem;
            }
          }
        `}</style>
    </>
  )
}

export default Header