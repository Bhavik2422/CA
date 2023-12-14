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

/* This is the function which return the session value according to the session name passed in it.
    This is async function.
    @Param sessionName: SESSION_NAME.#sessionName#
    @param cb: Callback function in which you get the response (String formate) with status #RESPONSE_TYPE.TYPE#
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

/*  This is the function which return the session value according to 
    the session name passed in it and store that session.
    This is async function.
    @Param sessionName: SESSION_NAME.#sessionName#
    @Param sessionData: data in string formate which you want to store
    @param cb: Callback function in which you get the response with status #RESPONSE_TYPE.TYPE#
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
