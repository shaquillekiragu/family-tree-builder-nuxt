import type IPerson from '~/types/person';
import type { IGender } from '~/types/gender';
import type { IBiologicalSex } from '~/types/biological-sex';

export default class Person implements IPerson {
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

	constructor(
		id: number,
		user_id: number,
		first_name: string,
		middle_names: string,
		last_name: string,
		gender: IGender,
		date_of_birth: string,
		place_of_birth: string,
		country_of_birth: string,
		is_primary_person: boolean,
		generation_index: number,
		order_index: number,
		biography: string,
		notes: string
	) {
		this.id = id;
		this.user_id = user_id;
		this.first_name = first_name;
		this.middle_names = middle_names;
		this.last_name = last_name;
		this.gender = gender;
		this.date_of_birth = date_of_birth;
		this.place_of_birth = place_of_birth;
		this.country_of_birth = country_of_birth;
		this.is_primary_person = is_primary_person;
		this.generation_index = generation_index;
		this.order_index = order_index;
		this.biography = biography;
		this.notes = notes;
	}

	getFullName(): string {
		return `${this.first_name} ${this.middle_names} ${this.last_name}`.trim();
	}

	getYearOfBirth(): number | null {
		const date_of_birth = this.date_of_birth;
		const regex_array = date_of_birth.match(/\d{4}$/);
		if (regex_array) {
			const year_of_birth = parseInt(regex_array[0]);
			return year_of_birth;
		}
		return null;
	}

	getAge(): number | null {
		const currentYear = new Date().getFullYear();
		const year_of_birth = this.getYearOfBirth();
		if (year_of_birth) {
			return currentYear - year_of_birth;
		}
		return null;
	}

	getBirthplace(): string {
		return `${this.place_of_birth}, ${this.country_of_birth}`;
	}
}
