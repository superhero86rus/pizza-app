import styles from './CartItem.module.css';
import { CartItemProps } from './CartItem.props';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';

function CartItem(props: CartItemProps) {

	const dispatch = useDispatch<AppDispatch>();

	const increase = () => {
		dispatch(cartActions.add(props.id));
	};

	const decrease = () => {
		dispatch(cartActions.remove(props.id));
	};

	const remove = () => {
		dispatch(cartActions.delete(props.id));
	};

	
	return (

		<div className={styles['item']}>
			<div className={styles['image']} style={{backgroundImage: `url('${props.image}')`}}></div>
			<div className={styles['description']}>
				<div className={styles['name']}>{props.name}</div>
				<div className={styles['price']}>{props.price}&nbsp;₽</div>
			</div>

			<div className={styles['actions']}>
				<button className={styles['minus']} onClick={decrease}>
				    <RemoveIcon sx={{color: '#FE724C'}} />
			    </button>
				<div className={styles['number']}>{props.count}</div>
				<button className={styles['plus']} onClick={increase}>
					<AddIcon style={{color: 'white'}}/>
				</button>
				<button className={styles['remove']} onClick={remove}>
					<ClearIcon sx={{color: '#FE724C'}}/>
				</button>
			</div>
		</div>

	);
}

export default CartItem;