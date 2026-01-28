import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <>
    <footer className='glassdoor-footer'>
      <div className='container'>
        <div className='footer-content'>
          <div className='footer-section'>
            <div className='footer-brand'>
              <span className='footer-icon'>📊</span>
              <span className='footer-title'>StockVision AI</span>
            </div>
            <p className='footer-desc'>AI-powered stock predictions for smarter trading decisions.</p>
          </div>
          
          <div className='footer-section'>
            <h5>Product</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><a href="/#features" onClick={(e) => {
                e.preventDefault();
                document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
              }}>Features</a></li>
            </ul>
          </div>
          
          <div className='footer-section'>
            <h5>Company</h5>
            <ul>
              <li><a href="/#about" onClick={(e) => {
                e.preventDefault();
                alert('About Us page coming soon!');
              }}>About Us</a></li>
              <li><a href="/#contact" onClick={(e) => {
                e.preventDefault();
                alert('Contact us at: support@stockvision.ai');
              }}>Contact</a></li>
              <li><a href="/#privacy" onClick={(e) => {
                e.preventDefault();
                alert('Privacy Policy: We respect your data privacy');
              }}>Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className='footer-bottom'>
          <p>&copy; {currentYear} StockVision AI. All rights reserved. | Made by Sahil G</p>
        </div>
      </div>
    </footer>
    
    <style>{`
      .glassdoor-footer {
        background: #fff;
        border-top: 1px solid #e8e8e8;
        padding: 50px 0 30px;
        margin-top: 60px;
      }
      
      .footer-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
        margin-bottom: 40px;
      }
      
      .footer-section h5 {
        font-weight: 700;
        color: #1a1a1a;
        margin-bottom: 15px;
        font-size: 0.95rem;
      }
      
      .footer-brand {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 10px;
      }
      
      .footer-icon {
        font-size: 1.5rem;
      }
      
      .footer-title {
        font-weight: 700;
        color: #0caa41;
        font-size: 1.1rem;
      }
      
      .footer-desc {
        color: #5a5a5a;
        font-size: 0.9rem;
        line-height: 1.5;
      }
      
      .footer-section ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .footer-section ul li {
        margin-bottom: 10px;
      }
      
      .footer-section a {
        color: #5a5a5a;
        text-decoration: none;
        font-size: 0.9rem;
        transition: color 0.3s ease;
      }
      
      .footer-section a:hover {
        color: #0caa41;
      }
      
      .footer-bottom {
        border-top: 1px solid #e8e8e8;
        padding-top: 20px;
        text-align: center;
      }
      
      .footer-bottom p {
        color: #5a5a5a;
        font-size: 0.85rem;
        margin: 0;
      }
      
      @media (max-width: 991px) {
        .footer-content {
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }
      }
      
      @media (max-width: 767px) {
        .footer-content {
          grid-template-columns: 1fr;
          gap: 25px;
        }
        
        .glassdoor-footer {
          padding: 30px 0 20px;
        }
      }
    `}</style>
    </>
  )
}

export default Footer