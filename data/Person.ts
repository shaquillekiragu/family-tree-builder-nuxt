const sexEnum = ["male", "female"] as const;
type Sex = (typeof sexEnum)[number];

interface IPerson {
  personId: number;
  treeId: number;
  firstName: string;
  middleNames: string;
  lastName: string;
  sex: Sex;
  dateOfBirth: string;
  placeOfBirth: string;
  countryOfBirth: string;
  isPrimaryPerson: boolean;
  biography: string;
  notes: string;
  generation: number;
}

class Person implements IPerson {
  personId: number;
  treeId: number;
  firstName: string;
  middleNames: string;
  lastName: string;
  sex: Sex;
  dateOfBirth: string;
  placeOfBirth: string;
  countryOfBirth: string;
  isPrimaryPerson: boolean;
  biography: string;
  notes: string;
  generation: number;

  constructor(
    personId: number,
    treeId: number,
    firstName: string,
    middleNames: string,
    lastName: string,
    sex: Sex,
    dateOfBirth: string,
    placeOfBirth: string,
    countryOfBirth: string,
    isPrimaryPerson: boolean,
    biography: string,
    notes: string,
    generation: number
  ) {
    this.personId = personId;
    this.treeId = treeId;
    this.firstName = firstName;
    this.middleNames = middleNames;
    this.lastName = lastName;
    this.sex = sex;
    this.dateOfBirth = dateOfBirth;
    this.placeOfBirth = placeOfBirth;
    this.countryOfBirth = countryOfBirth;
    this.isPrimaryPerson = isPrimaryPerson;
    this.biography = biography;
    this.notes = notes;
    this.generation = generation;
  }

  getFullName(): string {
    return `${this.firstName} ${this.middleNames} ${this.lastName}`.trim();
  }

  getYearOfBirth(): number | null {
    const dateOfBirth = this.dateOfBirth;
    const regexArray = dateOfBirth.match(/\d{4}$/);
    if (regexArray) {
      const yearOfBirth = parseInt(regexArray[0]);
      return yearOfBirth;
    }
    return null;
  }

  getAge(): number | null {
    const currentYear = new Date().getFullYear();
    const yearOfBirth = this.getYearOfBirth();
    if (yearOfBirth) {
      return currentYear - yearOfBirth;
    }
    return null;
  }

  getBirthplace(): string {
    return `${this.placeOfBirth}, ${this.countryOfBirth}`;
  }
}

export { Person, sexEnum };
export type { IPerson, Sex };
