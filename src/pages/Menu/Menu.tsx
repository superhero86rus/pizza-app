import { useEffect, useState } from 'react';
import Headling from '../../components/Headling/Headling';
import ProductCard from '../../components/ProductCard/ProductCard';
import Search from '../../components/Search/Search';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import styles from './Menu.module.css';
import axios, { AxiosError } from 'axios';
import { MenuList } from './MenuList/MenuList';

export function Menu(){

	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(false); // Состояние загрузки
	const [error, setError] = useState<string | undefined>(); // Состояние ошибки при загрузке

	const getMenu = async () => {

		try{
			setIsLoading(true);
			await new Promise((resolve)=>{
				setTimeout(()=>{
					resolve();
				}, 2000);
			});

			const { data } = await axios.get<Product[]>(`${PREFIX}/produc2ts`);
			if(data) setProducts(data);
			setIsLoading(false);
		}catch(e){
			console.log(e);
			if(e instanceof AxiosError){
				setError(e.message);
			}
			setIsLoading(false);
		    return;
		}
	};

	useEffect(() => {
		getMenu();
	}, []);

	return <>
		<div className={styles['head']}>
			<Headling>Меню</Headling>
		    <Search placeholder="Введите блюдо или состав"/>
		</div>
		<div>
			{error && <>{error}</>}

			{!isLoading && <MenuList products={products} />}

			{isLoading && <>Загружаем продукты...</>}
			
		</div>
		
	</>;
}