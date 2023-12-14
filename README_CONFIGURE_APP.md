This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Technologies & Version used
Node: v20.10.0
NPM: 10.2.3
React: 18.2.0
React Native: 0.73.0
Android JDK: 21
Build Gradle Version: 8.3 
Kotlin Version: 1.8.0

# Install & check APK

## Step 1: Download or place APK file from below Path into your android phone
I:\WorkSpace_Live\CognizantAssignment2\AndroidDetails\CA_RELEASE_V1.apk
## Step 2: Click on APK file and click on Install Anyway
## Step 2.1: If needed you need to allow permission to install appliation from unknown storage/Download directory
## Step 3: Once you Install APP you are good to go to explore APP


# Setup this project in your System and RUN the application

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding using Above configurable version


## Step 1: Install node modules by running below commands
```bash
# using npm
npm install
cd ios
pod install
cd ..
```


To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start


```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android:

### For Android

```bash
# using npm
npm run android #Emulator_Name#

```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator shortly provided you have set up your emulator/simulator correctly.

If you are running on Emulator/Simulator
- go to terminal in Android studion and run below command, and restart you application


```bash
# using npm
adb reverse tcp:8081
```

If you are running on Actual devide then you need to take care of below notes
- Your actual device is connected with same WIFI/Network on which your system connected
- Find your system IP address from Network setting e.g. 192.168.192.54
- Once you got the IP address then shake your device and click on setting, then click on "Debug server host and port for device"
- Enter your IP address with port number 8081 e.g 192.168.192.54:8081

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 2.1: If application doesn't work as expected, Please check your all software version and adjust (upgrade/downgrade) libraries version used in Application.