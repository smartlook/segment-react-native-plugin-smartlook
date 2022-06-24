# @smartlook/segment-react-native-plugin-smartlook

`DestinationPlugin` for [Smartlook](https://smartlook.com/). Wraps [`smartlook-react-native-wrapper`](https://github.com/smartlook/smartlook-react-native-bridge).

## Installation

You need to install the `@smartlook/segment-react-native-plugin-smartlook` and the `smartlook-react-native-wrapper` dependency.

Using NPM:

```bash
npm install --save @smartlook/segment-react-native-plugin-smartlook smartlook-react-native-wrapper
```

Using Yarn:

```bash
yarn add @smartlook/segment-react-native-plugin-smartlook smartlook-react-native-wrapper
```

Run `pod install` after the installation to autolink the Smartlook SDK.

Follow the [React Native Smartlook SDK Installation](https://mobile.developer.smartlook.com/reference/react-native-sdk-installation) guide to finish setup of smartlook-react-native-wrapper in your app.
See [@segment/analytics-react-native](https://github.com/segmentio/analytics-react-native) for a detailed guide about adding Segment to your app.

## Usage

Follow the [instructions for adding plugins](https://github.com/segmentio/analytics-react-native#adding-plugins) on the main Analytics client:

In your code where you initialize the analytics client call the `.add(plugin)` method with a `SmartlookPlugin` instance.

```ts
import { createClient } from '@segment/analytics-react-native';

import { SmartlookPlugin } from '@smartlook/segment-react-native-plugin-smartlook';

const segmentClient = createClient({
  writeKey: 'SEGMENT_KEY'
});

segmentClient.add({ plugin: new SmartlookPlugin() });
```
