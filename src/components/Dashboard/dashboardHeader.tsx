export default function DashboardHeader() {
	return (
		<>
			<div className="dashboard-header flex h-16  items-center border-black85 bg-black100 border-b-2 justify-between">
				<div className="flex items-center ml-9">
					<div className="text-black12 text-custom-medium font-regular mr-4">
						Payments
					</div>
					<div>
						<img src="src/assets/icons/dashboardhelp.svg"></img>
					</div>
					<div className="text-black30 ml-1 text-custom-small font-regular">
						How it works
					</div>
				</div>

				<div className="w-96 h-10 bg-black95 rounded-md flex items-center">
					<div>
						<img className="ml-4 mr-2" src="src/assets/icons/Fill 1.svg"></img>
					</div>
					<div className="text-black50 text-custom-medium text-regular">
						Search features, tutorials, etc.
					</div>
				</div>
				<div className="flex">
					<div>
						<div className="w-10 h-10 bg-black90 rounded-full flex items-center justify-center mr-3">
							<img src="src/assets/icons/chat.svg"></img>
						</div>
					</div>
					<div>
						<div className="w-10 h-10 bg-black90 rounded-full flex items-center justify-center mr-8">
							<img src="src/assets/icons/Polygon 2.svg"></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
