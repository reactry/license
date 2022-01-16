import './App.css';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import FooterComponent from './FooterComponent';
import PreFooterComponent from './PreFooterComponent';

function App() {
	return (
		<div className="App">
			<HeaderComponent />
			<MainComponent />
			<PreFooterComponent />
			<FooterComponent />
		</div>
	);
}

export default App;
