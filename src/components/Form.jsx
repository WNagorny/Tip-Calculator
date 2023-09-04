import { BsFillPersonCheckFill, BsCurrencyDollar } from 'react-icons/bs'

const Form = () => {
	return (
		<div className='form'>
			<div className='label-group'>
				<label htmlFor='bill'>Bill</label>
				<input type='number' id='bill' className='label' />
				<BsCurrencyDollar aria-hidden='true' className='icon' />
			</div>

			<div className='tip-section'>
            <p className="label">Selected Tip %</p>
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
					<label htmlFor='people'>Number of People</label>
					<p>Error</p>
				</div>
				<input type='number' id='people' />
				<BsFillPersonCheckFill aria-hidden='true' className='icon' />
			</div>
		</div>
	)
}

export default Form
