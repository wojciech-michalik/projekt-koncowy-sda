export type EmployeeStatus = 'zdalnie' | 'dostępny' | 'l4';

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
