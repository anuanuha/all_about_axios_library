import { useState } from "react"

// export const Updatecontact=(props)=>{
//     const [newusername, setNewusername] = useState("")
//     return(
//         <div>
//             <input placeholder="enter the new username" onChange={(event)=>{
//                 setNewusername(event.target.value)
//             }}/>
//             <button onClick={()=>{
//                 props.setUsername(newusername);
//             }}>change username</button>

//             </div>
//     )
// }

import { useContext } from "react";
import { AppContext } from "../App";
export const Updatecontact=()=>{
    const [newUsername,setNewusername] = useState("");
    const {setUsername} = useContext(AppContext);
    return(
        <div>
                 <input placeholder="new username" onChange={(event)=>{
                    setNewusername(event.target.value);
                 }}></input>
                 <button onClick={()=>{
                    setUsername(newUsername)
                 }}>change username</button>
        </div>
    )
}