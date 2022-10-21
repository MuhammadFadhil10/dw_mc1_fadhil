import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import Profile from './pages/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}></Route>
				<Route path='/profile/:id' element={<Profile />}></Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
