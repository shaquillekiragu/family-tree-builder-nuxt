const biologicalSexEnum = ["male", "female"] as const;
type BiologicalSex = (typeof biologicalSexEnum)[number];

interface IPerson {
  personId: number;
  treeId: number;
  firstName: string;
  middleNames: string;
  lastName: string;
  biologicalSex: BiologicalSex;
  dateOfBirth: string;
  placeOfBirth: string;
  countryOfBirth: string;
  isPrimaryPerson: boolean;
  generationIndex: number;
  orderIndex: number;
  biography: string;
  notes: string;
}

class Person implements IPerson {
  personId: number;
  treeId: number;
  firstName: string;
  middleNames: string;
  lastName: string;
  biologicalSex: BiologicalSex;
  dateOfBirth: string;
  placeOfBirth: string;
  countryOfBirth: string;
  isPrimaryPerson: boolean;
  generationIndex: number;
  orderIndex: number;
  biography: string;
  notes: string;

  constructor(
    personId: number,
    treeId: number,
    firstName: string,
    middleNames: string,
    lastName: string,
    biologicalSex: BiologicalSex,
    dateOfBirth: string,
    placeOfBirth: string,
    countryOfBirth: string,
    isPrimaryPerson: boolean,
    generationIndex: number,
    orderIndex: number,
    biography: string,
    notes: string
  ) {
    this.personId = personId;
    this.treeId = treeId;
    this.firstName = firstName;
    this.middleNames = middleNames;
    this.lastName = lastName;
    this.biologicalSex = biologicalSex;
    this.dateOfBirth = dateOfBirth;
    this.placeOfBirth = placeOfBirth;
    this.countryOfBirth = countryOfBirth;
    this.isPrimaryPerson = isPrimaryPerson;
    this.generationIndex = generationIndex;
    this.orderIndex = orderIndex;
    this.biography = biography;
    this.notes = notes;
  }
  ß;
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

export { Person, biologicalSexEnum };
export type { IPerson, BiologicalSex };
