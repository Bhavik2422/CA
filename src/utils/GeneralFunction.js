import * as session from '../asyncStorage/sessionAsync';

export const getKey = (id=-1) => {

    let key = "";
    if(id!=null && id>=0){
        key = key.concat(id).concat(Math.random())
    }else{
        key = key.concat(Math.random())
    }
    return key;

}

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

export const logoutFromApp  =()=>{
    session.setPrefData(session.SESSION_NAME.USER_LOGIN, "",(res, data)=>{
       
    })
}