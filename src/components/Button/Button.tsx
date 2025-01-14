import cn from 'classnames';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';

function Button({ children, className, ...props }: ButtonProps) {

	return (
		<button {...props } className={ cn(styles['button'], styles['accent'], className) }>{ children }</button>
	);
}

export default Button;