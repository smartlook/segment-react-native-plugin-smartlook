import {
  DestinationPlugin,
  IdentifyEventType,
  PluginType,
  ScreenEventType,
  TrackEventType,
} from "@segment/analytics-react-native";
import identify from "./methods/identify";
import reset from "./methods/reset";
import screen from "./methods/screen";
import track from "./methods/track";

export class SmartlookPlugin extends DestinationPlugin {
  type = PluginType.destination;
  key = "Smartlook";

  track(event: TrackEventType) {
    track(event);
    return event;
  }

  screen(event: ScreenEventType) {
    screen(event);
    return event;
  }

  identify(event: IdentifyEventType) {
    identify(event);
    return event;
  }

  reset() {
    reset();
  }
}
