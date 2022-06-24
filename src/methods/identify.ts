import type { IdentifyEventType } from '@segment/analytics-react-native';
import Smartlook from 'smartlook-react-native-wrapper';

export default (event: IdentifyEventType) => {
	Smartlook.setUserIdentifier(event.userId ?? '', flatten(event.traits));

	return event;
};
