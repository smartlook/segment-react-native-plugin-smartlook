# @smartlook/segment-react-native-plugin-smartlook

`DestinationPlugin` for [Smartlook](https://smartlook.com/). Wraps the [`react-native-smartlook-analytics`](https://www.npmjs.com/package/react-native-smartlook-analytics) package.

## Installation

You need to install the `@smartlook/segment-react-native-plugin-smartlook` and the `react-native-smartlook-analytics` dependency.

Using NPM:

```bash
npm install --save @smartlook/segment-react-native-plugin-smartlook react-native-smartlook-analytics
```

Using Yarn:

```bash
yarn add @smartlook/segment-react-native-plugin-smartlook react-native-smartlook-analytics
```

Run `pod install` after the installation to autolink the Smartlook SDK.

Follow the [React Native Smartlook SDK Installation](https://mobile.developer.smartlook.com/reference/react-native-sdk-installation) guide to finish the setup of react-native-smartlook-analytics in your app.
See [@segment/analytics-react-native](https://github.com/segmentio/analytics-react-native) for a detailed guide about adding the Segment Analytics to your app.

## Usage

Follow the [instructions for adding plugins](https://github.com/segmentio/analytics-react-native#adding-plugins) on the main Analytics client:

In your code where you initialize the analytics client call the `.add(plugin)` method with a new `SmartlookPlugin` instance.

```ts
import { createClient } from '@segment/analytics-react-native';
import { SmartlookPlugin } from '@smartlook/segment-react-native-plugin-smartlook';
import Smartlook from 'react-native-smartlook-analytics';

const segmentClient = createClient({
  writeKey: 'SEGMENT_KEY'
});

Smartlook.instance.preferences.setProjectKey(
  'SMARTLOOK_KEY'
);

segmentClient.add({ plugin: new SmartlookPlugin() });
```
