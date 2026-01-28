import {useEffect, useState} from 'react'
import axiosInstance from '../../axiosInstance'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faChartLine, faSearch, faChartBar, faCalculator } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
    const [ticker, setTicker] = useState('')
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const [plot, setPlot] = useState()
    const [ma100, setMA100] = useState()
    const [ma200, setMA200] = useState()
    const [prediction, setPrediction] = useState()
    const [mse, setMSE] = useState()
    const [rmse, setRMSE] = useState()
    const [r2, setR2] = useState()

    useEffect(()=>{
        const fetchProtectedData = async () =>{
            try{
                const response = await axiosInstance.get('/protected-view/');
            }catch(error){
                console.error('Error fetching data:', error)
            }
        }
        fetchProtectedData();
    }, [])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoading(true)
        setError(null)
        try{
            const response = await axiosInstance.post('/predict/', {
                ticker: ticker
            });
            console.log(response.data);
            const backendRoot = import.meta.env.VITE_BACKEND_ROOT
            const plotUrl = `${backendRoot}${response.data.plot_img}`
            const ma100Url = `${backendRoot}${response.data.plot_100_dma}`
            const ma200Url = `${backendRoot}${response.data.plot_200_dma}`
            const predictionUrl = `${backendRoot}${response.data.plot_prediction}`
            setPlot(plotUrl)
            setMA100(ma100Url)
            setMA200(ma200Url)
            setPrediction(predictionUrl)
            setMSE(response.data.mse)
            setRMSE(response.data.rmse)
            setR2(response.data.r2)
            // Set plots
            if(response.data.error){
                setError(response.data.error)
            }
        }catch(error){
            console.error('There was an error making the API request', error)
        }finally{
            setLoading(false);
        }
    }

  return (
    <div className="dashboard-page">
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div className="container">
          <div className="header-content">
            <div className="header-text">
              <div className="brand-badge">
                <span className="brand-icon">📊</span>
                <span className="brand-name">StockVision AI</span>
              </div>
              <h1>Stock Prediction Dashboard</h1>
              <p>Enter a stock ticker to get AI-powered predictions and analysis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="search-section">
        <div className="container">
          <div className="search-card">
            <form onSubmit={handleSubmit}>
              <div className="search-input-wrapper">
                <div className="search-field">
                  <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  <input 
                    type="text" 
                    className='form-control' 
                    placeholder='Enter Stock Ticker (e.g., AAPL, GOOGL, MSFT)' 
                    onChange={(e) => setTicker(e.target.value.toUpperCase())} 
                    value={ticker}
                    required
                  />
                </div>
                <button type='submit' className='btn btn-predict' disabled={loading}>
                  {loading ? (
                    <span><FontAwesomeIcon icon={faSpinner} spin /> Analyzing...</span>
                  ) : (
                    <span><FontAwesomeIcon icon={faChartLine} /> Get Prediction</span>
                  )}
                </button>
              </div>
              {error && <div className='error-message'><span>⚠️</span> {error}</div>}
            </form>
            
            <div className="popular-tickers">
              <span className="label">Popular:</span>
              <button type="button" onClick={() => setTicker('AAPL')}>AAPL</button>
              <button type="button" onClick={() => setTicker('GOOGL')}>GOOGL</button>
              <button type="button" onClick={() => setTicker('MSFT')}>MSFT</button>
              <button type="button" onClick={() => setTicker('AMZN')}>AMZN</button>
              <button type="button" onClick={() => setTicker('TSLA')}>TSLA</button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {prediction && (
        <div className="results-section">
          <div className="container">
            {/* Ticker Header */}
            <div className="ticker-header">
              <h2><span className="ticker-symbol">{ticker}</span> Analysis Results</h2>
              <p>AI-powered predictions using LSTM neural networks</p>
            </div>

            {/* Charts Grid */}
            <div className="charts-grid">
              {plot && (
                <div className="chart-card">
                  <div className="chart-header">
                    <FontAwesomeIcon icon={faChartBar} className="chart-icon" />
                    <h3>Stock Price History</h3>
                  </div>
                  <div className="chart-body">
                    <img src={plot} alt="Stock Price History" />
                  </div>
                </div>
              )}

              {ma100 && (
                <div className="chart-card">
                  <div className="chart-header">
                    <FontAwesomeIcon icon={faChartLine} className="chart-icon" />
                    <h3>100-Day Moving Average</h3>
                  </div>
                  <div className="chart-body">
                    <img src={ma100} alt="100-Day Moving Average" />
                  </div>
                </div>
              )}

              {ma200 && (
                <div className="chart-card">
                  <div className="chart-header">
                    <FontAwesomeIcon icon={faChartLine} className="chart-icon" />
                    <h3>200-Day Moving Average</h3>
                  </div>
                  <div className="chart-body">
                    <img src={ma200} alt="200-Day Moving Average" />
                  </div>
                </div>
              )}

              {prediction && (
                <div className="chart-card featured">
                  <div className="chart-header">
                    <FontAwesomeIcon icon={faChartLine} className="chart-icon" />
                    <h3>LSTM Prediction</h3>
                    <span className="badge-ai">AI Powered</span>
                  </div>
                  <div className="chart-body">
                    <img src={prediction} alt="LSTM Prediction" />
                  </div>
                </div>
              )}
            </div>

            {/* Model Evaluation */}
            <div className="evaluation-section">
              <div className="evaluation-header">
                <FontAwesomeIcon icon={faCalculator} className="eval-icon" />
                <h3>Model Evaluation Metrics</h3>
              </div>
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-label">Mean Squared Error (MSE)</div>
                  <div className="metric-value">{mse?.toFixed(6) || mse}</div>
                  <div className="metric-desc">Lower is better</div>
                </div>
                <div className="metric-card">
                  <div className="metric-label">Root Mean Squared Error (RMSE)</div>
                  <div className="metric-value">{rmse?.toFixed(6) || rmse}</div>
                  <div className="metric-desc">Standard deviation of errors</div>
                </div>
                <div className="metric-card highlight">
                  <div className="metric-label">R-Squared (R²)</div>
                  <div className="metric-value">{r2?.toFixed(6) || r2}</div>
                  <div className="metric-desc">Closer to 1 is better</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!prediction && !loading && (
        <div className="empty-state">
          <div className="container">
            <div className="empty-content">
              <div className="empty-icon">📈</div>
              <h3>Ready to Predict</h3>
              <p>Enter a stock ticker above to see AI-powered predictions and analysis</p>
              <div className="feature-pills">
                <span>LSTM Neural Network</span>
                <span>Moving Averages</span>
                <span>Historical Analysis</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .dashboard-page {
          background: #f5f5f5;
          min-height: 100vh;
        }

        /* Dashboard Header */
        .dashboard-header {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          padding: 40px 0;
          border-bottom: 1px solid #e8e8e8;
        }

        .header-content {
          text-align: center;
        }

        .brand-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #e6f7ed 0%, #d4f1e4 100%);
          padding: 8px 16px;
          border-radius: 50px;
          margin-bottom: 15px;
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

        .header-text h1 {
          font-size: 2.2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 10px;
        }

        .header-text p {
          color: #5a5a5a;
          font-size: 1.1rem;
        }

        /* Search Section */
        .search-section {
          padding: 30px 0;
        }

        .search-card {
          background: #fff;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid #e8e8e8;
        }

        .search-input-wrapper {
          display: flex;
          gap: 15px;
        }

        .search-field {
          flex: 1;
          position: relative;
        }

        .search-field .search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #9a9a9a;
          font-size: 1rem;
        }

        .search-field .form-control {
          border: 2px solid #e8e8e8;
          padding: 16px 16px 16px 50px;
          font-size: 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .search-field .form-control:focus {
          border-color: #0caa41;
          box-shadow: 0 0 0 3px rgba(12, 170, 65, 0.1);
          outline: none;
        }

        .btn-predict {
          background: #0caa41;
          color: #fff;
          border: none;
          padding: 16px 30px;
          font-weight: 600;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .btn-predict:hover {
          background: #0a9438;
          transform: translateY(-1px);
        }

        .btn-predict:disabled {
          background: #7dd3a0;
          transform: none;
        }

        .error-message {
          background: #fce8e6;
          color: #d93025;
          padding: 12px 16px;
          border-radius: 8px;
          margin-top: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
        }

        .popular-tickers {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 20px;
          flex-wrap: wrap;
        }

        .popular-tickers .label {
          color: #5a5a5a;
          font-size: 0.9rem;
        }

        .popular-tickers button {
          background: #f5f5f5;
          border: 1px solid #e8e8e8;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #1a1a1a;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .popular-tickers button:hover {
          background: #e6f7ed;
          border-color: #0caa41;
          color: #0caa41;
        }

        /* Results Section */
        .results-section {
          padding: 40px 0;
        }

        .ticker-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .ticker-header h2 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 8px;
        }

        .ticker-symbol {
          background: linear-gradient(135deg, #0caa41 0%, #0a9438 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ticker-header p {
          color: #5a5a5a;
        }

        /* Charts Grid */
        .charts-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
          margin-bottom: 40px;
        }

        .chart-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid #e8e8e8;
          transition: all 0.3s ease;
        }

        .chart-card:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
          transform: translateY(-2px);
        }

        .chart-card.featured {
          grid-column: span 2;
          border: 2px solid #0caa41;
        }

        .chart-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 20px 25px;
          border-bottom: 1px solid #e8e8e8;
          background: #f8f9fa;
        }

        .chart-icon {
          color: #0caa41;
          font-size: 1.2rem;
        }

        .chart-header h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
          flex: 1;
        }

        .badge-ai {
          background: linear-gradient(135deg, #0caa41 0%, #0a9438 100%);
          color: #fff;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .chart-body {
          padding: 20px;
        }

        .chart-body img {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }

        /* Evaluation Section */
        .evaluation-section {
          background: #fff;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid #e8e8e8;
        }

        .evaluation-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 25px;
        }

        .eval-icon {
          color: #0caa41;
          font-size: 1.3rem;
        }

        .evaluation-header h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .metric-card {
          background: #f8f9fa;
          border-radius: 10px;
          padding: 25px;
          text-align: center;
          border: 1px solid #e8e8e8;
          transition: all 0.3s ease;
        }

        .metric-card:hover {
          border-color: #0caa41;
        }

        .metric-card.highlight {
          background: linear-gradient(135deg, #e6f7ed 0%, #d4f1e4 100%);
          border-color: #0caa41;
        }

        .metric-label {
          font-size: 0.85rem;
          color: #5a5a5a;
          margin-bottom: 10px;
          font-weight: 500;
        }

        .metric-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0caa41;
          margin-bottom: 8px;
        }

        .metric-desc {
          font-size: 0.8rem;
          color: #9a9a9a;
        }

        /* Empty State */
        .empty-state {
          padding: 80px 0;
        }

        .empty-content {
          text-align: center;
          background: #fff;
          border-radius: 16px;
          padding: 60px 40px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid #e8e8e8;
        }

        .empty-icon {
          font-size: 4rem;
          margin-bottom: 20px;
        }

        .empty-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 10px;
        }

        .empty-content p {
          color: #5a5a5a;
          margin-bottom: 25px;
        }

        .feature-pills {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .feature-pills span {
          background: #e6f7ed;
          color: #0caa41;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        /* Responsive */
        @media (max-width: 991px) {
          .charts-grid {
            grid-template-columns: 1fr;
          }
          
          .chart-card.featured {
            grid-column: span 1;
          }
          
          .metrics-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .search-input-wrapper {
            flex-direction: column;
          }
          
          .header-text h1 {
            font-size: 1.6rem;
          }
          
          .btn-predict {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  )
}

export default Dashboard