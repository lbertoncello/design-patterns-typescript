import { MyDatabaseTSStyle } from './db/my-database-ts-style';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseTSStyle.instance;
myDatabaseClassic.add({ name: 'Roberto', age: 24 });
myDatabaseClassic.add({ name: 'Joana', age: 50 });
myDatabaseClassic.add({ name: 'Luiza', age: 25 });
myDatabaseClassic.remove(1);

myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
