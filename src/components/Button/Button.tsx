import cn from 'classnames';
import { ButtonProps } from './Button.props';

function Button({ children, className, ...props }: ButtonProps) {

	return (
		<button {...props } className={ cn('button accent', className) }>{ children }</button>
	);
}

export default Button;