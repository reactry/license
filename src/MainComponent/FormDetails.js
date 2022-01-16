
export default function FormDetails ({currentLicense}) {
	const inputClassName = "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline";

	return (
		<form>
			{currentLicense.params.name === true && <input type="text" name="name" className={inputClassName} />}
			{currentLicense.params.year === true && <input type="text" name="year" className={inputClassName} />}
		</form>
	);
}
