// Para fazer o adapter como classe
export interface EmailValidatorClassProtocol {
	isEmail: EmailValidatorFnProtocol;
}

// Para fazer o adapter como função
export interface EmailValidatorFnProtocol {
	(value: string): boolean;
}
