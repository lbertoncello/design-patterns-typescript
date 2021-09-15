import { MainDishBuilder } from './classes/main-dish-builder';
import { MainDishDirector } from './classes/main-dish-director';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();
const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMeal();
console.log(veganMeal);
console.log(veganMeal.getPrice());

const mainDishDirector = new MainDishDirector();
const meal3 = mainDishDirector.construct();
console.log(meal3);
console.log(meal3.getPrice());

const meal4 = mainDishDirector.construct();
console.log(meal4);
console.log(meal4.getPrice());
