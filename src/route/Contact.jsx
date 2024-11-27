  
//   export const Contact =()=>{
//     return(
//         <div>
//             <h1>
//                 this is Contact page
//             </h1>
//         </div>
//     )
//   }

//react-query library
// import { useQuery } from "@tanstack/react-query";
// import Axios from "axios";
// export const Contact =()=>{
//     const { data:catData, isLoading,isError,refetch } = useQuery({
//      queryKey:["cat"],
//      queryFn:()=>{
//         return Axios.get("https://catfact.ninja/fact").then((res)=>res.data)
//      }   
//     })
//     if(isLoading){
//         return <h1>Loading.....</h1>
//     }
//     if(isError){
//         return<h1>sorry, there was an error while fetching</h1>
//     }
//     return(
//         <div>
//             <h1>this is contact page <p>{catData?.fact}</p> </h1>
//             <button onClick={refetch}>Update catfact</button>
//         </div>
//     )
// }
//----------------------------------------------------------------------------
// import { useContext } from "react";
// import { AppContext } from "../App";
// export const Contact=()=>{
//     const {username} =useContext(AppContext);
//     return(
//         <div>
//               <h1>this is Contact page and username is :{username}</h1>
//         </div>
//     )
// }