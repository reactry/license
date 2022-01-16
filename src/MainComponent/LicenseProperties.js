

export default function LicenseProperties ({currentLicense}) {
	let properties = [
		{"name": "commercial_use", "title": "Commercial use"},
		{"name": "private_use", "title": "Private use"},
		{"name": "modification", "title": "Modification"},
		{"name": "distribution", "title": "Distribution"},
		{"name": "liability", "title": "Liability"},
		{"name": "warranty", "title": "Warranty"}
	];

	let yesItems = properties.map((property, index) => {
		if (currentLicense.properties && currentLicense.properties[property.name] === true) {
			return <h4 className="text-green-600 text-sm" key={index}>
				<span className="bg-green-400 text-white py-1 px-2 mr-2 text-xs">YES</span>
				<span>{property.title}</span>
			</h4>;
		}
	});

	let noItems = properties.map((property, index) => {
		if (!currentLicense.properties || currentLicense.properties[property.name] !== true) {
			return <h4 className="text-red-600 text-sm" key={index}>
				<span className="bg-red-400 text-white py-1 px-2 mr-2 text-xs">NO</span>
				<span>{property.title}</span>
			</h4>;
		}
	});

	return (
		<div className="flex space-x-4">
			<div className="space-y-4">
				<h3>Yes</h3>
				{yesItems}
			</div>
			<div className="space-y-4">
				<h3>No</h3>
				{noItems}
			</div>
		</div>
	);
}

