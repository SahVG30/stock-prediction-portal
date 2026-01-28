import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Button from './Button'

const Main = () => {
  return (
    <div className="glassdoor-main">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-lg-6">
              <div className="brand-badge">
                <span className="brand-icon">📊</span>
                <span className="brand-name">StockVision AI</span>
              </div>
              <h1 className="hero-title">
                Predict the Future of
                <span className="text-primary"> Your Investments</span>
              </h1>
              <p className="hero-subtitle">
                StockVision AI uses cutting-edge machine learning to deliver accurate 
                stock predictions. Trusted by over 10,000 traders worldwide.
              </p>
              
              {/* Search Box - Glassdoor Style */}
              <div className="search-box">
                <div className="search-input-group">
                  <div className="search-field">
                    <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    <input type="text" placeholder="Search stocks (e.g., AAPL, GOOGL)" className="form-control" />
                  </div>
                  <Button text="Search" class="btn-primary btn-search" url="/dashboard" />
                </div>
              </div>
              
              <div className="trust-badges">
                <span className="badge-item">
                  <svg width="16" height="16" fill="#0caa41" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  Free to use
                </span>
                <span className="badge-item">
                  <svg width="16" height="16" fill="#0caa41" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  95% accuracy rate
                </span>
                <span className="badge-item">
                  <svg width="16" height="16" fill="#0caa41" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  Real-time data
                </span>
              </div>
            </div>
            
            <div className="col-lg-6 d-none d-lg-block">
              <div className="hero-illustration">
                <div className="stock-card card-1">
                  <div className="stock-header">
                    <span className="stock-symbol">AAPL</span>
                    <span className="stock-change positive">+2.34%</span>
                  </div>
                  <div className="stock-price">$178.52</div>
                  <div className="stock-graph">
                    <svg viewBox="0 0 100 30" className="graph-line">
                      <polyline fill="none" stroke="#0caa41" strokeWidth="2" points="0,25 20,20 35,22 50,15 65,18 80,10 100,5"/>
                    </svg>
                  </div>
                </div>
                <div className="stock-card card-2">
                  <div className="stock-header">
                    <span className="stock-symbol">GOOGL</span>
                    <span className="stock-change positive">+1.87%</span>
                  </div>
                  <div className="stock-price">$141.80</div>
                  <div className="stock-graph">
                    <svg viewBox="0 0 100 30" className="graph-line">
                      <polyline fill="none" stroke="#0caa41" strokeWidth="2" points="0,20 25,18 40,22 55,12 75,15 100,8"/>
                    </svg>
                  </div>
                </div>
                <div className="stock-card card-3">
                  <div className="stock-header">
                    <span className="stock-symbol">MSFT</span>
                    <span className="stock-change negative">-0.52%</span>
                  </div>
                  <div className="stock-price">$378.91</div>
                  <div className="stock-graph">
                    <svg viewBox="0 0 100 30" className="graph-line negative">
                      <polyline fill="none" stroke="#d93025" strokeWidth="2" points="0,10 20,12 40,8 60,15 80,18 100,20"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why traders choose StockVision AI</h2>
            <p>Powerful AI-driven tools to give you the edge in stock trading</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 20V10M18 20V4M6 20v-4"/>
                    </svg>
                  </div>
                </div>
                <h3>LSTM Neural Networks</h3>
                <p>Advanced deep learning models trained on years of historical data for precise predictions.</p>
                <a href="/dashboard" className="feature-link">Learn more →</a>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
                    </svg>
                  </div>
                </div>
                <h3>Moving Averages</h3>
                <p>100-day and 200-day moving averages to identify trends and optimal entry points.</p>
                <a href="/dashboard" className="feature-link">Learn more →</a>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                </div>
                <h3>Real-Time Analysis</h3>
                <p>Get instant predictions and alerts as market conditions change throughout the day.</p>
                <a href="/dashboard" className="feature-link">Learn more →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Stocks Analyzed</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Active Traders</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Prediction Accuracy</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Market Coverage</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What traders are saying</h2>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">"The LSTM predictions have been incredibly accurate. I've seen a 40% improvement in my trading decisions."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">JD</div>
                  <div className="author-info">
                    <div className="author-name">James D.</div>
                    <div className="author-role">Day Trader</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">"Finally, a stock prediction tool that actually works. The moving average analysis is spot on."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">SM</div>
                  <div className="author-info">
                    <div className="author-name">Sarah M.</div>
                    <div className="author-role">Portfolio Manager</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">"Clean interface, accurate predictions, and great customer support. Highly recommended!"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">RK</div>
                  <div className="author-info">
                    <div className="author-name">Robert K.</div>
                    <div className="author-role">Retail Investor</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-brand">StockVision AI</div>
            <h2>Ready to make smarter trades?</h2>
            <p>Join thousands of traders using StockVision AI predictions</p>
            <div className="cta-buttons">
              <Button text="Get Started — It's Free" class="btn-primary btn-lg" url="/register" />
              <Button text="View Demo" class="btn-outline-secondary btn-lg" url="/dashboard" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .glassdoor-main {
          background: #f5f5f5;
          min-height: 100vh;
        }

        /* Brand Badge */
        .brand-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #e6f7ed 0%, #d4f1e4 100%);
          padding: 8px 16px;
          border-radius: 50px;
          margin-bottom: 20px;
          border: 1px solid #b8e6c9;
        }

        .brand-icon {
          font-size: 1.2rem;
        }

        .brand-name {
          font-weight: 700;
          color: #0caa41;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          padding: 60px 0;
          border-bottom: 1px solid #e8e8e8;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .hero-title .text-primary {
          color: #0caa41 !important;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: #5a5a5a;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        /* Search Box */
        .search-box {
          background: #fff;
          border-radius: 8px;
          padding: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid #e8e8e8;
          margin-bottom: 25px;
        }

        .search-input-group {
          display: flex;
          gap: 10px;
        }

        .search-field {
          flex: 1;
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #9a9a9a;
        }

        .search-field .form-control {
          border: none;
          padding: 15px 15px 15px 50px;
          font-size: 1rem;
          background: transparent;
        }

        .search-field .form-control:focus {
          box-shadow: none;
          outline: none;
        }

        .btn-search {
          padding: 15px 35px;
          font-weight: 600;
          border-radius: 6px;
        }

        .btn-primary {
          background: #0caa41;
          border-color: #0caa41;
        }

        .btn-primary:hover {
          background: #0a9438;
          border-color: #0a9438;
        }

        /* Trust Badges */
        .trust-badges {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .badge-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #5a5a5a;
          font-size: 0.9rem;
        }

        /* Hero Illustration */
        .hero-illustration {
          position: relative;
          height: 400px;
        }

        .stock-card {
          position: absolute;
          background: #fff;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          width: 220px;
          transition: transform 0.3s ease;
        }

        .stock-card:hover {
          transform: translateY(-5px);
        }

        .card-1 { top: 0; right: 20%; z-index: 3; }
        .card-2 { top: 100px; right: 5%; z-index: 2; }
        .card-3 { top: 200px; right: 30%; z-index: 1; }

        .stock-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .stock-symbol {
          font-weight: 700;
          color: #1a1a1a;
        }

        .stock-change {
          font-size: 0.85rem;
          font-weight: 600;
          padding: 4px 8px;
          border-radius: 4px;
        }

        .stock-change.positive {
          background: #e6f7ed;
          color: #0caa41;
        }

        .stock-change.negative {
          background: #fce8e6;
          color: #d93025;
        }

        .stock-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 15px;
        }

        .stock-graph {
          height: 30px;
        }

        /* Features Section */
        .features-section {
          padding: 80px 0;
          background: #fff;
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-header h2 {
          font-size: 2.2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 10px;
        }

        .section-header p {
          color: #5a5a5a;
          font-size: 1.1rem;
        }

        .feature-card {
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 12px;
          padding: 30px;
          height: 100%;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          border-color: #0caa41;
          box-shadow: 0 10px 30px rgba(12, 170, 65, 0.1);
        }

        .feature-icon-wrapper {
          margin-bottom: 20px;
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          background: #e6f7ed;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0caa41;
        }

        .feature-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 12px;
        }

        .feature-card p {
          color: #5a5a5a;
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .feature-link {
          color: #0caa41;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .feature-link:hover {
          text-decoration: underline;
        }

        /* Stats Section */
        .stats-section {
          padding: 60px 0;
          background: #f8f9fa;
          border-top: 1px solid #e8e8e8;
          border-bottom: 1px solid #e8e8e8;
        }

        .stats-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 50px;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #0caa41;
        }

        .stat-label {
          color: #5a5a5a;
          font-size: 0.95rem;
          margin-top: 5px;
        }

        .stat-divider {
          width: 1px;
          height: 50px;
          background: #e8e8e8;
        }

        /* Testimonials */
        .testimonials-section {
          padding: 80px 0;
          background: #fff;
        }

        .testimonial-card {
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 12px;
          padding: 30px;
          height: 100%;
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .stars {
          color: #f5a623;
          font-size: 1.2rem;
          margin-bottom: 15px;
        }

        .testimonial-text {
          color: #1a1a1a;
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .author-avatar {
          width: 45px;
          height: 45px;
          background: #0caa41;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }

        .author-name {
          font-weight: 600;
          color: #1a1a1a;
        }

        .author-role {
          font-size: 0.85rem;
          color: #5a5a5a;
        }

        /* CTA Section */
        .cta-section {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .cta-card {
          background: linear-gradient(135deg, #0caa41 0%, #0a9438 100%);
          border-radius: 16px;
          padding: 60px;
          text-align: center;
        }

        .cta-brand {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          padding: 6px 16px;
          border-radius: 50px;
          color: #fff;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 15px;
          letter-spacing: 0.5px;
        }

        .cta-card h2 {
          color: #fff;
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .cta-card p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
          margin-bottom: 30px;
        }

        .cta-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-buttons .btn-primary {
          background: #fff;
          color: #0caa41;
          border-color: #fff;
        }

        .cta-buttons .btn-primary:hover {
          background: #f8f9fa;
        }

        .cta-buttons .btn-outline-secondary {
          color: #fff;
          border-color: rgba(255, 255, 255, 0.5);
        }

        .cta-buttons .btn-outline-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #fff;
        }

        /* Responsive */
        @media (max-width: 991px) {
          .hero-title {
            font-size: 2.2rem;
          }
          
          .stat-divider {
            display: none;
          }
          
          .stats-grid {
            gap: 30px;
          }
        }

        @media (max-width: 767px) {
          .search-input-group {
            flex-direction: column;
          }
          
          .cta-card {
            padding: 40px 25px;
          }
        }
      `}</style>
    </div>
  )
}

export default Main