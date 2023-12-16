import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

/**
 * This class returns the device information such as device model etc,
 * @returns device information
 */

/**
 * This function return the application version
 * @returns {String} Application version which is set into application (Android - Gradel, iOS - General Settings)
 */
export function getDeviceAppVersion() {
    const appVersion = DeviceInfo.getVersion();
    return appVersion;
}

/**
 * This function return the device model
 * @returns {String} Device model
 */
export function getDeviceModel() {
    const deviceModel = DeviceInfo.getModel();
    return deviceModel;
}

/**
 * This function return device name
 * @returns {String} Device name
 */
export function getDeviceName() {
    const deviceName = DeviceInfo.getDeviceName();
    return deviceName;
}

/**
 * This method use only for android, to get Android OS API level
 * @returns {String} apiLevel e.g. 33 for Android
 */
export function getDeviceApiLevel() {
    const apiLevel = DeviceInfo.getAPILevel();
    return apiLevel;
}

/**
 * This method return the Application package name
 * @returns {String} Application package name
 */
export function getAppPackageName() {
    const packageName = DeviceInfo.getBundleId();
    return packageName;
}

/**
 * This method returns the Application version code
 * @returns {String} App code e.g. 1,2,3 for Android, 1.0,5.1 for iOS
 */
export function getCurrentAppCode() {
    const appCode = Platform.OS==='android' ? DeviceInfo.getBuildNumber() : DeviceInfo.getVersion();
    return appCode;
}

/**
 * This method returns the device type on which application is running
 * @returns {Int} Device type 1 : Android , 2 : iOS
 */
export function getDeviceType() {
    const deviceType = Platform.OS === 'ios' ? 2 : 1;
    return deviceType;
}

/**
 * This method return all the device details in proper format
 * @returns {String} All the device details in proper format to print logs
 */
export function getDeviceDetails() {
    const currentDate = Date().toLocaleString();
    const versionName = getDeviceAppVersion();
    const versionCode = getCurrentAppCode();
    const deviceBrand = DeviceInfo.getBrand();
    const device = Platform.OS === 'ios' ? JSON.stringify(DeviceInfo.getDevice()) : '';
    const deviceId = DeviceInfo.getDeviceId();
    const deviceType = getDeviceType();
    const model = DeviceInfo.getModel();
    const SDK = Platform.Version;
    const release = Platform.constants['Release'];

    var deviceDetails = "************ <b>DEVICE INFORMATION<b> ************";
    if (currentDate != null && currentDate !== '') {
        deviceDetails = deviceDetails.concat("<br> Date: ", currentDate);
    }

    if (deviceBrand != null && deviceBrand !== '') {
        deviceDetails = deviceDetails.concat("<br> Brand: ", deviceBrand);
    }

    if (device != null && device !== '') {
        deviceDetails = deviceDetails.concat("<br> Device: ", device);
    }

    if (deviceId != null && deviceId !== '') {
        deviceDetails = deviceDetails.concat("<br> Device Id: ", deviceId);
    }

    if (deviceType != null && deviceType !== '') {
        deviceDetails = deviceDetails.concat("<br> Device Type: ", deviceType);
    }

    if (model != null && model !== '') {
        deviceDetails = deviceDetails.concat("<br> Device Model: ", model);
    }

    deviceDetails = deviceDetails.concat("<br>************ <b>FIRMWARE</b> ************");
    if (versionName != null && versionName !== '' && versionCode != null && versionCode !== '') {
        deviceDetails = deviceDetails.concat("<br> Version Name/Code: ", versionCode, "/", versionName)
    }

    if (SDK != null && SDK !== '') {
        deviceDetails = deviceDetails.concat("<br> SDK: ", SDK)
    }

    if (release != null && release !== '') {
        deviceDetails = deviceDetails.concat("<br> Release: ", release)
    }
    
    return deviceDetails;
}