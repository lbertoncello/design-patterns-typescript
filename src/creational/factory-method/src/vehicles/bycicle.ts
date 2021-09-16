import { Vehicle } from './vehicle';

export class Bycicle implements Vehicle {
	constructor(private name: string) {}

	pickUp(customerName: string): void {
		console.log(`A bicileta ${this.name} está buscando o ${customerName}`);
	}
	stop(): void {
		console.log(`A bicileta ${this.name} parou`);
	}
}
