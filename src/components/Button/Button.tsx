import cn from 'classnames';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';

function Button({ children, className, appearance = 'small', ...props }: ButtonProps) {

	return (
		<button {...props } className={ cn(styles['button'], styles['accent'], className, {
			[styles['small']]: appearance === 'small',
			[styles['big']]: appearance === 'big'
		})}>{ children }</button>
	);
}

export default Button;