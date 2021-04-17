import Link from 'next/link';

const Navbar = () => {
	return (
		<nav
			style={{ zIndex: '30' }}
			className='main-navbar w-100 navbar navbar-expand-lg navbar-dark bg-dark fixed-top'
		>
			<div className='container'>
				<a className='navbar-brand main-font-size' href='#'>
					Movies DB Web App
				</a>
				<button
					className='navbar-toggler main-font-size'
					type='button'
					data-toggle='collapse'
					data-target='#navbarResponsive'
					aria-controls='navbarResponsive'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarResponsive'>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item active'>
							<Link href='/'>
								<a className='nav-link main-font-size' href='#'>
									Home
									<span className='sr-only'>(current)</span>
								</a>
							</Link>
						</li>
						<li className='nav-item'>
							<Link href='/about'>
								<a className='nav-link main-font-size' href='#'>
									About
								</a>
							</Link>
						</li>
						<li className='nav-item'>
							<Link href='/services'>
								<a className='nav-link main-font-size' href='#'>
									Services
								</a>
							</Link>
						</li>
						<li className='nav-item'>
							<Link href='/contact'>
								<a className='nav-link main-font-size' href='#'>
									Contact
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
