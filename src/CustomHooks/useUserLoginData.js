import React, { useEffect, useState } from "react";
import * as session from '../asyncStorage/sessionAsync'

const useUserLoginData = () => {
    
    const [userData, setUserData] = useState({})

    useEffect(()=>{
        // console.log("1");
        async function getLoggedInUserData(){
            // console.log("3");
            const data = await session.getPrefDataSync(session.SESSION_NAME.USER_LOGIN)
            if(data != null && Object.keys(data).length>0){
                // console.log("4");
                setUserData(JSON.parse(data));
            }else{
                // console.log("5");
                setUserData({})
            }
        }
        // console.log("2");
        getLoggedInUserData();
        // console.log("2.1");
    },[])

    return {userData};
}

export default useUserLoginData;