export default function Card() {
	return (
		<>
			<div className="card shadow-card flex-1  h-28 bg-black100 rounded-lg">
				<div className="card-info m-5 flex flex-col h-max">
					<div className="card-name text-black30  text-custom-regular font-regular  mb-4">
						Online orders
					</div>
					<div className="card-details text-black12 text-custom-xl font-medium">
						231
					</div>
				</div>
			</div>
			<div className="card shadow-card flex-1  h-28 bg-black100 rounded-lg">
				<div className="card-info m-5 flex flex-col h-max">
					<div className="card-name text-black30 text-custom-regular font-regular mb-4">
						Amount recieved
					</div>
					<div className="card-details text-black12 text-custom-xl font-medium">
						₹23,92,312.19
					</div>
				</div>
			</div>
		</>
	);
}
