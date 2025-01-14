import { useState } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {

	const [counter, setCounter] = useState<number>(0);

	const AddCounter = () => {
		setCounter(1);
	};
  
	return (
		<>
			<div>{ counter }</div>
			<Button onClick={ AddCounter }>Кнопка</Button>
			<Button appearance='big' onClick={ AddCounter }>Кнопка</Button>
			<Input placeholder='Email' />
		</>
	);
}

export default App;