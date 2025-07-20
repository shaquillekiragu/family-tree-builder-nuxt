import { CreatePerson } from "~/data/CreatePerson";
import { biologicalSexEnum } from "~/data/Person";
import type { IPerson } from "~/data/Person";

// const firstGenerationPersons: IPerson[] = [];
// const secondGenerationPersons: IPerson[] = [];
// const thirdGenerationPersons: IPerson[] = [];

const personOne = new CreatePerson(
  1,
  1,
  "Richard",
  "Samuel",
  "Doe",
  biologicalSexEnum[0],
  "1922",
  "New York",
  "United States of America",
  true,
  0,
  0,
  "",
  ""
);

// firstGenerationPersons.push(personOne);

const personTwo = new CreatePerson(
  2,
  1,
  "Margaret",
  "Elizabeth",
  "Doe",
  biologicalSexEnum[1],
  "1925",
  "Boston",
  "United States of America",
  false,
  0,
  0,
  "",
  ""
);

// firstGenerationPersons.push(personTwo);

const personThree = new CreatePerson(
  3,
  1,
  "Robert",
  "James",
  "Doe",
  biologicalSexEnum[0],
  "1948",
  "Chicago",
  "United States of America",
  false,
  1,
  0,
  "",
  ""
);

// secondGenerationPersons.push(personThree);

const personFour = new CreatePerson(
  4,
  1,
  "Sarah",
  "Anne",
  "Doe",
  biologicalSexEnum[1],
  "1950",
  "Detroit",
  "United States of America",
  false,
  1,
  0,
  "",
  ""
);

// secondGenerationPersons.push(personFour);

const personFive = new CreatePerson(
  5,
  1,
  "Michael",
  "Thomas",
  "Doe",
  biologicalSexEnum[0],
  "1975",
  "Los Angeles",
  "United States of America",
  false,
  1,
  1,
  "",
  ""
);

// secondGenerationPersons.push(personFive);

const personSix = new CreatePerson(
  6,
  1,
  "Jennifer",
  "Marie",
  "Doe",
  biologicalSexEnum[1],
  "1978",
  "San Francisco",
  "United States of America",
  false,
  1,
  0,
  "",
  ""
);

// secondGenerationPersons.push(personSix);

const personSeven = new CreatePerson(
  7,
  1,
  "David",
  "Christopher",
  "Doe",
  biologicalSexEnum[0],
  "2000",
  "Seattle",
  "United States of America",
  false,
  2,
  0,
  "",
  ""
);

// thirdGenerationPersons.push(personSeven);

const personEight = new CreatePerson(
  8,
  1,
  "Emily",
  "Grace",
  "Doe",
  biologicalSexEnum[1],
  "2003",
  "Portland",
  "United States of America",
  false,
  2,
  1,
  "",
  ""
);

// thirdGenerationPersons.push(personEight);

const personNine = new CreatePerson(
  9,
  1,
  "Alexander",
  "William",
  "Doe",
  biologicalSexEnum[0],
  "2005",
  "Austin",
  "United States of America",
  false,
  2,
  0,
  "",
  ""
);

// thirdGenerationPersons.push(personNine);

const personTen = new CreatePerson(
  10,
  1,
  "Sophia",
  "Rose",
  "Doe",
  biologicalSexEnum[1],
  "2008",
  "Nashville",
  "United States of America",
  false,
  2,
  1,
  "",
  ""
);

// thirdGenerationPersons.push(personTen);

// const treeData = [
//   firstGenerationPersons,
//   secondGenerationPersons,
//   thirdGenerationPersons,
// ];

export {
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
