import Link from 'next/link';

const Layout = ({ children }) => {
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<a className='navbar-brand' href='/'>
					Brand
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item active'>
							<Link href='/'>
								<a className='nav-link'>
									Home{' '}
									<span className='sr-only'>(current)</span>
								</a>
							</Link>
						</li>
						<li className='nav-item active'>
							<Link href='/about'>
								<a className='nav-link'>About</a>
							</Link>
						</li>
						<li className='nav-item active'>
							<Link href='/fetch'>
								<a className='nav-link'>Fetch</a>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Layout;
