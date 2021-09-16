import { Vehicle } from './vehicle';

export class Car implements Vehicle {
	constructor(private name: string) {}

	pickUp(customerName: string): void {
		console.log(`O carro ${this.name} está buscando o ${customerName}`);
	}
	stop(): void {
		console.log(`O carro ${this.name} parou`);
	}
}
