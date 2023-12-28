interface FoodItem {
	name: string;
	category: string;
	price: string;
	description: string;
	image: string;
}

interface TabItem {
	label: string;
	value: string;
}

interface FormReservationDefaultValues {
	email: string;
	phone: string;
	selectedDate: string;
	numberOfGuests: number;
	comment: string;
}
