import type { TrackEventType } from "@segment/analytics-react-native";
import track from "../track";
import Smartlook from 'react-native-smartlook-analytics';

jest.mock('react-native-smartlook-analytics', () => {
  return {
    instance: jest.fn().mockReturnValue({
      analytics: jest.fn().mockReturnValue({ 
        trackEvent: jest.fn()
      })
  }),
  analytics: jest.fn().mockReturnValue({ 
    trackEvent: jest.fn()
  })
}});

describe('track', () => { 
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call Smartlook lib on track', () => {
    const payload = {
      type: 'track',
      event: 'ACTION',
    };
    const spy = jest.spyOn(Smartlook.instance.analytics, 'trackEvent').mockImplementation((_name, _props) => Promise.resolve());
    
    track(payload as TrackEventType);

    expect(spy).toHaveBeenCalledWith('ACTION');
  }); 
});