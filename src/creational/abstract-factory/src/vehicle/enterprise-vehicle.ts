import { Customer } from '../customer/customer';
import { VehicleProtocol } from './vehicle-protocol';

export class EnterpriseVehicle implements VehicleProtocol {
	constructor(public name: string, private readonly customer: Customer) {}

	pickUp(): void {
		console.log(
			`${this.name} (ENTERPRISE) está buscando ${this.customer.name}`,
		);
	}
}
