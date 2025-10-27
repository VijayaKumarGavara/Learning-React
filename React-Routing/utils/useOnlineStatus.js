import { useState, useEffect } from "react";
export default function useOnlineStatus(){
    const [onlineStatus, setOnlinStatus]=useState(true);

    useEffect(()=>{
        window.addEventListener("online", ()=>{
            setOnlinStatus(true);
        })
        window.addEventListener("offline", ()=>{
            setOnlinStatus(false);
        })
    },[]);
    return onlineStatus;
};