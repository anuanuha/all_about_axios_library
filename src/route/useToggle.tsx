import { useState } from "react";
export const useToggle=(initialValue=false)=>{
    const [state, setState]  = useState(initialValue);
    const onSetbutton=()=>{
       setState( (prev)=>!prev);
      }
    //return[state,onSetbutton];
    return[state,onSetbutton];

    
}