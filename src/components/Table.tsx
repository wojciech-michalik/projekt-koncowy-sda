import { useNavigate } from 'react-router-dom';
import { Employee, EmployeeStatus } from '../HomePage';
import { useState } from 'react';
import SideMenu from './SideMenu';

export function Table(props: { data: Employee[] }) {
	const [filteredData, setFilteredData] = useState(props.data);
	const [sortDirection, setSortDirection] = useState('none');
	const [sortBy, setSortBy] = useState<null | keyof Employee>(null);

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

	const handleSortClick = (event: React.MouseEvent, key: keyof Employee): void => {
		event.preventDefault();
		let sortedData = [...filteredData];
		setSortBy(key);
		if (sortDirection === 'none') {
			setSortDirection('asc');
			sortedData = sortedData.sort((a, b) => sortAsc(a, b, key));
		} else if (sortDirection === 'asc') {
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

	const handleSearchType = (event: React.KeyboardEvent): void => {
		const input = event.target as HTMLInputElement;
		const phrase = input.value.toLowerCase();

		const data = props.data.filter(item => JSON.stringify(item).toLowerCase().includes(phrase));
		setFilteredData(data);
	};

	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<SideMenu />

					<div className='col ps-4 mt-4'>
						<h1>Lista pracowników</h1>
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
									<th className='clickable' onClick={event => handleSortClick(event, 'id')}>
										ID {renderSortIcon('id')}
									</th>
									<th className='clickable' onClick={event => handleSortClick(event, 'firstname')}>
										Imię {renderSortIcon('firstname')}
									</th>
									<th className='clickable' onClick={event => handleSortClick(event, 'lastname')}>
										Nazwisko {renderSortIcon('lastname')}
									</th>
									<th className='clickable' onClick={event => handleSortClick(event, 'salary')}>
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
