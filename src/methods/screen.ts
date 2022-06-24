import type { ScreenEventType } from '@segment/analytics-react-native';
import Smartlook from 'smartlook-react-native-wrapper';

export default (event: ScreenEventType) => {
	Smartlook.trackNavigationEvent(event.name, Smartlook.ViewState.Enter);
	return event;
};
