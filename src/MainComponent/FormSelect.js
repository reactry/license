
export default function FormSelect ({licenses, setCurrectIndex}) {
	let licenses_option_items = licenses.map((license, index) => {
		if (license.show) {
			return <option key={index} value={index}>{license.title}</option>;
		}
	});

	function handleSelectChange (e) {
		setCurrectIndex(e.target.value);
	}

	return (
		<form className="py-8">
			<label className="block py-3" for="license_name">Choose your License</label>
			<select name="license_name" id="license_name" onChange={handleSelectChange}
				className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
				{licenses_option_items}
			</select>
		</form>
	);
}
