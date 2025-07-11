import { CreatePerson } from "~/data/CreatePerson";
import { sexEnum } from "~/data/Person";

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
