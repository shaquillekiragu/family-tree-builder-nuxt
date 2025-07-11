import { Person } from "~/data/Person";
import type { IPerson, BiologicalSex } from "~/data/Person";

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

  createBiologicalSex(newBiologicalSex: BiologicalSex): void {
    this.biologicalSex = newBiologicalSex;
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

export { CreatePerson };
