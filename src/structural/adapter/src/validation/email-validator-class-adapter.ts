import isEmail from 'validator/lib/isEmail';
import { EmailValidatorClassProtocol } from './email-validator-protocol';

export class EmailValidatorClassAdapter implements EmailValidatorClassProtocol {
	isEmail(value: string): boolean {
		return isEmail(value);
	}
}
