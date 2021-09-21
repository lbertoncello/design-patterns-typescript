import { Customer } from '../customer/customer';
import { IndividualCustomer } from '../customer/individual-customer';
import { IndividualVehicle } from '../vehicle/individual-vehicle';
import { VehicleProtocol } from '../vehicle/vehicle-protocol';
import { CustomerVehicleFactory } from './customer-vehicle-factory';

export class IndividualCustomerVehicleFactory
	implements CustomerVehicleFactory
{
	createCustomer(customerName: string): Customer {
		return new IndividualCustomer(customerName);
	}

	createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
		const customer = this.createCustomer(customerName);

		return new IndividualVehicle(vehicleName, customer);
	}
}
