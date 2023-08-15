import { React } from 'react';
import './App.scss';
import Pendulum from './components/Pendulum';
import WindowsLogo from './components/WindowsLogo';
import TransitionExample from './components/TransitionExample';
import FishEyeEffect from './components/FishEyeEffect';
import RotatingNumber from './components/RotatingNumber';
import BookCover from './components/BookCover';
import SparklingText from './components/SparklingText';
import Sparkles from './components/Sparles';
import Test from './components/Test';

const App = () =>
	<div className="App">
		<h4>Learning CSS</h4>
		<Test/>
		<SparklingText text="dummy"/>
		<Sparkles/>
		<Pendulum/>
		<WindowsLogo/>
		<TransitionExample/>
		<FishEyeEffect/>
		<RotatingNumber/>
		<BookCover/>
	</div>;

export default App;
