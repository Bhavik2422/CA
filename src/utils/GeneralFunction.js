import * as session from '../asyncStorage/sessionAsync';
import Constants from './Constants';

/**
 * This is common function for getting unique key for repetative views.
 * 
 * @param {Int} id index/item-id of that repeatative view
 * @returns {String} unique key in String
 */
export const getKey = (id=-1) => {

    let key = "";
    if(id!=null && id>=0){
        key = key.concat(id).concat(Math.random())
    }else{
        key = key.concat(Math.random())
    }
    return key;

}

/**
 * This is common function for validating entered EMail.
 * 
 * @param {String} email email which needed to varify 
 * @returns {Boolean} based on reg-ex email validation
 */
export const validateEmail = (email = "") => {
    let isValidate = false;
    
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if(reg.test(email) === false){
        isValidate = false;
    }else{
        isValidate = true;
    }

    return isValidate;
}

/**
 * This is common function for logout user from the application.
 * It will remove session data.
 */
export const logoutFromApp  =()=>{
    session.setPrefData(session.SESSION_NAME.USER_LOGIN, "",(res, data)=>{
       
    })
}


/**
 * To call API add API name in below json and write case for that API in @getApiURL function below to prepare API URL
 */    
export const API_NAME = Object.freeze({LOGIN_API: 1, ADD_PRODUCT_API: 2, GET_ALL_PRODUCTS: 3, SEARCH_PRODUCTS: 4});

/**
 * 
 * @param {Int} apiName define which api url need to be prepare
 * @returns according to the apiName return the prepared API URL
 */
export const getApiURL = (apiName) => {
    let apiURL = '';
    switch (apiName) {
        case API_NAME.LOGIN_API:
                apiURL = `${Constants.BASE_URL}${Constants.LOGIN_USER}`;       
            break;
        case API_NAME.ADD_PRODUCT_API:
            apiURL = `${Constants.BASE_URL}${Constants.ADD_PRODUCT}`;       
            break;
        case API_NAME.GET_ALL_PRODUCTS:
            apiURL = `${Constants.BASE_URL}${Constants.GET_ALL_PRODUCTS}`;
            break;
        case API_NAME.SEARCH_PRODUCTS:
            apiURL = `${Constants.BASE_URL}${Constants.PRODUCT_SEARCH}`;
            break;
        default:
            break;
    }
    return apiURL;
}