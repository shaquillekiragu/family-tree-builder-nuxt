import { Person } from "~/data/Person";
import type { IPerson, BiologicalSex } from "~/data/Person";

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

  updateBiologicalSex(newBiologicalSex: BiologicalSex): void {
    this.biologicalSex = newBiologicalSex;
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

  createMultipleProperties(updates: Partial<IPerson>): void {
    Object.assign(this, updates);
  }
}

export { UpdatePerson };
