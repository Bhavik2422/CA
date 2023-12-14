import * as session from '../asyncStorage/sessionAsync';

/**
 * This is common function for getting unique key for repetative views.
 * 
 * @param {id} Int index/item-id of that repeatative view
 * @returns unique key in String
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
 * @param {email} String 
 * @returns true/false based on reg-ex email validation
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