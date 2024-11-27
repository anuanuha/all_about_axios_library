// import React from "react";
// import { useGetCat } from "./useGetCat.tsx"
// export const Cat =()=>{
//     const {data, isCatLoading, refetchData,isError}= useGetCat();
//     if(isCatLoading){
//         return <h1>Loading.....</h1>
//     }
//     if(isError){
//         return<h1>sorry, there was an error while fetching</h1>
//     }
//     return(
//         <div>
//             <h1>this is contact page <p>{data?.fact}</p> </h1>
//             <button onClick={refetchData}>Update catfact</button>
//         </div>
//     )
// }