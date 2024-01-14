import { Link, useLocation } from 'react-router-dom';
import { Employee } from '../App';

export function Details() {
	const location = useLocation();
	const data: Employee = location.state;

	return (
		<>
			<h3>Szczegóły pracownika</h3>
			<div className='mb-3'>
				<label htmlFor='firstname' className='form-label'>
					Imię
				</label>
				<input className='form-control' type='text' id='firstname' value={data.firstname} readOnly />
				<label htmlFor='lastname' className='form-label'>
					Nazwisko
				</label>
				<input className='form-control' type='text' id='lastname' value={data.lastname} readOnly />
				<label htmlFor='salary' className='form-label'>
					Pensja
				</label>
				<input className='form-control' type='text' id='salary' value={data.salary} readOnly />
				<label htmlFor='status' className='form-label'>
					Status pracownika
				</label>
				<input className='form-control' type='text' id='status' value={data.status} readOnly />
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
				<label htmlFor='address' className='form-label'>
					Miejsce zamieszkania
				</label>
				<input className='form-control' type='text' id='address' value={data.address} readOnly />
				<label htmlFor='postalcode' className='form-label'>
					Kod pocztowy
				</label>
				<input className='form-control' type='text' id='postalcode' value={data.postalcode} readOnly />
				<label htmlFor='phonenumber' className='form-label'>
					Numer telefonu
				</label>
				<input className='form-control' type='text' id='phonenumber' value={data.phonenumber} readOnly />
				<Link to='/' className='mt-4 btn btn-primary'>
					Wróć do poprzedniej strony
				</Link>
			</div>
		</>
	);
}