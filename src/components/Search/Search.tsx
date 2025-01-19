import styles from './Search.module.css';
import cn from 'classnames';
import { forwardRef } from 'react';
import { SearchProps } from './Search.props';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Search({ isValid = true, className, ...props }, ref) {
	return (
		<div className={styles['input-wrapper']}>
		
			<input {...props} ref={ref} className={ cn(styles['input'], className, {
				[styles['invalid']]: isValid
			})} { ...props } />

			<SearchRoundedIcon className={styles['icon']} />
		
		</div>
	);
});

export default Search;