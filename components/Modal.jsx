const Modal = (props) => {
	let closeButton = null;
	const submitModal = () => {
		alert('Submitting Modal');
		closeButton.click();
	};

	return (
		<div>
			<button
				type='button'
				className='btn btn-primary main-font-size'
				data-toggle='modal'
				data-target='#exampleModal'
			>
				Create Movie
			</button>

			<div
				className='modal fade'
				id='exampleModal'
				tabIndex='-1'
				role='dialog'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog text-dark' role='document'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								Create Movie
							</h5>
							<button
								type='button'
								className='close main-font-size'
								data-dismiss='modal'
								aria-label='Close'
							>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div className='modal-body'>{props.children}</div>
						<div className='modal-footer'>
							<button
								ref={(ele) => (closeButton = ele)}
								type='button'
								className='btn btn-secondary main-font-size'
								data-dismiss='modal'
							>
								Close
							</button>
							<button
								onClick={submitModal}
								type='button'
								className='btn btn-primary main-font-size'
							>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
