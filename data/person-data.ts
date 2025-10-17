import CreatePerson from '~/data/CreatePerson';
import type IPerson from '~/types/person';
import IGender from '~/types/gender';

const first_generation: IPerson[] = [];
const second_generation: IPerson[] = [];
const third_generation: IPerson[] = [];

const person_one = new CreatePerson(
	1,
	1,
	'Richard',
	'Samuel',
	'Doe',
	IGender['MALE'],
	'1922',
	'New York',
	'United States of America',
	true,
	0,
	0,
	'',
	''
);

first_generation.push(person_one);

const person_two = new CreatePerson(
	2,
	1,
	'Margaret',
	'Elizabeth',
	'Doe',
	IGender['FEMALE'],
	'1925',
	'Boston',
	'United States of America',
	false,
	0,
	0,
	'',
	''
);

first_generation.push(person_two);

const person_three = new CreatePerson(
	3,
	1,
	'Robert',
	'James',
	'Doe',
	IGender['MALE'],
	'1948',
	'Chicago',
	'United States of America',
	false,
	1,
	0,
	'',
	''
);

second_generation.push(person_three);

const person_four = new CreatePerson(
	4,
	1,
	'Sarah',
	'Anne',
	'Doe',
	IGender['FEMALE'],
	'1950',
	'Detroit',
	'United States of America',
	false,
	1,
	0,
	'',
	''
);

second_generation.push(person_four);

const person_five = new CreatePerson(
	5,
	1,
	'Michael',
	'Thomas',
	'Doe',
	IGender['MALE'],
	'1975',
	'Los Angeles',
	'United States of America',
	false,
	1,
	1,
	'',
	''
);

second_generation.push(person_five);

const person_six = new CreatePerson(
	6,
	1,
	'Jennifer',
	'Marie',
	'Doe',
	IGender['FEMALE'],
	'1978',
	'San Francisco',
	'United States of America',
	false,
	1,
	0,
	'',
	''
);

second_generation.push(person_six);

const person_seven = new CreatePerson(
	7,
	1,
	'David',
	'Christopher',
	'Doe',
	IGender['MALE'],
	'2000',
	'Seattle',
	'United States of America',
	false,
	2,
	0,
	'',
	''
);

third_generation.push(person_seven);

const person_eight = new CreatePerson(
	8,
	1,
	'Emily',
	'Grace',
	'Doe',
	IGender['FEMALE'],
	'2003',
	'Portland',
	'United States of America',
	false,
	2,
	1,
	'',
	''
);

third_generation.push(person_eight);

const person_nine = new CreatePerson(
	9,
	1,
	'Alexander',
	'William',
	'Doe',
	IGender['MALE'],
	'2005',
	'Austin',
	'United States of America',
	false,
	2,
	0,
	'',
	''
);

third_generation.push(person_nine);

const person_ten = new CreatePerson(
	10,
	1,
	'Sophia',
	'Rose',
	'Doe',
	IGender['FEMALE'],
	'2008',
	'Nashville',
	'United States of America',
	false,
	2,
	1,
	'',
	''
);

third_generation.push(person_ten);

const tree_data = [first_generation, second_generation, third_generation];

export default tree_data;
