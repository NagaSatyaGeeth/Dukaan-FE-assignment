import chevronDown from "/src/assets/icons/Path 2 Copy.svg";

export default function dropdown() {
	return (
		<>
			<div className="flex items-center w-32 h-9 bg-black100 rounded border-black85 border">
				<div className="ml-3 mr-2 text-custom-regular font-regular">
					Last Month
				</div>
				<div>
					<img src={chevronDown}></img>
				</div>
			</div>
		</>
	);
}
