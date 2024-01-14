import { useNavigate } from 'react-router-dom';
import { Employee, EmployeeStatus } from '../App';
import { useState } from 'react';
import SideMenu from './SideMenu';

export function Table(props: { data: Employee[] }) {
	const [filteredData, setFilteredData] = useState(props.data);
	const navigate = useNavigate();
	const renderStatus = (status: EmployeeStatus): string => {
		switch (status) {
			case 'nieobecny':
				return '🤢';
			case 'dostępny':
				return '🙂';
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
			<div className='row'>
				<SideMenu />
				<div className='container col ps-4 mt-4'>
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
								<th>ID</th>
								<th>Imię</th>
								<th>Nazwisko</th>
								<th>Pensja</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{filteredData.map(item => (
								<tr className='clickable' key={item.id} onClick={event => handleRowClick(event, item)}>
									<td>{item.id}</td>
									<td>{item.firstname}</td>
									<td>{item.lastname}</td>
									<td>{item.salary}</td>
									<td>{renderStatus(item.status)}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
