import { useState } from 'react'

import './App.css'
import logo from './assets/logo (2).svg'

import Display from './components/Display'
import Form from './components/Form'

function App() {

  const [bill, setBill] = useState('')
  const [people, setPeople] = useState('')
  
  return (
    <>
      <div className='wrapper'>
        <img src={logo} alt="Tippity logo" />
        <div className="container">
          <Form 
            bill={bill}
            setBill={setBill}
            people={people}
            setPeople={setPeople}
          />

          <Display/>
        </div>
      </div>
      
    </>
  )
}

export default App
