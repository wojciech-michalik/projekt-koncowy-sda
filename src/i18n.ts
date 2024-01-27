import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const dataResources = {
	en: {
		translation: {
			pracownicy: 'Employees',
			znaleziono_one: 'Found {{count}} employye ',
			znaleziono_other: 'Found {{count}} employyes ',
		},
	},
	pl: {
		translation: {
			pracownicy: 'Lista pracowników',
			addbtn: 'Dodaj pracownika',
			znaleziono_one: 'Znaleziono {{count}} pracownika ',
			znaleziono_other: 'Znaleziono {{count}} pracowników',
		},
	},
};

i18n.use(initReactI18next).init({
	resources: dataResources,
	lng: 'pl',
	fallbackLng: 'pl',
});

export default i18n;
