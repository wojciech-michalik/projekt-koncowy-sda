import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const dataResources = {
	en: {
		translation: {
			pracownicy: 'Employees',
			addbtn: 'Add Employee',
			znaleziono_one: 'Found {{count}} employee',
			znaleziono_other: 'Found {{count}} employees ',
			edytujPracownika: 'Edit Employee',
		},
	},
	pl: {
		translation: {
			pracownicy: 'Lista pracowników',
			addbtn: 'Dodaj pracownika',
			znaleziono_one: 'Znaleziono {{count}} pracownika',
			znaleziono_other: 'Znaleziono {{count}} pracowników',
			edytujPracownika: 'Edytuj pracownika',
		},
	},
};

i18n.use(LanguageDetector).use(initReactI18next).init({
	resources: dataResources,
	lng: 'pl',
	fallbackLng: 'pl',
});

export default i18n;
