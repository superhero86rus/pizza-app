import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListIcon from '@mui/icons-material/List';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';
import Button from '../../components/Button/Button';
import cn from 'classnames';

export function Layout(){

	return <div className={styles['layout']}>
		<div className={styles['sidebar']}>
			<div className={styles['user']}>
				<AccountCircleIcon className={styles['avatar']} />
				<div className={styles['name']}>Котов Александр</div>
				<div className={styles['email']}>kotov.alexandr@gmail.com</div>
			</div>

			<div className={styles['menu']}>
				
				<NavLink to="/" className={({ isActive }) => cn(styles['link'], {
					[styles.active]: isActive
				})}>
					<ListIcon/>
				Меню</NavLink>

				<NavLink to="/cart" className={({ isActive }) => cn(styles['link'], {
					[styles.active]: isActive
				})}>
					<ShoppingCartIcon />
				Корзина</NavLink>

			</div>
			<Button className={styles['exit']}>
				<PowerSettingsNewRoundedIcon />
				Выход
			</Button>
		</div>
		<div className={styles['content']}>
			<Outlet />
		</div>
	</div>;
}