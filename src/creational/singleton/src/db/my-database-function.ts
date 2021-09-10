/*
 * Implementação de Singleton utilizando funções
 * Utiliza o closure de uma função para implementar o Singleton
 */
import { User } from '../interfaces/user';

export const MyDatabaseModule = (function () {
	const users: User[] = [];

	return {
		add(user: User): void {
			users.push(user);
		},

		remove(index: number): void {
			users.splice(index, 1);
		},

		show(): void {
			for (const user of users) {
				console.log(user);
			}
		},
	};
})();
