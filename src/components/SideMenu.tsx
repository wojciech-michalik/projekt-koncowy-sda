import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const SideMenu = () => {
	return (
		<div className='d-flex flex-column flex-shrink-0 p-3 bg-light vh-100' style={{ width: 'auto' }}>
			<nav className='navbar navbar-expand-md navbar-light bg-light'>
				<div className='container-fluid'>
					<button
						className='navbar-toggler m-3'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarNav'>
						<div>
							<h5>Użytkownik: </h5>
							<p>Admin</p>
							<ul className='navbar-nav flex-column nav-pills'>
								<li className='nav-item'>
									<NavLink to='/' className='nav-link'>
										Lista pracowników
									</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink to='/link1' className='nav-link '>
										Wnioski o urlop
									</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink to='/link2' className='nav-link'>
										Grafik
									</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink to='/link3' className='nav-link'>
										Wypłaty
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
			<div className='mb-3 ps-2' style={{ position: 'absolute', bottom: 0 }}>
				<p>Wyloguj się</p>
			</div>
		</div>
	);
};

export default SideMenu;
