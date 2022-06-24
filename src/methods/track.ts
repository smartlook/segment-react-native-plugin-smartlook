import type { TrackEventType } from '@segment/analytics-react-native';
import Smartlook from 'smartlook-react-native-wrapper';

export default (event: TrackEventType) => {
	const eventName = `${event.type.toUpperCase()} event: ${event.event}`;
	console.log('track custom event: ', eventName);
	Smartlook.trackCustomEvent(eventName, flatten(event.properties ?? {}));
	return event;
};