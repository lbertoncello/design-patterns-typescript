import { Customer } from '../customer/customer';
import { VehicleProtocol } from '../vehicle/vehicle-protocol';

export interface CustomerVehicleFactory {
	createCustomer(customerName: string): Customer;
	createVehicle(vehicleName: string, customerName: string): VehicleProtocol;
}