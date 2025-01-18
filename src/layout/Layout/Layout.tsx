import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListIcon from '@mui/icons-material/List';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';
import Button from '../../components/Button/Button';

export function Layout(){
	return <div className={styles['layout']}>
		<div className={styles['sidebar']}>
			<div className={styles['user']}>
				<AccountCircleIcon className={styles['avatar']} />
				<div className={styles['name']}>Котов Александр</div>
				<div className={styles['email']}>kotov.alexandr@gmail.com</div>
			</div>
			<div className={styles['menu']}>
				<Link to="/" className={styles['link']}>
					<ListIcon/>
				Меню</Link>
				<Link to="/cart" className={styles['link']}>
					<ShoppingCartIcon />
				Корзина</Link>
			</div>
			<Button className={styles['exit']}>
				<PowerSettingsNewRoundedIcon />
				Выход
			</Button>
		</div>
		<div>
			<Outlet />
		</div>
	</div>;
}