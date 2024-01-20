import { useState } from 'react';
import './HomePage.css';
import { Table } from './components/Table';

export interface Employee {
	id: string;
	firstname: string;
	lastname: string;
	salary: number;
	status: EmployeeStatus;
	birthdate: Date;
	address: string;
	city: string;
	postalcode: string;
	phonenumber: string;
}

export type EmployeeStatus = 'zdalnie' | 'dostępny' | 'l4';

export const mockData: Employee[] = [
	{
		id: '1',
		firstname: 'Adam',
		lastname: 'Nowak',
		salary: 10000,
		status: 'dostępny',
		birthdate: new Date('1995-05-25'),
		address: 'Katowicka 23',
		city: 'Kraków',
		postalcode: '50-000',
		phonenumber: '321321321',
	},
	{
		id: '2',
		firstname: 'Bartosz',
		lastname: 'Adamski',
		salary: 15000,
		status: 'l4',
		birthdate: new Date('1994-02-23'),
		address: 'Rybnicka 15',
		city: 'Gliwice',
		postalcode: '44-100',
		phonenumber: '423121321',
	},
	{
		id: '3',
		firstname: 'Jan',
		lastname: 'Kowalski',
		salary: 5000,
		status: 'zdalnie',
		birthdate: new Date('1990-01-01'),
		address: 'Warszawska 12',
		city: 'Wrocław',
		postalcode: '30-130',
		phonenumber: '123123123',
	},
];

function HomePage() {
	const [data] = useState(mockData);

	return (
		<>
			<Table data={data}></Table>
		</>
	);
}

export default HomePage;
