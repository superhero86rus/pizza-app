import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import styles from './Login.module.css';
import { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { login, userActions } from '../../store/user.slice';

export type LoginForm = {
	email: {
		value: string;
	},
	password: {
		value: string;
	}
}

export function Login(){

	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const { jwt, loginErrorMessage} = useSelector((s: RootState) => s.user);
	
	useEffect(() => {
		if(jwt){
			navigate('/');
		}

	}, [jwt, navigate]);
	
	const submit = async (e: FormEvent) => {
		e.preventDefault();
		dispatch(userActions.clearLoginError());
		const target = e.target as typeof e.target & LoginForm;
		const { email, password } = target;
		await sendLogin(email.value, password.value);
	};

	const sendLogin = async (email: string, password: string) => {
		dispatch(login({ email, password}));
	};

	return <div className={styles['login']}>
		<Headling>Вход</Headling>
		{loginErrorMessage && <div className={styles['error']}>{loginErrorMessage}</div>}
		<form className={styles['form']} onSubmit={submit}>
			<div className={styles['field']}>
				<label htmlFor=''>Ваш email</label>
				<Input id='email' placeholder='Email' name='email' />
			</div>
			<div className={styles['field']}>
				<label htmlFor=''>Ваш пароль</label>
				<Input id='password' type='password' placeholder='Пароль' name='password' />
			</div>
			<Button appearance='big'>Вход</Button>
		</form>
		<div className={styles['links']}>
			<div>Нет аккаунта?</div>
		    <Link to='/auth/register'>Нет аккаунта? Зарегистрироваться</Link>
		</div>
	</div>;
}