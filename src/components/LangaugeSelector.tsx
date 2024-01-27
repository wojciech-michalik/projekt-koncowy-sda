import { ChangeEvent } from 'react';
import i18n from '../i18n';

export function LanguageSelector() {
	const langs = [
		{ code: 'pl', label: 'Polski' },
		{ code: 'en', label: 'English' },
	];

	const handleLanguageChange = (e: ChangeEvent): void => {
		e.preventDefault();
		const element = e.target as HTMLSelectElement;
		const code = element.value;

		i18n.changeLanguage(code);
	};

	return (
		<>
			<select className='form-control w-auto' onChange={handleLanguageChange}>
				{langs.map(lang => (
					<option value={lang.code}>{lang.code}</option>
				))}
			</select>
		</>
	);
}
