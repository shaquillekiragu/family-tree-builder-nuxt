import Person from '~/data/Person';
import type IPerson from '~/types/person';
import type { IGender } from '~/types/gender';

export default class CreatePerson extends Person {
	createId(id: number): void {
		this.id = id;
	}

	createUserId(user_id: number): void {
		this.user_id = user_id;
	}

	createFirstName(first_name: string): void {
		this.first_name = first_name;
	}

	createMiddleNames(middle_names: string): void {
		this.middle_names = middle_names;
	}

	createLastName(last_name: string): void {
		this.last_name = last_name;
	}

	createGender(gender: IGender): void {
		this.gender = gender;
	}

	createDateOfBirth(date_of_birth: string): void {
		this.date_of_birth = date_of_birth;
	}

	createCountryOfBirth(country_of_birth: string): void {
		this.country_of_birth = country_of_birth;
	}

	createIsPrimaryPerson(is_primary_person: boolean): void {
		this.is_primary_person = is_primary_person;
	}

	createBiography(biography: string): void {
		this.biography = biography;
	}

	createNotes(notes: string): void {
		this.notes = notes;
	}

	createMultipleProperties(creates: Partial<IPerson>): void {
		Object.assign(this, creates);
	}
}
