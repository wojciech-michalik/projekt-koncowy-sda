import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './HomePage.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Details } from './pages/DetailsPage.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/details',
		element: <Details />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<div className='mx-0'>
			<RouterProvider router={router} />
		</div>
	</React.StrictMode>
);
