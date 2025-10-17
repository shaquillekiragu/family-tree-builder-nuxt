import Person from '~/data/Person';
import type IPerson from '~/types/person';
import type IGender from '~/types/gender';

export default class UpdatePerson extends Person {
	updateId(id: number): void {
		this.id = id;
	}

	updateUserId(user_id: number): void {
		this.user_id = user_id;
	}

	updateFirstName(first_name: string): void {
		this.first_name = first_name;
	}

	updateMiddleNames(middle_names: string): void {
		this.middle_names = middle_names;
	}

	updateLastName(last_name: string): void {
		this.last_name = last_name;
	}

	updateGender(gender: IGender): void {
		this.gender = gender;
	}

	updateDateOfBirth(date_of_birth: string): void {
		this.date_of_birth = date_of_birth;
	}

	updateCountryOfBirth(country_of_birth: string): void {
		this.country_of_birth = country_of_birth;
	}

	updateIsPrimaryPerson(is_primary_person: boolean): void {
		this.is_primary_person = is_primary_person;
	}

	updateBiography(biography: string): void {
		this.biography = biography;
	}

	updateNotes(notes: string): void {
		this.notes = notes;
	}

	createMultipleProperties(updates: Partial<IPerson>): void {
		Object.assign(this, updates);
	}
}
