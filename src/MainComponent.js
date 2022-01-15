import React from 'react';

import Licenses from './Licenses';

import licenses_json from './licenses.json';
const licenses = licenses_json.licenses;

export default function MainComponent () {
	let licenses_option_items = licenses.map((license, index) =>
		<option key={index} value={index}>{license.title}</option>
	);

	let [currentIndex, setCurrectIndex] = React.useState(0);
	let currentLicense = licenses[currentIndex];

	function handleSelectChange (e) {
		setCurrectIndex(e.target.value);
	}

	const inputClassName = "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline";

	return (
		<main className="bg-slate-200 py-12">
			<div className="max-w-lg m-auto bg-white min-h-screen p-8">
				<h3 className="p-3 text-center text-xl">Choose your License</h3>
				<form className="py-8">
					<select name="license_name" onChange={handleSelectChange}
						className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
						{licenses_option_items}
					</select>
					<div className="px-4 py-8">
						<h3 className="text-xl">{currentLicense.title}</h3>
						<p className="py-4 leading-7">{currentLicense.description}</p>
					</div>
					{currentLicense.params.name === true && <input type="text" name="name" className={inputClassName} />}
					{currentLicense.params.year === true && <input type="text" name="year" className={inputClassName} />}
				</form>
			</div>
		</main>
	);
}
