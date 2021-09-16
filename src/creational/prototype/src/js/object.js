const personPrototype = {
	firstName: 'Lucas',
	lastName: 'Bertoncello',
	age: 24,

	fullName() {
		return `${this.firstName} ${this.lastName}`;
	},
};

console.log('--- Another Person ---');
const anotherPerson = Object.create(personPrototype);
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());

console.log('--- Another Person 2 ---');
const anotherPerson2 = Object.create(personPrototype);
anotherPerson2.firstName = 'José';
console.log(anotherPerson2);
console.log(anotherPerson2.fullName());
