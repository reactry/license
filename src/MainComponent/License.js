
export default function License ({
	currentLicense, personName, startYear, endYear
}) {
	return (
		<div className="py-8">
			<h3 className="text-xl leading-10">
				{currentLicense.title} was issued to {personName} for {startYear}-{endYear}
			</h3>
			<p className="py-4 leading-7">{currentLicense.description}</p>
		</div>
	);
}
