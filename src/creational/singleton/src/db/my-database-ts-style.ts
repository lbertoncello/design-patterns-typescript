/*
 * Implementação de Singleton utilizando recursos específicos do TS
 */
import { User } from '../interfaces/user';

export class MyDatabaseTSStyle {
	private static _instance: MyDatabaseTSStyle | null = null;
	private users: User[] = [];

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	private constructor() {}

	static get instance(): MyDatabaseTSStyle {
		if (MyDatabaseTSStyle._instance === null) {
			MyDatabaseTSStyle._instance = new MyDatabaseTSStyle();
		}

		return MyDatabaseTSStyle._instance;
	}

	add(user: User): void {
		this.users.push(user);
	}

	remove(index: number): void {
		this.users.splice(index, 1);
	}

	show(): void {
		for (const user of this.users) {
			console.log(user);
		}
	}
}
