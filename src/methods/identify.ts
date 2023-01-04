import type { IdentifyEventType } from '@segment/analytics-react-native';
import Smartlook from 'react-native-smartlook-analytics';

export default (event: IdentifyEventType) => {
	Smartlook.instance.user.setIdentifier(event.userId ?? '');

	return event;
};
