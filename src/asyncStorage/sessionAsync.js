import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

export const RESPONSE_TYPE = {SUCCESS: 1, ERROR: 0, EXCEPTION: -1}

export const SESSION_NAME = {
   USER_LOGIN: 'userLogin',
}

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
