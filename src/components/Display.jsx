const Display = ({calculatedTip, total, people, handleResetBtn}) => {

	const returnCurrentAmt = (amt) => {
		return new Intl.NumberFormat('en-US', {
			style: 'currency', currency: 'USD'
		}).format(amt)
	}

	return (
		<div className='display'>
			<div className='display-group'>
				<div className='display-row'>
					<div className='display-label'>
						<p className='header'>Tip amount</p>
						<p className='unit'>/ person</p>
					</div>
					<p className='display-amt'>{returnCurrentAmt(`${calculatedTip ? calculatedTip/people : '0'}`)}</p>
				</div>

				<div className='display-row'>
					<div className='display-label'>
						<p className='header'>Total</p>
						<p className='unit'>/ person</p>
					</div>
					<p className='display-amt'>{returnCurrentAmt(`${total ? total/people : '0'}`)}</p>
				</div>
			</div>
			{
				total ? (<button className='btn' onClick={handleResetBtn}>Reset</button>) : (
					<button className='btn' disabled>Reset</button>
				)
				
			}
		</div>
	)
}

export default Display
