
// import {useQuery} from "@tanstack/react-query";
// import Axios from "axios";
// export const useGetCat=()=>{
//     const { data, isLoading:isCatLoading, error:isError,refetch } = useQuery({
//         queryKey:["cat"],
//         queryFn:()=>{
//            return Axios.get("https://catfact.ninja/fact").then((res)=>res.data)
//         }   
//        })
//        const refetchData=()=>{
//         alert("data refetched");
//         refetch();
//        }

//     return {data,refetchData,isCatLoading, isError}
    
// }