import { Properties } from "react-native-smartlook-analytics";

export function propertify(obj: any, prefix = '') {
  return Object.keys(obj).reduce((acc, current) => {
    const _key = `${prefix ? prefix + '_' : ''}${current}`;
    const currentValue = obj[current];
    
    if (currentValue && (Array.isArray(currentValue) || Object(currentValue) === currentValue)) {
      // @ts-ignore - this is very sad, but what can we do.
      acc.map = new Map([...acc.map, ...propertify(currentValue, current).map]);
    } else {
      acc.putString(_key, JSON.stringify(currentValue));
    }

    return acc;
  }, new Properties());
}
