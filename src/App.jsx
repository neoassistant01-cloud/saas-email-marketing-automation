import React, { useState, useEffect } from 'react'

function App() {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="app">
      <header>
        <h1>🚀 Email marketing automation</h1>
        <p className="tagline">challenge</p>
      </header>
      
      <main>
        <section className="hero">
          <h2>Build something great</h2>
          <p>This is your MVP. Edit src/App.jsx to customize.</p>
          
          <div className="features">
            <div className="feature">
              <h3>📊 Analytics</h3>
              <p>Track your metrics</p>
            </div>
            <div className="feature">
              <h3>⚡ Fast</h3>
              <p>Built with React + Vite</p>
            </div>
            <div className="feature">
              <h3>🔒 Secure</h3>
              <p>Enterprise-ready</p>
            </div>
          </div>
        </section>
        
        <section className="cta">
          <button>Get Started</button>
        </section>
      </main>
      
      <footer>
        <p>Built by Neo's SaaS Factory</p>
      </footer>
    </div>
  )
}

export default App
