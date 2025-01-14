import { useState } from 'react';
import Button from './components/Button/Button';

function App() {

	const [counter, setCounter] = useState<number>(0);

	const AddCounter = () => {
		setCounter(1);
	};
  
	return (
		<>
			<div>{ counter }</div>
			<Button onClick={ AddCounter }>Кнопка</Button>
		</>
	);
}

export default App;