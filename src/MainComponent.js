import React from 'react';

import Licences from './Licences';

import licences_json from './licences.json';
const licences = licences_json.licences;

export default function MainComponent () {
	let licences_option_items = licences.map((licence) =>
		<option value={licence.name}>{licence.title}</option>
	);

	return (
		<main className="bg-slate-200 py-12">
			<div className="max-w-lg m-auto bg-white min-h-screen p-8">
				<h3 className="p-3 text-center text-xl">Choose your Licence</h3>
				<form>
					<select name="licence_name">
						{licences_option_items}
					</select>
				</form>
			</div>
		</main>
	);
}
