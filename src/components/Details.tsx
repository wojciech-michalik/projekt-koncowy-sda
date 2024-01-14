import { Link, useLocation } from 'react-router-dom';
import { Employee } from '../App';
import SideMenu from './SideMenu';

export function Details() {
	const location = useLocation();
	const data: Employee = location.state;

	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<SideMenu />
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
										value={data.birthdate.toLocaleDateString()}
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
								<div className='row'>
									<Link to='/' className='m-4 btn btn-primary col'>
										Wróć do poprzedniej strony
									</Link>
									<button className='m-4 btn btn-primary col'>Edytuj dane pracownika</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
