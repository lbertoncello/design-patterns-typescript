export interface Prototype {
	clone(): Prototype;
}

export class Address implements Prototype {
	constructor(public street: string, public number: number) {}

	clone(): Address {
		return new Address(this.street, this.number);
	}
}

export class Person implements Prototype {
	public addresses: Address[] = [];

	constructor(public name: string, public age: number) {}

	clone(): Person {
		const newObj = new Person(this.name, this.age);
		newObj.addresses = this.addresses.map((item) => item.clone());

		return newObj;
	}

	addAddress(address: Address): void {
		this.addresses.push(address);
	}
}

const address1 = new Address('Av Brasil', 15);
const person1 = new Person('Lucas', 24);
person1.addAddress(address1);

console.log('--- Person 1 ---');
console.log(person1);

console.log('--- Person 2 ---');
const person2 = person1.clone();
/*
 * Utilizando shallow copy (através do Object.create()) apenas o endereço de memória da lista original vai ser copiado.
 * Neste caso, utilizamos deep copy, então isso não vai acontecer.
 */
person1.addresses[0].street = 'TESTE';
console.log(person2);
person2.name = 'Carlos';
console.log(person2.name);
console.log(person2.addresses);

console.log('--- Person 1 ---');
console.log(person1);
