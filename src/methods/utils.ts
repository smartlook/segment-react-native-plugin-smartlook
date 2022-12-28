import type { Properties } from "react-native-smartlook-analytics";

export function propertify(obj: any, prefix = '') {
	return Object.keys(obj).reduce((acc, current) => {
		const _key = `${prefix ? prefix + '_' : ''}${current}`;
		const currentValue = obj[current];
    
		if (currentValue && (Array.isArray(currentValue) || Object(currentValue) === currentValue)) {
			Object.assign(acc, propertify(currentValue, current));
		} else {
      acc.putString(_key, currentValue);
		}

		return acc;
	}, {} as Properties);
}
