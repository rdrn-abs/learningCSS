import { React } from 'react';
import './App.scss';
import Pendulum from './components/Pendulum';
import WindowsLogo from './components/WindowsLogo';
import TransitionExample from './components/TransitionExample';

const App = () =>
	<div className="App">
		<h4>Learning CSS</h4>
		<Pendulum/>
		<WindowsLogo/>
		<TransitionExample/>
	</div>;

export default App;
