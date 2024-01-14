import { useState } from 'react';

export interface Worker {
	id: string;
	firstname: string;
	lastname: string;
	salary: number;
	status: string;
}

export const mockData: Worker[] = [
	{
		id: '1',
		firstname: 'Jan',
		lastname: 'Kowalski',
		salary: 5000,
		status: 'nieobecny',
	},
	{ id: '2', firstname: 'kasia', lastname: 'Kowalski', salary: 5000, status: 'Dostępny' },
];

export type WorkerStatus = 'nieobecny' | 'Dostępny';

const Table = () => {
	const [data] = useState(mockData);

	const renderStatus = (status: WorkerStatus): string => {
		switch (status) {
			case 'nieobecny':
				return '🤧';
			case 'Dostępny':
				return '😉';
			default:
				return '?';
		}
	};

	return (
		<div>
			<table>
				<thead>
					<td>id</td>
					<td>Imie</td>
					<td>Nazwisko</td>
					<td>Pensja</td>
					<td>Status</td>
				</thead>
				<tbody>
					{data.map(item => (
						<tr>
							<td>{item.id}</td>
							<td>{item.firstname}</td>
							<td>{item.lastname}</td>
							<td>{item.salary}</td>
							<td>{renderStatus(item.status as WorkerStatus)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
