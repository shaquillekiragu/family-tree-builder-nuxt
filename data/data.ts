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
    notes: string
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

  updateMultipleProperties(updates: Partial<IPerson>): void {
    Object.assign(this, updates);
  }
}

const personOne = new UpdatePerson(
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
  ""
);

const personTwo = new UpdatePerson(
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
  ""
);

const personThree = new UpdatePerson(
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
  ""
);

const personFour = new UpdatePerson(
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
  ""
);

const personFive = new UpdatePerson(
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
  ""
);

const personSix = new UpdatePerson(
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
  ""
);

const personSeven = new UpdatePerson(
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
  ""
);

const personEight = new UpdatePerson(
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
  ""
);

export {
  Person,
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
};

export type { IPerson, Sex };
