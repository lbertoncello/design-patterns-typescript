import { MyDatabaseTSStyle } from './db/my-database-ts-style';

const myDatabaseClassic = MyDatabaseTSStyle.instance;
myDatabaseClassic.add({ name: 'Lucas', age: 24 });
myDatabaseClassic.add({ name: 'Maria', age: 50 });
myDatabaseClassic.add({ name: 'Eduardo', age: 25 });
myDatabaseClassic.remove(1);

myDatabaseClassic.show();

export { myDatabaseClassic };
