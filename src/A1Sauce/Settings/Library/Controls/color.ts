import {
	createFlexContainer,
	createInput,
	createLabel,
} from '../../Components';

export const createColorSetting = (
	name: string,
	description: string,
	defaultValue: string
): HTMLElement => {
	const input = createInput('color', name, defaultValue);
	input.id = name;
	const label = createLabel(name, description);
	label.setAttribute('for', name);
	const container = createFlexContainer();
	container.appendChild(input);
	container.appendChild(label);
	return container;
};
