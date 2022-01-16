
export default function License ({currentLicense}) {
	return (
		<div className="px-4 py-8">
			<h3 className="text-xl">{currentLicense.title}</h3>
			<p className="py-4 leading-7">{currentLicense.description}</p>
		</div>
	);
}
