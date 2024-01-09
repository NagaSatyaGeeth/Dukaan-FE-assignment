import tableData from "../../Data/tableData.ts";
import searchIcon from "/src/assets/icons/Fill 1.svg";
import sortIcon from "/src/assets/icons/sort.svg";
import shapeDownload from "/src/assets/icons/Combined Shapedownload.svg";
import tabledownIcon from "/src/assets/icons/tabledown.svg";
import infoIcon from "/src/assets/icons/info.svg";

export default function table() {
	return (
		<>
			<div className="Table flex flex-col bg-black100 px-2 mb-10">
				<div className="flex justify-between mt-2 mb-3">
					<div className="search-bar flex items-center pt-1 w-60 rounded border-black85 border">
						<div className="mx-2">
							<img src={searchIcon}></img>
						</div>
						<div className="text-black60 text-custom-base font-regular">
							Search by order ID...
						</div>
					</div>
					<div className="flex sort-bar">
						<div className="sort flex items-center p-1 rounded border-black85 border mr-2">
							<div className="text-black30 ml-2 text-custom-regular font-regular">
								Sort
							</div>
							<div className="mx-2">
								<img src={sortIcon}></img>
							</div>
						</div>
						<div className="download flex items-center p-1 rounded border-black85 border">
							<div className="mx-2">
								<img src={shapeDownload}></img>
							</div>
						</div>
					</div>
				</div>
				<table>
					<thead>
						<tr className="bg-black95 ">
							<th className="text-black30  text-left pl-2 py-2 rounded-tl text-custom-base font-medium">
								Order ID
							</th>
							<th className="text-black30 py-2 flex justify-center align-center pl-2">
								<div className="flex align-center justify-center">
									<div className="mr-1 text-custom-base font-medium">
										Order Date
									</div>
									<img src={tabledownIcon}></img>
								</div>
							</th>
							<th className="text-black30 text-custom-base font-medium  text-right pl-2">
								Order Amount
							</th>
							<th className="text-black30 rounded-tr  py-2 flex justify-end align-center px-2">
								<div className="flex align-center justify-center items-center">
									<div className="mr-1 text-custom-base font-medium">
										Transaction fees
									</div>
									<div className="group relative">
										<img src={infoIcon} alt="Info" className="inline-block" />
										<div className="absolute bottom-0 right-0 mb-8 w-64 p-2  text-left bg-black30 text-black100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:flex text-custom-small font-regular">
											Transaction fees are charged as a percentage of the order
											amount according to your plan.
										</div>
									</div>
								</div>
							</th>
						</tr>
					</thead>
					<tbody>
						{tableData.map((item, index) => (
							<tr key={index} className="border-black90 border-b">
								<td className="text-primaryBlue text-left px-2 py-2 text-custom-base font-regular">
									{item.orderId}
								</td>
								<td className="text-center px-2 py-2 text-custom-base font-regular">
									{item.orderDate}
								</td>
								<td className="text-right px-2 py-2 text-custom-base font-regular">
									{item.orderAmount}
								</td>
								<td className="text-right px-2 py-2 text-custom-base font-regular">
									{item.transactionFees}
								</td>
							</tr>
						))}
					</tbody>
				</table>
				{/* //pagination */}
				<div className="my-4 flex justify-center items-center">
					<div className="sort flex items-center p-1 rounded border-black85 border">
						<div className="mx-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="w-5 h-5"
							>
								<path
									fillRule="evenodd"
									d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<div className="prev-btn text-black30">Previous</div>
					</div>
					<div className="numbers mx-6 flex gap-2">
						<div>1</div>
						<div>...</div>
						<div className="bg-primaryBlue text-black100 px-1 rounded">10</div>
						<div>11</div>
						<div>12</div>
						<div>13</div>
						<div>14</div>
					</div>
					<div className="next-btn sort flex items-center p-1 rounded border-black85 border mr-2">
						<div className="text-black30 ml-2">Next</div>
						<div className="mx-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="w-5 h-5"
							>
								<path
									fillRule="evenodd"
									d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
