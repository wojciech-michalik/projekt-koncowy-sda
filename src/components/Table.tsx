import { Link, useNavigate } from 'react-router-dom';
import { Employee, EmployeeStatus } from '../models/Employee';
import { useState } from 'react';
import SideMenu from './SideMenu';
import { ConfirmModal } from './Modal';
import { removeEmployee } from '../services/API';

export function Table(props: { data: Employee[] }) {
	const [filteredData, setFilteredData] = useState(props.data);
	const [sortDirection, setSortDirection] = useState('none');
	const [sortBy, setSortBy] = useState<null | keyof Employee>(null);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [selected, setSelected] = useState<string | null>(null);

	const sortAsc = (a: Employee, b: Employee, key: keyof Employee): number => {
		if (a[key] > b[key]) {
			return 1;
		}
		if (a[key] < b[key]) {
			return -1;
		}
		return 0;
	};

	const sortDesc = (a: Employee, b: Employee, key: keyof Employee): number => {
		if (a[key] < b[key]) {
			return 1;
		}
		if (a[key] > b[key]) {
			return -1;
		}
		return 0;
	};
	const handleHeaderColumnClick = (event: React.MouseEvent, key: keyof Employee): void => {
		event.preventDefault();
		setSortBy(key);
		let sortedData = [...filteredData];
		let tempSortDirection = sortDirection;

		if (key !== sortBy) {
			tempSortDirection = 'none';
		}

		if (tempSortDirection === 'none') {
			setSortDirection('asc');
			sortedData = sortedData.sort((a, b) => sortAsc(a, b, key));
		} else if (tempSortDirection === 'asc') {
			setSortDirection('desc');
			sortedData = sortedData.sort((a, b) => sortDesc(a, b, key));
		} else {
			setSortDirection('none');
			sortedData = props.data;
		}

		setFilteredData([...sortedData]);
	};

	const renderSortIcon = (key: keyof Employee): string => {
		if (key === sortBy) {
			switch (sortDirection) {
				case 'asc':
					return '⬇️';
				case 'desc':
					return '⬆️';
				default:
					return '';
			}
		}
		return '';
	};

	const navigate = useNavigate();
	const renderStatus = (status: EmployeeStatus): string => {
		switch (status) {
			case 'zdalnie':
				return '🏠';
			case 'dostępny':
				return '🙂';
			case 'l4':
				return '🤢';
			default:
				return '﹖';
		}
	};

	const handleRowClick = (event: React.MouseEvent, item: Employee): void => {
		event.preventDefault();

		navigate('/details', { state: item });
	};

	const handleDeleteClick = (event: React.MouseEvent, id: string): void => {
		event.preventDefault();

		setSelected(id);
		setShowDeleteModal(true);
	};

	const findByPhrase = (columns: string[], item: { [key: string]: string }, phrase: string): boolean => {
		let result = false;
		columns.forEach(key => {
			const field = item[key];
			if (field.toLowerCase().includes(phrase)) {
				result = true;
				return;
			}
		});
		return result;
	};

	const handleSearchType = (event: React.KeyboardEvent): void => {
		const input = event.target as HTMLInputElement;
		const phrase = input.value.toLowerCase();
		const columns = ['lastname', 'firstname', 'phonenumber', 'address'];

		const data = props.data.filter(item => {
			// Basic Example
			// return item.lastname.toLowerCase().includes(phrase)
			// || item.firstname.toLowerCase().includes(phrase)
			// || item.phonenumber.includes(phrase)

			// More advanced
			return findByPhrase(columns, item as unknown as { [key: string]: string }, phrase);
		});
		setFilteredData(data);
	};

	const handleClose = (): void => {
		setShowDeleteModal(false);
		setSelected(null);
	};

	const handleDeleteConfirm = (): void => {
		const id = selected;

		if (id) {
			removeEmployee(id)
				.then(() => {
					const data = [...props.data].filter(item => item.id !== id);
					setFilteredData(data);

					handleClose();
				})
				.catch(error => console.warn(error));
		} else {
			console.warn('No selected employee');
		}
	};

	return (
		<>
			<ConfirmModal
				show={showDeleteModal}
				title='Delete confirmation'
				description='Are you sure, you want to delete this employee?'
				onConfirm={handleDeleteConfirm}
				onCancel={handleClose}
			/>
			<div className='container-fluid'>
				<div className='row'>
					<SideMenu />
					<div className='col ps-4 mt-4'>
						<h1>Lista pracowników</h1>
						<div className='d-flex justify-content-end me-1'>
							<Link to='/add' className='btn-success btn btn-sm'>
								Dodaj pracownika
							</Link>
						</div>
						<hr className='dividerSolid'></hr>
						<div className='mb-3'>
							<input
								onKeyUp={handleSearchType}
								className='form-control'
								type='search'
								placeholder='Wpisz dane pracownika...'
							/>
						</div>
						<table className='table table-striped'>
							<thead>
								<tr>
									<th className='clickable' onClick={event => handleHeaderColumnClick(event, 'id')}>
										ID {renderSortIcon('id')}
									</th>
									<th
										className='clickable'
										onClick={event => handleHeaderColumnClick(event, 'firstname')}>
										Imię {renderSortIcon('firstname')}
									</th>
									<th
										className='clickable'
										onClick={event => handleHeaderColumnClick(event, 'lastname')}>
										Nazwisko {renderSortIcon('lastname')}
									</th>
									<th
										className='clickable'
										onClick={event => handleHeaderColumnClick(event, 'salary')}>
										Pensja {renderSortIcon('salary')}
									</th>
									<th>Status</th>
									<th>Szczegółowe dane</th>
								</tr>
							</thead>
							<tbody>
								{filteredData.map(item => (
									<tr>
										<td>{item.id}</td>
										<td>{item.firstname}</td>
										<td>{item.lastname}</td>
										<td>{item.salary}</td>
										<td>{renderStatus(item.status)}</td>
										<td>
											<button
												className='clickable btn btn-outline-dark btn-sm'
												key={item.id}
												onClick={event => handleRowClick(event, item)}>
												<strong>Zobacz szczegóły</strong>
											</button>
											<button
												className='btn btn-danger'
												onClick={event => handleDeleteClick(event, item.id)}>
												Delete
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}
