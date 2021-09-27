/*
 * Exemplo do uso de composite para um cenário de carrinho de compras
 */

// Component
export abstract class ProductComponent {
	abstract getPrice(): number;
}

// Leaft
export class ProductLeaf extends ProductComponent {
	constructor(public name: string, public price: number) {
		super();
	}

	getPrice(): number {
		return this.price;
	}
}

// Composite
export class ProductComposite extends ProductComponent {
	private _children: ProductComponent[] = [];

	add(...products: ProductComponent[]): void {
		products.forEach((product) => this._children.push(product));
	}

	remove(product: ProductComponent): void {
		const productIndex = this._children.indexOf(product);

		if (productIndex !== -1) this._children.splice(productIndex, 1);
	}

	getPrice(): number {
		return this._children.reduce((sum, child) => sum + child.getPrice(), 0);
	}
}

// Client code
const pen = new ProductLeaf('Caneta', 1);
const smartphone = new ProductLeaf('Smartphone', 1_000);
const tShirt = new ProductLeaf('Camiseta', 40);
const productBox = new ProductComposite();
productBox.add(pen, smartphone, tShirt);

const table = new ProductLeaf('Tablet', 2_000);
const kindle = new ProductLeaf('Kindle', 400);
const anotherProductBox = new ProductComposite();
anotherProductBox.add(table, kindle);
productBox.add(anotherProductBox);

console.log(productBox);
console.log(productBox.getPrice());
