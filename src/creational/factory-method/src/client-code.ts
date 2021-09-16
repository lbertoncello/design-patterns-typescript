import { CarFactory } from './factories/car-factory';
import { randomVehicleAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';
import { Car } from './vehicles/car';

/* Sem Factory */

/* Se a classe Car mudar o nome ou o construtor, a mudança teria que ser aplicada em 2 lugares */
const fusca = new Car('Fusca');
fusca.pickUp('Joana');
fusca.stop();

const celta = new Car('Celta');
celta.pickUp('Joana');
celta.stop();

/* Com Factory */

const carFactory = new CarFactory();

const fuscaFromFactory = carFactory.getVehicle('Fusca from Factory');
fuscaFromFactory.pickUp('João');
fuscaFromFactory.stop();

const celtaFromFactory = carFactory.getVehicle('Celta from Factory');
celtaFromFactory.pickUp('Lucas');
celtaFromFactory.stop();

/* ---- Caso de uso fictício ---- */
const customerNames = ['Ana', 'Helena', 'João', 'Joana'];

for (let i = 0; i < 10; i++) {
	const vehicle = randomVehicleAlgorithm();
	const customerName = customerNames[randomNumbers(customerNames.length)];

	vehicle.pickUp(customerName);
	vehicle.stop();

	console.log('-----------');
}

/* Outro exemplo */

for (let i = 0; i < 10; i++) {
	const customerName = customerNames[randomNumbers(customerNames.length)];
	const newCar = carFactory.pickUp(
		customerName,
		`NOVO CARRO - ${randomNumbers(100)}`,
	);
	newCar.stop();

	console.log('-----------');
}
