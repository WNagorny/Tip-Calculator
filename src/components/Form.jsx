import { useState } from 'react'
import { BsFillPersonFill, BsCurrencyDollar } from 'react-icons/bs'

const Form = ({ bill, setBill, people, setPeople, tip, setTip }) => {

	const [isCustumSelected, setIsCustumSelected] = useState(false)

	const handleSelectedTip = e => {
		setTip(+e.target.value)
		setIsCustumSelected(e.target.value === '' ? false : true)
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
					<input
						type='number'
						id='bill'
						className='number-input'
						onInput={e => setBill(+e.target.value)}
						value={bill}
					/>
					<BsCurrencyDollar aria-hidden='true' className='icon' />
				</div>
			</div>

			<div className='tip-section'>
				<p className='label'>Selected Tip %</p>
				<div className='tip-amount-wrapper'>
					<div className='tip-amount'>
						<input
							type='radio'
							name='tip'
							className='tip-input'
							onInput={handleSelectedTip}
							value='5'
							id='input1'
						/>
						<label className='tip-btn' htmlFor='input1'>
							5%
						</label>
					</div>
					<div className='tip-amount'>
						<input
							type='radio'
							name='tip'
							className='tip-input'
							onInput={handleSelectedTip}
							value='10'
							id='input2'
						/>
						<label className='tip-btn' htmlFor='input2'>
							10%
						</label>
					</div>
					<div className='tip-amount'>
						<input
							type='radio'
							name='tip'
							className='tip-input'
							onInput={handleSelectedTip}
							value='15'
							id='input3'
						/>
						<label className='tip-btn' htmlFor='input3'>
							15%
						</label>
					</div>
					<div className='tip-amount'>
						<input
							type='radio'
							name='tip'
							className='tip-input'
							onInput={handleSelectedTip}
							value='25'
							id='input4'
						/>
						<label className='tip-btn' htmlFor='input4'>
							25%
						</label>
					</div>
					<div className='tip-amount'>
						<input
							type='radio'
							name='tip'
							className='tip-input'
							onInput={handleSelectedTip}
							value='50'
							id='input5'
						/>
						<label className='tip-btn' htmlFor='input5'>
							50%
						</label>
					</div>
					<div className='custom-wrapper'>
						<input
							type='number'
							name='tip'
							id='custom'
							className='tip-custom number-input'
							onInput={handleSelectedTip}
							placeholder='Custom'
						/>
						<label htmlFor="custom" className='tip-custom-label'></label>
					</div>
				</div>
			</div>

			<div className='label-group'>
				<div className='label-wrapper'>
					<label className='label' htmlFor='people'>
						Number of People
					</label>
					<p className='error'>{people === 0 ? "Can't be zero" : ''}</p>
				</div>
				<div className='number-wrapper'>
					<input
						type='number'
						id='people'
						className='number-input'
						onInput={e => setPeople(+e.target.value)}
						value={people}
					/>
					<BsFillPersonFill aria-hidden='true' className='icon' />
				</div>
			</div>
		</div>
	)
}

export default Form
