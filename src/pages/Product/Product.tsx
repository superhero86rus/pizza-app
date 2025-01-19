import { Await, useLoaderData } from 'react-router-dom';
import { Product as ProductInterface } from '../../interfaces/product.interface';
import { Suspense } from 'react';

export function Product(){

	const data = useLoaderData() as { data: ProductInterface };

	return <>
		<Suspense fallback={<>Загружаю...</>}>
			<Await
				resolve={data.data}
			>
				{({data}: {data: ProductInterface}) => (
					<>Product - {data.name}</>
				)}
			</Await>
		</Suspense>
	</>;
}