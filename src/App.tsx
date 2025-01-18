import { MouseEvent, useState } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { Menu } from './pages/Menu/Menu';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Menu />
		},
		{
			path: '/cart',
			element: <Cart />
		},
		{
			path: '*',
			element: <Error />
		}
	], 
	{
		future: {
			v7_relativeSplatPath: true, // Enables relative paths in nested routes
			v7_fetcherPersist: true,   // Retains fetcher state during navigation
			v7_normalizeFormMethod: true, // Normalizes form methods (e.g., POST or GET)
			v7_partialHydration: true, // Supports partial hydration for server-side rendering
			v7_skipActionErrorRevalidation: true // Prevents revalidation when action errors occur
		}
	}
);

function App() {

	const [counter, setCounter] = useState<number>(0);

	const AddCounter = (e: MouseEvent) => {
		console.log(e);
	};
  
	return (
		<>
			<Button onClick={ AddCounter }>Кнопка</Button>
			<Button appearance='big' onClick={ AddCounter }>Кнопка</Button>
			<Input placeholder='Email' />

			<div>
				<a href="/">Меню</a>
				<a href="/cart">Корзина</a>
			</div>

			<RouterProvider router={router} future={{ v7_startTransition: true }} />
		</>
	);
}

export default App;