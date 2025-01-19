import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import { Menu } from './pages/Menu/Menu'; // Заменено на Lazy Loading
import { Cart } from './pages/Cart/Cart';
import { Error as ErrorPage } from './pages/Error/Error';
import { Product } from './pages/Product/Product';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layout/Layout/Layout';
import axios from 'axios';
import { PREFIX } from './helpers/API';

const Menu = lazy(() => import('./pages/Menu/Menu'));

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <Suspense fallback={<>Загрузка...</>}><Menu /></Suspense>
				},
				{
					path: '/cart',
					element: <Cart />
				},
				{
					path: '/product/:id',
					element: <Product />,
					errorElement: <>Ошибка</>,
					loader: async ({ params }) => {
						await new Promise<void>((resolve)=>{
							setTimeout(()=>{
								resolve();
							}, 2000);
						});
			
						const { data } = await axios.get(`${PREFIX}/products/${params.id}`);
						return data;
					}
				}
			]
		},
		{
			path: '*',
			element: <ErrorPage />
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

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} future={{ v7_startTransition: true }} />
	</StrictMode>
);
