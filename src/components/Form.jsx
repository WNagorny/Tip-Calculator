import { BsFillPersonFill, BsCurrencyDollar } from 'react-icons/bs'

const Form = ({handleBillAmtInput,handleSelectedTip,showBillAmtError,billAmt,handlePeoplsInput,peopls,showPeoplsError}) => {
	return (
		<div className='form'>
			<div className='label-group'>
				<div className='label-wrapper'>
					<label className='label' htmlFor='bill'>
						Bill
					</label>
               <p className='error'>{showBillAmtError ? "Please enter numbers only" : ""}</p>
				</div>
				<div className='number-wrapper'>
					<input type='text' id='bill' className='number-input' onInput={handleBillAmtInput} value={billAmt} />
					<BsCurrencyDollar aria-hidden='true' className='icon' />
				</div>
			</div>

			<div className='tip-section'>
				<p className='label'>Selected Tip %</p>
				<div className='tip-amount-wrapper'>
					<div className='tip-amount'>
						<input type='radio' name='tip' value='0.05' />
						<div className='tip-btn'>5%</div>
					</div>
					<div className='tip-amount'>
						<input type='radio' name='tip' value='0.1' />
						<div className='tip-btn'>10%</div>
					</div>
					<div className='tip-amount'>
						<input type='radio' name='tip' value='0.15' />
						<div className='tip-btn'>15%</div>
					</div>
					<div className='tip-amount'>
						<input type='radio' name='tip' value='0.25' />
						<div className='tip-btn'>25%</div>
					</div>
					<div className='tip-amount'>
						<input type='radio' name='tip' value='0.50' />
						<div className='tip-btn'>50%</div>
					</div>
					<input type='number' className='tip-customer' />
				</div>
			</div>

			<div className='label-group'>
				<div className='label-wrapper'>
					<label className='label' htmlFor='people'>
						Number of People
					</label>
					<p className='error'>{showPeoplsError ? "Please enter numbers only" : ""}</p>
				</div>
				<div className='number-wrapper'>
					<input type='text' id='people' className='number-input' onInput={handlePeoplsInput} value={peopls}/>
					<BsFillPersonFill aria-hidden='true' className='icon' />
				</div>
			</div>
		</div>
	)
}

export default Form
