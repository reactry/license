import React from 'react';

import Licenses from '../Licenses';

import FormSelect from './FormSelect';
import LicenseDetails from './LicenseDetails';
import FormDetails from './FormDetails';
import LicenseProperties from './LicenseProperties';
import License from './License';

import licenses_json from '../licenses.json';
const licenses = licenses_json.licenses;

export default function MainComponent () {
	let [personName, setPersonName] = React.useState("John Smith");

	let currentYear = new Date().getFullYear();
	let [startYear, setStartYear] = React.useState(currentYear);
	let [endYear, setEndYear] = React.useState(currentYear);

	let [currentIndex, setCurrectIndex] = React.useState(0);
	let currentLicense = licenses[currentIndex];

	return (
		<main className="bg-slate-200 md:py-12 md:space-y-12">
			<div className="md:max-w-5xl m-auto bg-white min-h-screen p-8">
				<h3 className="p-3 text-center text-xl">Choose your License</h3>
				<FormSelect licenses={licenses} setCurrectIndex={setCurrectIndex} />
				<FormDetails currentLicense={currentLicense}
					personName={personName} setPersonName={setPersonName}
					startYear={startYear} setStartYear={setStartYear}
					endYear={endYear} setEndYear={setEndYear}
				/>
				<div className="md:flex">
					<div className="basis-0 grow px-4 py-4">
						<LicenseDetails currentLicense={currentLicense} />
					</div>
					<div className="basis-0 grow px-4 py-4">
						<LicenseProperties currentLicense={currentLicense} />
					</div>
				</div>
			</div>
			<div className="md:max-w-5xl m-auto bg-white min-h-screen p-8">
				<License currentLicense={currentLicense}
					personName={personName} startYear={startYear} endYear={endYear}
				/>
			</div>
		</main>
	);
}
