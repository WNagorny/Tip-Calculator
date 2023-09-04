// import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Form from './components/Form'

function App() {
 

  return (
    <>
      <div className='App'>
        <div className="container">
          <div className="form">
          <Form />
          </div>
          <Display/>
        </div>
      </div>
      
    </>
  )
}

export default App
