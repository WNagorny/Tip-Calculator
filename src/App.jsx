import { useState } from 'react'

import './App.css'
import logo from './assets/logo (2).svg'

import Display from './components/Display'
import Form from './components/Form'

function App() {

  const[billAmt, setBillAmt] = useState(0);
  const[showBillAmtError, setShowBillAmtError] = useState(false);
  const[peopls, setPeopls] = useState(0);
  const[isTipSelected, setIsTipSelected] = useState(false);
  const[selectedTip, setSelectedTip] = useState(0);
 

  const handleBillAmtInput = (e) => {
    const input = e.target.value;
    const pattern = /^[0-9.]*$/;
    if(pattern.test(input)) {
      setShowBillAmtError(false)
      setBillAmt(input)
    } else{
      setShowBillAmtError(true)
    }
  }

  const handleSelectedTip = (e) => {
    console.log(e.target.value)
  }

  
  return (
    <>
      <div className='wrapper'>
        <img src={logo} alt="Tippity logo" />
        <div className="container">
          <Form 
          billAmt={billAmt}
            handleBillAmtInput={handleBillAmtInput}
            handleSelectedTip={handleSelectedTip}
            showBillAmtError={showBillAmtError}
          />

          <Display/>
        </div>
      </div>
      
    </>
  )
}

export default App
