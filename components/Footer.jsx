const Footer = () => {
	return (
		<footer className='main-footer w-100 bg-dark'>
			<div className='container'>
				<p className='m-0 text-center text-white'>
					Copyright &copy; Your Website 2021 - {`${new Date().getFullYear()}`}
				</p>
			</div>
			<style jsx>{`
				.main-footer {
					height: 5rem;
					padding: 5rem 0;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}
			`}</style>
		</footer>
	);
};

export default Footer;
