import type { ScreenEventType } from '@segment/analytics-react-native';
import Smartlook from 'react-native-smartlook-analytics';
import { propertify } from './utils';

export default (event: ScreenEventType) => {
	Smartlook.instance.analytics.trackNavigationEnter(event.name, propertify(event.properties));

	return event;
};
