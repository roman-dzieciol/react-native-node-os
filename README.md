# react-native-node-os

## Getting started

`$ npm install react-native-node-os --save`

### Mostly automatic installation

`$ react-native link react-native-node-os`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-node-os` and add `NodeOs.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libNodeOs.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.reactlibrary.NodeOsPackage;` to the imports at the top of the file
  - Add `new NodeOsPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-node-os'
  	project(':react-native-node-os').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-node-os/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-node-os')
  	```


## Usage
```javascript
import NodeOs from 'react-native-node-os';

// TODO: What to do with the module?
NodeOs;
```

## API Compatibility

### Node.js

Node.js v12.10.0
https://nodejs.org/api/os.html

test commit-lint







