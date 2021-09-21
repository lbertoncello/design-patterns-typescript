import { Customer } from '../customer/customer';
import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { EnterpriseVehicle } from '../vehicle/enterprise-vehicle';
import { VehicleProtocol } from '../vehicle/vehicle-protocol';
import { CustomerVehicleFactory } from './customer-vehicle-factory';

export class EnterpriseCustomerVehicleFactory
	implements CustomerVehicleFactory
{
	createCustomer(customerName: string): Customer {
		return new EnterpriseCustomer(customerName);
	}

	createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
		const customer = this.createCustomer(customerName);

		return new EnterpriseVehicle(vehicleName, customer);
	}
}
