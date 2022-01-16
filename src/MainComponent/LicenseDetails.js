
export default function LicenseDetails ({currentLicense}) {
	return (
		<div>
			<h3 className="text-2xl">{currentLicense.title}</h3>
			<p className="py-4 leading-7">{currentLicense.description}</p>
		</div>
	);
}
