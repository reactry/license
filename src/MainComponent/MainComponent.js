import React from 'react';

import Licenses from '../Licenses';

import FormSelect from './FormSelect';
import LicenseDetails from './LicenseDetails';
import FormDetails from './FormDetails';
import License from './License';

import licenses_json from '../licenses.json';
const licenses = licenses_json.licenses;

export default function MainComponent () {
	let [currentIndex, setCurrectIndex] = React.useState(0);
	let currentLicense = licenses[currentIndex];


	return (
		<main className="bg-slate-200 py-12 space-y-12">
			<div className="max-w-lg m-auto bg-white min-h-screen p-8">
				<h3 className="p-3 text-center text-xl">Choose your License</h3>
				<FormSelect licenses={licenses} setCurrectIndex={setCurrectIndex} />
				<LicenseDetails currentLicense={currentLicense} />
				<FormDetails currentLicense={currentLicense} />
			</div>
			<div className="max-w-lg m-auto bg-white min-h-screen p-8">
				<License currentLicense={currentLicense} />
			</div>
		</main>
	);
}
