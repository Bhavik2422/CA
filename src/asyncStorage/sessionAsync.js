import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

/* While getting values from session you will get either 3 of these response */
export const RESPONSE_TYPE = {SUCCESS: 1, ERROR: 0, EXCEPTION: -1}

/**
 * Here you can define the session name, which you can access all over the application
 */
export const SESSION_NAME = {
   USER_LOGIN: 'userLogin',
}

/**  This is the function which return the session value according to the session name passed in it.
 * This is async function.
 * @param {String} sessionName SESSION_NAME.#sessionName#
 * @param cb Callback function in which you get the response (String formate) with status #RESPONSE_TYPE.TYPE#
*/
export const getPrefData = (sessionName, cb) => {
    try{
    AsyncStorage.getItem(sessionName, (error, value) => {
        // console.log("Error: ", error, ", value: ", value);
        if (error) {
          cb(RESPONSE_TYPE.ERROR, error)
        } else {
            if (value != null && value != "") {
                cb(RESPONSE_TYPE.SUCCESS,value)
            }else{
                cb(RESPONSE_TYPE.ERROR,null)
            }
        }
      })
    }catch(exception){
        cb(RESPONSE_TYPE.EXCEPTION, exception)
    }
}

/**  This is the function which return the session value according to the session name passed in it.
 * This is sync function.
 * @param {String} sessionName SESSION_NAME.#sessionName#
 * @returns {String} Value: value stored in requested session 
*/
export const getPrefDataSync = async (sessionName) => {
    try {
        // console.log("a");
        const value = await AsyncStorage.getItem(sessionName);
        // console.log("b "+value);
        
        return value;
        
    } catch (e) {
        // console.log("d");
        return e
    }
};

/** This is the function which return the session value according to 
 * the session name passed in it and store that session.
 * This is async function.
 * @param {String} sessionName: SESSION_NAME.#sessionName#
 * @param {String} sessionData: data in string formate which you want to store
 * @param {Function} cb: Callback function in which you get the response with status #RESPONSE_TYPE.TYPE#
*/
export const setPrefData = (sessionName, sessionData, cb) => {

    try{

        AsyncStorage.setItem(sessionName, sessionData, (error) => {
            // console.log("Session Data: ", sessionData);
            if (error) {
                // console.log("Session Data: Error: ", error);
                cb(RESPONSE_TYPE.ERROR, error)
            } else {
                // console.log("Session Data: Success: ", error);
                cb(RESPONSE_TYPE.SUCCESS,sessionData)
            }
    
          })
    }catch(e){
        cb(RESPONSE_TYPE.EXCEPTION, e)
    }
    

}

/** This is the function which stores the session value according to 
 * the session name passed in it and return boolean stats
 * This is sync function.
 * @param {String} sessionName: SESSION_NAME.#sessionName#
 * @param {String} sessionData: data in string formate which you want to store
 * 
 * @returns {Boolean} if stored successfully then return true, else in case of error it returns false
*/
export const setPrefDataSync = async (sessionName, sessionData) => {
    try {
        // console.log("a");
        const value = await AsyncStorage.setItem(sessionName, sessionData);
        // console.log("b ");
        
        return true;
        
    } catch (e) {
        // console.log("d"+e);
        return false
    }
};