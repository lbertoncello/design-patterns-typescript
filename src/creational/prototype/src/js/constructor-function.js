const personPrototype = {
	firstName: 'Lucas',
	lastName: 'Bertoncello',
	age: 24,

	fullName() {
		return `${this.firstName} ${this.lastName}`;
	},
};

function Person(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
}

Person.prototype = Object.create(personPrototype);
/* Reatribui o construtor como sendo Person que é perdido ao mudar o prototype */
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
	Person.call(this, firstName, lastName, age);
	this.fromSubClass = 'OI';
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

console.log('--- Person ---');
const person1 = new Person('José', 'Andrade', 30);
console.log(person1);
console.log(person1.fullName());

console.log('--- Sub Person ---');
const person2 = new SubPerson('Ana', 'Silva', 20);
console.log(person2);
console.log(person2.fullName());
