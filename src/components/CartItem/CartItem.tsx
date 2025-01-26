import styles from './CartItem.module.css';
import { CartItemProps } from './CartItem.props';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

function CartItem(props: CartItemProps) {

	const dispatch = useDispatch<AppDispatch>();

	const increase = (/*e: MouseEvent*/) => {
		dispatch(cartActions.add(props.id));
	};

	const decrease = (/*e: MouseEvent*/) => {
		// dispatch(cartActions.remove(props.id));
	};

	const remove = (/*e: MouseEvent*/) => {
		// dispatch(cartActions.remove(props.id));
	};

	
	return (

		<div className={styles['item']}>
			<div className={styles['image']} style={{backgroundImage: `url('${props.image}')`}}></div>
			<div className={styles['description']}>
				<div className={styles['name']}>{props.name}</div>
				<div className={styles['currency']}>{props.price}&nbsp;₽</div>
			</div>

			<div className={styles['actions']}>
				<button className={styles['button']} onClick={decrease}>
				    <LocalMallRoundedIcon style={{color: 'white'}}/>
			    </button>
				<div>{props.count}</div>
				<button className={styles['button']} onClick={increase}>
					<LocalMallRoundedIcon style={{color: 'white'}}/>
				</button>
				<button className={styles['button']} onClick={remove}>
					<LocalMallRoundedIcon style={{color: 'white'}}/>
				</button>
			</div>
		</div>

	);
}

export default CartItem;