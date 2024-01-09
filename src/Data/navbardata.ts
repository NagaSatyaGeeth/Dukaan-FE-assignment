// Import the SVG icons as modules
import homeIcon from "/src/assets/navbarIcons/Navbar-home.svg";
import ordersIcon from "/src/assets/navbarIcons/Navbar-orders.svg";
import productsIcon from "/src/assets/navbarIcons/Navbar-products.svg";
import deliveryIcon from "/src/assets/navbarIcons/Navbar-delivery.svg";
import marketingIcon from "/src/assets/navbarIcons/Navbar-marketing.svg";
import analyticsIcon from "/src/assets/navbarIcons/Navbar-analytics.svg";
import paymentsIcon from "/src/assets/navbarIcons/Navbar-payments.svg";
import toolsIcon from "/src/assets/navbarIcons/Navbar-tools.svg";
import discountsIcon from "/src/assets/navbarIcons/Navbar-discounts.svg";
import audienceIcon from "/src/assets/navbarIcons/Navbar-audience.svg";
import appearanceIcon from "/src/assets/navbarIcons/Navbar-appearance.svg";
import pluginsIcon from "/src/assets/navbarIcons/Navbar-plugins.svg";

// Export the navigation data array
export default [
	{
		name: "Home",
		icon: homeIcon,
		isActive: false,
	},
	{
		name: "Orders",
		icon: ordersIcon,
		isActive: false,
	},
	{
		name: "Products",
		icon: productsIcon,
		isActive: false,
	},
	{
		name: "Delivery",
		icon: deliveryIcon,
		isActive: false,
	},
	{
		name: "Marketing",
		icon: marketingIcon,
		isActive: false,
	},
	{
		name: "Analytics",
		icon: analyticsIcon,
		isActive: false,
	},
	{
		name: "Payments",
		icon: paymentsIcon,
		isActive: true,
	},
	{
		name: "Tools",
		icon: toolsIcon,
		isActive: false,
	},
	{
		name: "Discounts",
		icon: discountsIcon,
		isActive: false,
	},
	{
		name: "Audience",
		icon: audienceIcon,
		isActive: false,
	},
	{
		name: "Appearance",
		icon: appearanceIcon,
		isActive: false,
	},
	{
		name: "Plugins",
		icon: pluginsIcon,
		isActive: false,
	},
];
