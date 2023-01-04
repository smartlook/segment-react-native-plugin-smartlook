import type { TrackEventType } from '@segment/analytics-react-native';
import Smartlook from 'react-native-smartlook-analytics';
import { propertify } from './utils';

export default (event: TrackEventType) => {
	const eventName = `${event.type.toUpperCase()} event: ${event.event}`;
	Smartlook.instance.analytics.trackEvent(eventName, propertify(event.properties ?? {}));

	return event;
};