import React from 'react';


export default function FormDetails ({
	currentLicense,
	personName, setPersonName,
	startYear, setStartYear,
	endYear, setEndYear
}) {
	function handlePersonNameChange (e) {setPersonName(e.target.value);}
	function handleStartYearChange (e) {setStartYear(e.target.value);}
	function handleEndYearChange (e) {setEndYear(e.target.value);}

	const inputClassName = "shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mt-2 mb-6 leading-tight focus:outline-none focus:shadow-outline";

	return (
		<form>
			{currentLicense.params.name === true && (
				<>
					<label htmlFor="personName">Person/Company name</label>
					<input type="text" value={personName} className={inputClassName}
						name="personName" id="personName" onChange={handlePersonNameChange}
					/>
				</>
			)}
			{currentLicense.params.start_year === true && (
				<>
					<label htmlFor="startYear">Start year</label>
					<input type="text" value={startYear} className={inputClassName}
						name="startYear" id="startYear" onChange={handleStartYearChange}
					/>
				</>
			)}
			{currentLicense.params.end_year === true && (
				<>
					<label htmlFor="endYear">End year</label>
					<input type="text" value={endYear} className={inputClassName}
						name="endYear" id="endYear" onChange={handleEndYearChange}
					/>
				</>
			)}
		</form>
	);
}
