import { React } from 'react';
import './App.scss';
import Pendulum from './components/Pendulum';
import WindowsLogo from './components/WindowsLogo';
import TransitionExample from './components/TransitionExample';
import FishEyeEffect from './components/FishEyeEffect';
import RotatingNumber from './components/RotatingNumber';
import BookCover from './components/BookCover';

const App = () =>
	<div className="App">
		<h4>Learning CSS</h4>
		<Pendulum/>
		<WindowsLogo/>
		<TransitionExample/>
		<FishEyeEffect/>
		<RotatingNumber/>
		<BookCover/>
	</div>;

export default App;
