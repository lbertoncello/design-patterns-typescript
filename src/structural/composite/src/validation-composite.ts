/*
 *
 */

// Component
export abstract class ValidationComponent {
	abstract validate(value: unknown): boolean;
}

// Leaf
export class ValidateEmail extends ValidationComponent {
	validate(value: unknown): boolean {
		if (typeof value !== 'string') return false;

		return /@/.test(value);
	}
}

// Leaf
export class ValidateString extends ValidationComponent {
	validate(value: unknown): boolean {
		return typeof value === 'string';
	}
}

// Leaf
export class ValidateNumber extends ValidationComponent {
	validate(value: unknown): boolean {
		if (typeof value !== 'string') return false;
		return /\d+/.test(value);
	}
}

// Composite
export class ValidationComposite extends ValidationComponent {
	private readonly _children: ValidationComponent[] = [];

	validate(value: unknown): boolean {
		for (const child of this._children) {
			const validation = child.validate(value);

			if (!validation) return false;
		}

		return true;
	}

	add(...validations: ValidationComponent[]): void {
		validations.forEach((validation) => this._children.push(validation));
	}
}

const validateEmail = new ValidateEmail();
const validateNumber = new ValidateNumber();
const validateString = new ValidateString();
const validateComposite = new ValidationComposite();
validateComposite.add(validateEmail, validateNumber, validateString);

console.log(validateComposite.validate(1));
console.log(validateComposite.validate('1'));
console.log(validateComposite.validate('1@1'));
