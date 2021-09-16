import { BycicleFactory } from '../factories/bycicle-factory';
import { CarFactory } from '../factories/car-factory';
import { randomNumbers } from '../utils/random-numbers';
import { Vehicle } from '../vehicles/vehicle';

export function randomVehicleAlgorithm(): Vehicle {
	const carFactory = new CarFactory();
	const bycicleFactory = new BycicleFactory();

	const car1 = carFactory.getVehicle('Fusca');
	const car2 = carFactory.getVehicle('Celta');
	const bycicle1 = bycicleFactory.getVehicle('Monark');
	const cars = [car1, car2, bycicle1];

	return cars[randomNumbers(cars.length)];
}
