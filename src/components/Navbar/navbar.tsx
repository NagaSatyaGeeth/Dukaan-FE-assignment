import navbarMenuData from "../../Data/navbardata.ts";

export default function Navbar() {
	return (
		<>
			<div className="navbar w-56 bg-secondaryNavbar text-black100 h-screen top-0 sticky overflow-auto  flex flex-col justify-between xl:w-60">
				<div className="top-nav p-4">
					<div>
						<div className="company-info  flex  items-center mb-8 ml-2">
							<img
								className="company-image w-10 h-10 mr-3 rounded-lg"
								src="/src/assets/companypic.png"
							></img>
							<div className="company-details mr-12">
								<div className="company-name text-custom-medium font-medium">
									Nishyan
								</div>
								<div className="company-link text-custom-small font-regular underline underline-offset-2">
									Visit store
								</div>
							</div>
							<div>
								<img className="icon" src="src/assets/icons/Vector.svg"></img>
							</div>
						</div>
						<div className="pages-container flex flex-col">
							{navbarMenuData.map((item, index) => (
								<div
									key={index}
									className={`page-info h-9 m-1 flex items-center ${
										item.isActive ? "bg-pagebgColor rounded" : ""
									}`}
								>
									<div>
										<img
											className="page-icon ml-4 mr-4"
											src={item.icon}
											alt={`${item.name} icon`}
										/>
									</div>
									<div className="page-name text-custom-base font-medium">
										{item.name}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="flex mx-4 mb-4 py-2 justify-center items-center bg-navbarBlack rounded">
					<div className="mr-3 bg-pagebgColor p-2 ml-1 rounded">
						<img src="src/assets/navbarIcons/Navbar-wallet.svg"></img>
					</div>
					<div>
						<div>Available Credits</div>
						<div>222.10</div>
					</div>
				</div>
			</div>
		</>
	);
}
