import { useEffect, useState } from 'react'

import './App.css'
import logo from './assets/logo (2).svg'

import Display from './components/Display'
import Form from './components/Form'

function App() {

  const [bill, setBill] = useState('')
  const [tip, setTip] = useState('')
  const [people, setPeople] = useState('')
  const [calculatedTip, setCalculatedTip] = useState(0)
  const [total, setTotal] = useState(0)
  const [selectedTip, setSelectedTip] = useState('');
  
  useEffect(() => {

    if(bill > 0 && people > 0 && tip > 0){
      setCalculatedTip(bill * (tip / 100));
      setTotal (calculatedTip + bill)
    }

  }, [bill, people, tip, calculatedTip])

  const handleResetBtn = () => {
    setBill('')
    setTip('')
    setPeople('')
    setCalculatedTip(0)
    setTotal(0)
    setSelectedTip(''); // Deselect the radio input
    
    document.getElementById('custom').value = '';
  }


  return (
    <>
      <div className='wrapper'>
        <img src={logo} alt="Tippity logo" />
        <div className="container">
          <Form 
            bill={bill}
            setBill={setBill}
            tip={tip}
            setTip={setTip}
            people={people}
            setPeople={setPeople}
            setSelectedTip={setSelectedTip}
            selectedTip={selectedTip}
          />

          <Display
            total={total}
            calculatedTip={calculatedTip}
            handleResetBtn={handleResetBtn}
            people={people}
          />
        </div>
      </div>
      
    </>
  )
}

export default App
