import Navbar from "./components/Navbar/navbar.tsx";
import DashboardHeader from "./components/Dashboard/dashboardHeader.tsx";
import Card from "./components/Card/card.tsx";
import Table from "./components/table/table.tsx";
import Dropdown from "./components/Dropdown/dropdown.tsx";

function App() {
	return (
		<>
			<div className="flex">
				<Navbar />
				<div className="Dashboard flex-grow bg-black98">
					<DashboardHeader />
					<main className="dashbaord mt-8 ml-8 mr-8">
						<div className="dashboard-overview">
							<div className="flex flex-row items-center justify-between">
								<div className="text-black12 text-custom-large font-medium">
									Overview
								</div>
								<Dropdown />
							</div>
							<div className="cards-container flex justify-between mt-6 gap-5">
								<Card />
							</div>
						</div>
						<div className="flex flex-col  mt-8">
							<div className="table-name mb-5 text-custom-large font-medium">
								Transactions | This Month
							</div>
							<Table />
						</div>
					</main>
				</div>
			</div>
		</>
	);
}

export default App;
