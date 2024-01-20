import { Link } from 'react-router-dom';
import SideMenu from '../components/SideMenu';
import { Employee } from '../HomePage';

export function AddPage() {
	const makeEmployee = (formData: FormData): Employee => {
		return {
			id: Date.now().toString(),
			firstname: formData.get('firstname') as string,
			lastname: formData.get('lastname') as string,
			birthdate: new Date(formData.get('birthdate') as string),
			phonenumber: formData.get('phonenumber') as string,
			address: formData.get('address') as string,
			city: formData.get('city') as string,
			postalcode: formData.get('postalcode') as string,
			salary: +(formData.get('salary') as string),
			status: 'dostępny',
		};
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const newEmployee = makeEmployee(formData);
		console.log(newEmployee);
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
									{/* <div className='col'>
										<label htmlFor='status' className='form-label'>
											Status pracownika
										</label>
										<input className='form-control' type='text' id='status' name='status' />
									</div> */}
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
