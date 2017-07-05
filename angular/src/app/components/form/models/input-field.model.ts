import { BaseField, BaseFieldConfig } from './field.model';

export class TextField extends BaseField<string> {
	type = 'text';
	placeholder: string;

	constructor(options: {
		id?: string;
		value?: string;
		key?: string;
		required?: boolean;
		config?: BaseFieldConfig;
	}) {
		super(options);
	}
}
