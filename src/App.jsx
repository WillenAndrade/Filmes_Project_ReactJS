import { useState } from 'react'
import {Outlet} from 'react-router-dom'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'

import './App.css'
import './index.css'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <div className="App">
     <Navbar />
     <Outlet />
    </div>
  )
}

export default App
