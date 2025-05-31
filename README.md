# <!-- To watch the demo video, click the image or the link below -->
👉 [Click here to watch the video](./Preview/Working%20Demo.mp4)

# Folder Structure

```
src/
├── App.js
├── assets/
│   ├── fonts/
│   │   ├── OpenSans-Bold.ttf
│   │   ├── OpenSans-BoldItalic.ttf
│   │   ├── OpenSans-ExtraBold.ttf
│   │   ├── OpenSans-ExtraBoldItalic.ttf
│   │   ├── OpenSans-Italic.ttf
│   │   ├── OpenSans-Light.ttf
│   │   ├── OpenSans-LightItalic.ttf
│   │   ├── OpenSans-Medium.ttf
│   │   ├── OpenSans-MediumItalic.ttf
│   │   ├── OpenSans-Regular.ttf
│   │   ├── OpenSans-SemiBold.ttf
│   │   └── OpenSans-SemiBoldItalic.ttf
│   ├── icons/
│   └── images/
├── components/
│   ├── ScreenHeader.js
│   ├── bottomsheet/
│   │   └── BottomSheet.js
│   ├── button/
│   │   ├── FloatingButton.js
│   │   └── IconButton.js
│   └── option-drawer/
│       ├── OptionCard.js
│       └── OptionDrawer.js
├── helpers/
│   ├── assets.js
│   ├── colors.js
│   ├── demo.js
│   ├── fonts.js
│   ├── helper-functions.js
│   ├── helper.js
│   ├── responsive.js
│   ├── strings.js
│   └── styles.js
├── hooks/
│   └── ui/
│       └── useKeyboardStatus.js
├── navigation/
│   ├── NavigationHandler.js
│   └── helper.js
├── screens/
│   └── HomeScreen/
│       ├── HomeScreen.Hooks.js
│       ├── HomeScreen.js
│       ├── styles.js
│       └── components/
│           ├── DateButton.js
│           ├── DateController.js
│           ├── ProgressLine.js
│           ├── QuoteCard.js
│           └── TaskCard.js
```

# Screenshots
![HomeScreen](./Preview/Home%20Screen.png)
![BottomDrawer](./Preview/Bottom%20Drawer.png)

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

