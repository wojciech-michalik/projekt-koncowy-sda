import { NavLink } from 'react-router-dom'; // Zakładam, że używasz react-router-dom dla nawigacji

export const SideMenu = () => {
	return (
		<div className='d-flex flex-column flex-shrink-0 p-3 bg-light vh-100' style={{ width: '280px' }}>
			<div className='ps-2 flex-grow-1'>
				<h5>Użytkownik: </h5>
				<p>Admin</p>

				<ul className='nav nav-pills flex-column mb-auto pt-3'>
					<li className='nav-item'>
						<NavLink to='/' className='nav-link active' aria-current='page'>
							Lista pracowników
						</NavLink>
					</li>
					<li>
						<NavLink to='/link1' className='nav-link'>
							Wnioski o urlop
						</NavLink>
					</li>
					<li>
						<NavLink to='/link2' className='nav-link'>
							Grafik
						</NavLink>
					</li>
					<li>
						<NavLink to='/link3' className='nav-link'>
							Wypłaty
						</NavLink>
					</li>
				</ul>
			</div>
			<div className='mb-1 ps-2'>
				<p>Wyloguj się</p>
			</div>
		</div>
	);
};

export default SideMenu;
