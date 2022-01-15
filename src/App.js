import './App.css';
import Licences from './Licences';

function App() {
	return (
		<div className="App">
			<header className="bg-blue-600 text-white p-4 text-center">
				<h2 className="text-2xl py-4">
					Reactry's Licences
				</h2>
			</header>

			<main className="bg-slate-200 py-12">
				<div className="max-w-lg m-auto bg-white min-h-screen p-8">
					<h3 className="p-3 text-center text-xl">Choose your Licence</h3>
				</div>
			</main>

			<footer className="bg-blue-800 text-white p-4 text-center">
				<h4 className="text-xl py-12 text-center">© Copyright 2022, Ankur Seth (<a href="https://github.com/iaseth" className="text-blue-300 p-0.5">GitHub</a>).</h4>
			</footer>
		</div>
	);
}

export default App;
