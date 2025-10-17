import type { IBiologicalSex } from '~/types/biological-sex';

export default interface IPerson {
	personId: number;
	treeId: number;
	firstName: string;
	middleNames: string;
	lastName: string;
	biologicalSex: IBiologicalSex;
	dateOfBirth: string;
	placeOfBirth: string;
	countryOfBirth: string;
	isPrimaryPerson: boolean;
	generationIndex: number;
	orderIndex: number;
	biography: string;
	notes: string;
	getFullName(): string;
	getYearOfBirth(): number | null;
	getAge(): number | null;
	getBirthplace(): string;
}
