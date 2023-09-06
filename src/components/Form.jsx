import PropTypes from 'prop-types'
import { BsFillPersonFill, BsCurrencyDollar } from 'react-icons/bs'

const Form = ({
	bill,
	setBill,
	people,
	setPeople,
	setTip,
	setSelectedTip,
	selectedTip,
}) => {
	const handleSelectedTip = e => {
		const selectedValue = e.target.value
		setSelectedTip(e.target.value)

		setTip(+e.target.value)

		if (['5', '10', '15', '25', '50'].includes(selectedValue)) {
			// Clear the custom tip input field by setting it to an empty string
			document.getElementById('custom').value = ''
		}
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
						onChange={e =>
							setBill(e.target.value === '' ? '' : +e.target.value)
						}
						value={bill === '' ? '' : bill}
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
							onChange={handleSelectedTip}
							value='5'
							checked={selectedTip === '5'}
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
							onChange={handleSelectedTip}
							value='10'
							checked={selectedTip === '10'}
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
							onChange={handleSelectedTip}
							value='15'
							checked={selectedTip === '15'}
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
							onChange={handleSelectedTip}
							value='25'
							checked={selectedTip === '25'}
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
							onChange={handleSelectedTip}
							value='50'
							checked={selectedTip === '50'}
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
							onChange={handleSelectedTip}
							placeholder='Custom'
						/>
						<label htmlFor='custom' className='tip-custom-label'></label>
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
						onChange={e =>
							setPeople(e.target.value === '' ? '' : +e.target.value)
						}
						value={people === '' ? '' : people}
					/>
					<BsFillPersonFill aria-hidden='true' className='icon' />
				</div>
			</div>
		</div>
	)
}

Form.propTypes = {
	bill: PropTypes.number.isRequired,
	setBill: PropTypes.func.isRequired,
	people: PropTypes.number.isRequired,
	setPeople: PropTypes.func.isRequired,
	tip: PropTypes.number.isRequired,
	setTip: PropTypes.func.isRequired,
	setSelectedTip: PropTypes.func.isRequired,
	selectedTip: PropTypes.number.isRequired,
}

export default Form
