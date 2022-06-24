interface Dictionary<T> {
    [Key: string]: T;
}

function flatten(obj: any, prefix = '') {
	return Object.keys(obj).reduce((acc, current) => {
		const _key = `${prefix ? prefix + '_' : ''}${current}`;
		const currentValue = obj[current];
		if (Array.isArray(currentValue) || Object(currentValue) === currentValue) {
			Object.assign(acc, flatten(currentValue, current));
		} else {
			acc[_key] = `${currentValue}`;
		}
		return acc;
	}, {} as Dictionary<string>);
}
