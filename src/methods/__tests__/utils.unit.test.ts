import { propertify } from "../utils";
jest.mock('react-native-smartlook-analytics');

describe('propertify', () => { 
  it('should correctly parse plain object into Properties', () => {
    const object = { key1: "val1", key2: 2, key3: false };
    const props = propertify(object);

    expect(props.toObject()).toBe({ "key1": "val1", "key2": "2", "key3": "false" });
  }); 
});