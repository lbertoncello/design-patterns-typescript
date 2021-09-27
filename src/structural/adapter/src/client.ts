import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';
import {
	EmailValidatorClassProtocol,
	EmailValidatorFnProtocol,
} from './validation/email-validator-protocol';

function validaEmailClass(
	emailValidator: EmailValidatorClassProtocol,
	email: string,
): void {
	if (emailValidator.isEmail(email)) {
		console.log('Email é válido (CLASS)');
	} else {
		console.log('Email é inválido (CLASS)');
	}
}

function validaEmailFn(
	emailValidator: EmailValidatorFnProtocol,
	email: string,
): void {
	if (emailValidator(email)) {
		console.log('Email é válido (FN)');
	} else {
		console.log('Email é inválido (FN)');
	}
}

const emailValido = 'lucas@gmail.com';
const emailInvalido = 'lucasgmail.com';
const emailValidatorClassAdapter = new EmailValidatorClassAdapter();

validaEmailClass(emailValidatorClassAdapter, emailValido);
validaEmailFn(emailValidatorFnAdapter, emailInvalido);
