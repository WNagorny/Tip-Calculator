import { BsFillPersonFill, BsCurrencyDollar } from 'react-icons/bs'

const Form = ({bill, setBill, people, setPeople, tip ,setTip}) => {

	const handleSelectedTip = (e) => {
		setTip(+e.target.value)
	}


	return (
		<div className='form'>
			<div className='label-group'>
				<div className='label-wrapper'>
					<label className='label' htmlFor='bill'>
						Bill
					</label>
               {/* <p className='error'>{showBillAmtError ? "Please enter numbers only" : ""}</p> */}
				</div>
				<div className='number-wrapper'>
					<input type='number' id='bill' className='number-input' onInput={(e) =>setBill(+e.target.value)} />
					<BsCurrencyDollar aria-hidden='true' className='icon' />
				</div>
			</div>

			<div className='tip-section'>
				<p className='label'>Selected Tip %</p>
				<div className='tip-amount-wrapper'>
					<div className='tip-amount'>
						<input type='radio' name='tip' className='tip-input' onInput={handleSelectedTip} value='5' id="input1" />
						<label className='tip-btn' htmlFor='input1'>5%</label>
					</div>
					<div className='tip-amount'>
						<input type='radio' name='tip' className='tip-input' onInput={handleSelectedTip} value='10' id="input2" />
						<label className='tip-btn'  htmlFor='input2'>10%</label>
					</div>
					<div className='tip-amount'>
						<input type='radio' name='tip' className='tip-input' onInput={handleSelectedTip} value='15' id="input3" />
						<label className='tip-btn'  htmlFor='input3'>15%</label>
					</div>
					<div className='tip-amount'>
						<input type='radio' name='tip' className='tip-input' onInput={handleSelectedTip} value='25' id="input4"/>
						<label className='tip-btn'  htmlFor='input4'>25%</label>
					</div>
					<div className='tip-amount'>
						<input type='radio' name='tip' className='tip-input' onInput={handleSelectedTip} value='50' id="input5"/>
						<label className='tip-btn'  htmlFor='input5'>50%</label>
					</div>
					<input type='number' name='tip' className='tip-customer' onInput={handleSelectedTip} />
				</div>
			</div>

			<div className='label-group'>
				<div className='label-wrapper'>
					<label className='label' htmlFor='people'>
						Number of People
					</label>
					{/* <p className='error'>{showPeoplsError ? "Please enter numbers only" : ""}</p> */}
				</div>
				<div className='number-wrapper'>
					<input type='number' id='people' className='number-input' onInput={(e) => setPeople(+e.target.value)}/>
					<BsFillPersonFill aria-hidden='true' className='icon' />
				</div>
			</div>
		</div>
	)
}

export default Form
