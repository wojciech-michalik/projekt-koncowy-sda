import { EmployeeStatus } from './Employee';

export interface StatusOption {
	label: string;
	value: EmployeeStatus;
}

export const STATUS_OPTIONS: StatusOption[] = [
	{ label: 'Zdalnie', value: 'zdalnie' },
	{ label: 'Dostępny', value: 'dostępny' },
	{ label: 'l4', value: 'l4' },
];
