import React from 'react'

import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Search from './Components/Search/Search'
import Support from './Components/Support/Support'
import Info from './Components/Info/Info'
import Subscribers from './Components/Subscribers/Subscribers'
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Subscribers />
      <Footer />
    </div>
  )
}

export default App
