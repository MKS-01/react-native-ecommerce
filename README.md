## Getting Started

`$ yarn install`

### before running apps on iOS

`$ cd ios && pod install`

`$ cd ..`

### Running your React Native application

- android

`$ npx react-native run-android`

- iOS

`$ npx react-native run-ios`

### Change default iOS Simulator

on root directory

`$ xcrun simctl list devices`

`$ npx react-native run-ios --simulator="iPhone 11"`

### Running on Device

https://reactnative.dev/docs/running-on-device

## React-Native Setup

Follow React-Native-CLI QuickStart

https://reactnative.dev/docs/getting-started

### CSS - Styled-component

https://styled-components.com/

### React-Navigation

https://reactnavigation.org/

Authentication flows https://reactnavigation.org/docs/auth-flow/

### How I structure the project?

https://cheesecakelabs.com/blog/efficient-way-structure-react-native-projects/

Errors comes while running iOS app due to duplicate of vector-icons fonts then follow: https://github.com/oblador/react-native-vector-icons/issues/1074

### Library used

- Navigation : React-Navigation 5.x.x
- CSS: styled-components 5.1.0
- Icons: react-native-vector-icons
- Location : react-native-get-location

<div>
<img src="./screenshots/home.png" alt="Home" width="277" height="508">
<img src="./screenshots/product_denim.png" alt="Product List" width="277" height="508">
</div>

<div>
<img src="./screenshots/details_shoes.png" alt="Product Details" width="277" height="508">
</div>
