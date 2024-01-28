import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Employee } from '../models/Employee';
import SideMenu from '../components/SideMenu';
import React, { useState } from 'react';

export function Details() {
	const location = useLocation();
	const navigate = useNavigate();
	//TO DO: Improve loading of employee in case it is not passed
	const data: Employee = location.state;

	const formatDate = (date: Date): string => {
		const month = date.getMonth() + 1;
		const formatedMonth = month < 10 ? '0' + month : month;
		const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

		return date.getFullYear() + '-' + formatedMonth + '-' + day;
	};

	const handleEditClick = (event: React.MouseEvent, item: Employee): void => {
		event.preventDefault();

		navigate('/edit', { state: item });
	};

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<SideMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
					<div className='col mt-4 pe-4 ps-4'>
						<h1>Szczegóły pracownika</h1>
						<hr className='dividerSolid'></hr>
						<div className='container p-4 border rounded'>
							<div className='mb-3 row'>
								<div className='col'>
									<label htmlFor='firstname' className='form-label'>
										Imię
									</label>
									<input
										className='form-control'
										type='text'
										id='firstname'
										value={data.firstname}
										readOnly
									/>
								</div>
								<div className='col'>
									<label htmlFor='lastname' className='form-label col'>
										Nazwisko
									</label>
									<input
										className='form-control col'
										type='text'
										id='lastname'
										value={data.lastname}
										readOnly
									/>
								</div>
							</div>
							<div className='mb-3 row'>
								<div className='col'>
									<label htmlFor='salary' className='form-label'>
										Pensja
									</label>
									<input
										className='form-control'
										type='text'
										id='salary'
										value={data.salary}
										readOnly
									/>
								</div>
								<div className='col'>
									<label htmlFor='status' className='form-label'>
										Status pracownika
									</label>
									<input
										className='form-control'
										type='text'
										id='status'
										value={data.status}
										readOnly
									/>
								</div>
							</div>
							<div className='mb-3 row'>
								<div className='col'>
									<label htmlFor='birthdate' className='form-label'>
										Data urodzenia
									</label>
									<input
										className='form-control'
										type='text'
										id='birthdate'
										value={formatDate(data.birthdate)}
										readOnly
									/>
								</div>
								<div className='col'>
									<label htmlFor='address' className='form-label'>
										Miejsce zamieszkania
									</label>
									<input
										className='form-control'
										type='text'
										id='address'
										value={data.address}
										readOnly
									/>
								</div>
							</div>
							<div className='row'>
								<div className='col'>
									<label htmlFor='postalcode' className='form-label'>
										Kod pocztowy
									</label>
									<input
										className='form-control'
										type='text'
										id='postalcode'
										value={data.postalcode}
										readOnly
									/>
								</div>
								<div className='col'>
									<label htmlFor='phonenumber' className='form-label'>
										Numer telefonu
									</label>
									<input
										className='form-control'
										type='text'
										id='phonenumber'
										value={data.phonenumber}
										readOnly
									/>
								</div>
							</div>
						</div>
						<div className='row gap-4 p-4 justify-content-evenly'>
							<Link to='/' className='btn btn-primary col' style={{ maxWidth: '250px' }}>
								Wróć do poprzedniej strony
							</Link>
							<button
								className='btn btn-warning col'
								onClick={event => handleEditClick(event, data)}
								style={{ maxWidth: '250px' }}>
								Edit
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
