// import { useState } from 'react'
import './App.css'
import logo from './assets/logo (2).svg'

import Display from './components/Display'
import Form from './components/Form'

function App() {
 

  return (
    <>
      <div className='wrapper'>
        <img src={logo} alt="Tippity logo" />
        <div className="container">
          <Form />
          <Display/>
        </div>
      </div>
      
    </>
  )
}

export default App
