import { MealDirectorProtocol } from '../interfaces/meal-director-protocol';
import { MainDishBuilder } from './main-dish-builder';
import { MealBox } from './meal-box';

export class MainDishDirector implements MealDirectorProtocol {
	private _mealDishBuilder = new MainDishBuilder();

	construct(): MealBox {
		const mainDish = this._mealDishBuilder
			.makeMeal()
			.makeBeverage()
			.makeDessert()
			.getMeal();

		this._mealDishBuilder.reset();

		return mainDish;
	}
}
