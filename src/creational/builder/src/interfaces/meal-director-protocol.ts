import { MealBox } from '../classes/meal-box';

export interface MealDirectorProtocol {
	construct(): MealBox;
}
