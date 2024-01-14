import { NavLink } from 'react-router-dom'; // Zakładam, że używasz react-router-dom dla nawigacji

export const SideMenu = () => {
	return (
		<div className='d-flex flex-column flex-shrink-0 p-3 bg-light vh-100' style={{ width: '280px' }}>
			<ul className='nav nav-pills flex-column mb-auto pt-3 ps-2'>
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
	);
};

export default SideMenu;
