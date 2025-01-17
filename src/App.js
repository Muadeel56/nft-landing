import React from 'react'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Free from './components/Free'
import Client from './components/Client'
import SuperRare from './components/SuperRare'
import Release from './components/Release'
import Like from './components/Like'
import Signup from './components/Signup'
import Footer from './components/Footer'
import "./scss/index.scss"

function App() {
  return (
    <div className='app-container'>
      <ScrollToTop /> {/* ScrollToTop component */}
      <Navbar /> {/* Navbar component */}
      <Home /> {/* Home component */}
      <Free /> {/* Free component */}
      <Client /> {/* Client component */}
      <SuperRare /> {/* SuperRare component */}
      <Release /> {/* Release component */}
      <Like /> {/* Like component */}
      <Signup /> {/* Signup component */}
      <Footer /> {/* Footer component */}
    </div>
  )
}

export default App