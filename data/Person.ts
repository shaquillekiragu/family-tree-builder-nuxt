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

class CreatePerson extends Person {
  createPersonId(newPersonId: number): void {
    this.personId = newPersonId;
  }

  createTreeId(newTreeId: number): void {
    this.treeId = newTreeId;
  }

  createFirstName(newFirstName: string): void {
    this.firstName = newFirstName;
  }

  createMiddleNames(newMiddleNames: string): void {
    this.middleNames = newMiddleNames;
  }

  createLastName(newLastName: string): void {
    this.lastName = newLastName;
  }

  createSex(newSex: Sex): void {
    this.sex = newSex;
  }

  createDateOfBirth(newDateOfBirth: string): void {
    this.dateOfBirth = newDateOfBirth;
  }

  createCountryOfBirth(newCountryOfBirth: string): void {
    this.countryOfBirth = newCountryOfBirth;
  }

  createIsPrimaryPerson(newIsPrimaryPerson: boolean): void {
    this.isPrimaryPerson = newIsPrimaryPerson;
  }

  createBiography(newBiography: string): void {
    this.biography = newBiography;
  }

  createNotes(newNotes: string): void {
    this.notes = newNotes;
  }

  createMultipleProperties(creates: Partial<IPerson>): void {
    Object.assign(this, creates);
  }
}

class UpdatePerson extends Person {
  updatePersonId(newPersonId: number): void {
    this.personId = newPersonId;
  }

  updateTreeId(newTreeId: number): void {
    this.treeId = newTreeId;
  }

  updateFirstName(newFirstName: string): void {
    this.firstName = newFirstName;
  }

  updateMiddleNames(newMiddleNames: string): void {
    this.middleNames = newMiddleNames;
  }

  updateLastName(newLastName: string): void {
    this.lastName = newLastName;
  }

  updateSex(newSex: Sex): void {
    this.sex = newSex;
  }

  updateDateOfBirth(newDateOfBirth: string): void {
    this.dateOfBirth = newDateOfBirth;
  }

  updateCountryOfBirth(newCountryOfBirth: string): void {
    this.countryOfBirth = newCountryOfBirth;
  }

  updateIsPrimaryPerson(newIsPrimaryPerson: boolean): void {
    this.isPrimaryPerson = newIsPrimaryPerson;
  }

  updateBiography(newBiography: string): void {
    this.biography = newBiography;
  }

  updateNotes(newNotes: string): void {
    this.notes = newNotes;
  }
}

const personOne = new CreatePerson(
  1,
  1,
  "Richard",
  "Samuel",
  "Doe",
  sexEnum[0],
  "1922",
  "New York",
  "United States of America",
  true,
  "",
  "",
  0
);

const personTwo = new CreatePerson(
  2,
  1,
  "Margaret",
  "Elizabeth",
  "Doe",
  sexEnum[1],
  "1925",
  "Boston",
  "United States of America",
  false,
  "",
  "",
  0
);

const personThree = new CreatePerson(
  3,
  1,
  "Robert",
  "James",
  "Doe",
  sexEnum[0],
  "1948",
  "Chicago",
  "United States of America",
  false,
  "",
  "",
  0
);

const personFour = new CreatePerson(
  4,
  1,
  "Sarah",
  "Anne",
  "Doe",
  sexEnum[1],
  "1950",
  "Detroit",
  "United States of America",
  false,
  "",
  "",
  0
);

const personFive = new CreatePerson(
  5,
  1,
  "Michael",
  "Thomas",
  "Doe",
  sexEnum[0],
  "1975",
  "Los Angeles",
  "United States of America",
  false,
  "",
  "",
  0
);

const personSix = new CreatePerson(
  6,
  1,
  "Jennifer",
  "Marie",
  "Doe",
  sexEnum[1],
  "1978",
  "San Francisco",
  "United States of America",
  false,
  "",
  "",
  0
);

const personSeven = new CreatePerson(
  7,
  1,
  "David",
  "Christopher",
  "Doe",
  sexEnum[0],
  "2000",
  "Seattle",
  "United States of America",
  false,
  "",
  "",
  0
);

const personEight = new CreatePerson(
  8,
  1,
  "Emily",
  "Grace",
  "Doe",
  sexEnum[1],
  "2003",
  "Portland",
  "United States of America",
  false,
  "",
  "",
  0
);

const personNine = new CreatePerson(
  9,
  1,
  "Alexander",
  "William",
  "Doe",
  sexEnum[0],
  "2005",
  "Austin",
  "United States of America",
  false,
  "",
  "",
  0
);

const personTen = new CreatePerson(
  10,
  1,
  "Sophia",
  "Rose",
  "Doe",
  sexEnum[1],
  "2008",
  "Nashville",
  "United States of America",
  false,
  "",
  "",
  0
);

export {
  Person,
  CreatePerson,
  UpdatePerson,
  sexEnum,
  personOne,
  personTwo,
  personThree,
  personFour,
  personFive,
  personSix,
  personSeven,
  personEight,
  personNine,
  personTen,
};

export type { IPerson, Sex };
