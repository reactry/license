import React from 'react';

import Licenses from './Licenses';

import licenses_json from './licenses.json';
const licenses = licenses_json.licenses;

export default function MainComponent () {
	let licenses_option_items = licenses.map((license) =>
		<option value={license.name}>{license.title}</option>
	);

	return (
		<main className="bg-slate-200 py-12">
			<div className="max-w-lg m-auto bg-white min-h-screen p-8">
				<h3 className="p-3 text-center text-xl">Choose your License</h3>
				<form>
					<select name="license_name">
						{licenses_option_items}
					</select>
				</form>
			</div>
		</main>
	);
}
