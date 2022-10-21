import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import CardList from './components/CardList';

import Style from './App.module.css';

function App() {
	return (
		<div className='App'>
			<h1>My Friend List</h1>
			<div className={Style.container}>
				<CardList />
			</div>
		</div>
	);
}

export default App;
