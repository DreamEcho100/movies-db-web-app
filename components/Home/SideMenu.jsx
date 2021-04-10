const SideMenu = () => {
	return (
		<>
			<h1 style={{ fontSize: 'calc(var(--header1) - 1rem)' }} className='my-4'>
				Shop Name
			</h1>
			<div className='current-theme list-group'>
				<a href='#' className='current-theme list-group-item'>
					Category 1
				</a>
				<a href='#' className='current-theme list-group-item'>
					Category 2
				</a>
				<a href='#' className='current-theme list-group-item'>
					Category 3
				</a>
			</div>
		</>
	);
};

export default SideMenu;
