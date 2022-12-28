import Smartlook from 'react-native-smartlook-analytics';

export default () => {
	Smartlook.instance.user.openNewSession();
  Smartlook.instance.user.openNewUser();
};
