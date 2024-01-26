import { Link, useNavigate } from 'react-router-dom';
import SideMenu from '../components/SideMenu';
import { createEmployee } from '../services/API';
import { makeEmployee } from '../services/Employee';
import { useState } from 'react';
import { STATUS_OPTIONS, StatusOption } from '../models/StatusOption';

export function AddPage() {
	const navigate = useNavigate();
	const [statusOption] = useState<StatusOption[]>(STATUS_OPTIONS);
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const newEmployee = makeEmployee(formData);

		createEmployee(newEmployee)
			.then(() => {
				navigate('/');
			})
			.catch(error => console.warn(error));
	};

	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<SideMenu />
					<div className='col mt-4 pe-4 ps-4'>
						<h1>Dodanie nowego pracownika</h1>
						<form onSubmit={handleSubmit}>
							<hr className='dividerSolid'></hr>
							<div className='container p-4 border rounded'>
								<div className='mb-3 row'>
									<div className='col'>
										<label htmlFor='firstname' className='form-label'>
											Imię
										</label>
										<input className='form-control' type='text' id='firstname' name='firstname' />
									</div>
									<div className='col'>
										<label htmlFor='lastname' className='form-label col'>
											Nazwisko
										</label>
										<input className='form-control col' type='text' id='lastname' name='lastname' />
									</div>
								</div>
								<div className='mb-3 row'>
									<div className='col'>
										<label htmlFor='salary' className='form-label'>
											Pensja
										</label>
										<input className='form-control' type='text' id='salary' name='salary' />
									</div>
									<div className='col'>
										<label htmlFor='status' className='form-label'>
											Status pracownika
										</label>
										<select className='form-control' id='status' name='status'>
											{statusOption.map(item => (
												<option value={item.value}>{item.label}</option>
											))}
										</select>
									</div>
								</div>
								<div className='mb-3 row'>
									<div className='col'>
										<label htmlFor='birthdate' className='form-label'>
											Data urodzenia
										</label>
										<input className='form-control' type='text' id='birthdate' name='birthdate' />
									</div>
									<div className='col'>
										<label htmlFor='address' className='form-label'>
											Miejsce zamieszkania
										</label>
										<input className='form-control' type='text' id='address' name='address' />
									</div>
								</div>
								<div className='row'>
									<div className='col'>
										<label htmlFor='postalcode' className='form-label'>
											Kod pocztowy
										</label>
										<input className='form-control' type='text' id='postalcode' name='postalcode' />
									</div>
									<div className='col'>
										<label htmlFor='phonenumber' className='form-label'>
											Numer telefonu
										</label>
										<input
											className='form-control'
											type='text'
											id='phonenumber'
											name='phonenumber'
										/>
									</div>
									<div className='row'>
										<Link to='/' className='m-4 btn btn-primary col'>
											Wróć do poprzedniej strony
										</Link>
										<button type='submit' className='m-4 btn btn-primary col'>
											Dodaj nowego pracownika
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
