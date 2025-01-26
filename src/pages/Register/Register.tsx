import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import styles from './../Login/Login.module.css';
import { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { register, userActions } from '../../store/user.slice';

export type RegisterForm = {
	email: {
		value: string;
	},
	password: {
		value: string;
	},
	name: {
		value: string;
	},
}

export function Register(){

	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const { jwt, registerErrorMessage} = useSelector((s: RootState) => s.user);
	
	useEffect(() => {
		if(jwt){
			navigate('/');
		}

	}, [jwt, navigate]);
	
	const submit = async (e: FormEvent) => {
		e.preventDefault();
		dispatch(userActions.clearRegisterError());
		const target = e.target as typeof e.target & RegisterForm;
		const { email, password, name } = target;
		dispatch(register({email: email.value, password: password.value, name: name.value}));
	};

	return <div className={styles['login']}>
		<Headling>Регистрация</Headling>
		{registerErrorMessage && <div className={styles['error']}>{registerErrorMessage}</div>}
		<form className={styles['form']} onSubmit={submit}>
			<div className={styles['field']}>
				<label htmlFor=''>Ваш email</label>
				<Input id='email' placeholder='Email' name='email' />
			</div>
			<div className={styles['field']}>
				<label htmlFor=''>Ваш пароль</label>
				<Input id='password' type='password' placeholder='Пароль' name='password' />
			</div>
			<div className={styles['field']}>
				<label htmlFor=''>Ваше имя</label>
				<Input id='name' placeholder='Имя' name='name' />
			</div>
			<Button appearance='big'>Зарегистрироваться</Button>
		</form>
		<div className={styles['links']}>
			<div>Есть аккаунт?</div>
		    <Link to='/auth/login'>Войти</Link>
		</div>
	</div>;
}