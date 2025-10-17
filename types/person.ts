import IGender from '~/types/gender';

export default interface IPerson {
	id: number;
	user_id: number;
	first_name: string;
	middle_names: string;
	last_name: string;
	gender: IGender;
	date_of_birth: string;
	place_of_birth: string;
	country_of_birth: string;
	is_primary_person: boolean;
	generation_index: number;
	order_index: number;
	biography: string;
	notes: string;
	getFullName(): string;
	getYearOfBirth(): number | null;
	getAge(): number | null;
	getBirthplace(): string;
}
