import React, { createContext, useState } from 'react'

const userStatus = createContext();
const UserStatus = ({children}) => {
    const [user,setUser]=useState({
        status:true,
        type:"Admin"
    })
    const setUserData=data=>setUser(data);
  return (
    <userStatus.Provider value={{user,setUserData}}>
       {children}
    </userStatus.Provider>
  )
}

export {userStatus,UserStatus}