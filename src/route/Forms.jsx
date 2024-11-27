// import { useForm} from "react-hook-form";
// import {yupResolver} from "@hookform/resolvers/yup"
// import * as yup from "yup";
// export const Forms = () => {
   
//     const onSubmit =(data)=>{
//         console.log(data);
//     }
//     const schema=yup.object().shape({
//         fullname: yup.string().required("please give ur full name"),
//         email:yup.string().email().required("write proper email address"),
//         age: yup.number().integer().positive().min(18).required("write proper age"),
//         password:yup.string().min(4).max(18).required("it is required"),
//         confirmpassword:yup.string().oneOf([yup.ref("password"),null],"password doesn't match").required("it is compulsory"),
//     })
//     const {register, handleSubmit, formState:{errors}} = useForm({
//         resolver:yupResolver(schema)}
//     );
//     return (
//         <div className="flex justify-center items-center min-h-screen">
//         <form className="max-w-md w-full flex flex-col space-y-4 p-6 bg-white shadow-md rounded"
//         onSubmit={handleSubmit(onSubmit)}>
//             <input
//                 className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 type="text"
//                 placeholder="Full name..."
//                 {...register("fullname")}
//             />
//             {errors.fullname?.message}
//             <input
//                 className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 type="text"
//                 placeholder="Email..."
//                 {...register("email")}
//             />
//             {errors.email?.message}
//             <input
//                 className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 type="text"
//                 placeholder="Age..."
//                 {...register("age")}
//             />
//             {errors.age?.message}
//             <input
//                 className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 type="password"
//                 placeholder="Password..."
//                 {...register("password")}
//             />
//             {errors.password?.message}
//             <input
//                 className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 type="password"
//                 placeholder="Confirm password..."
//                 {...register("confirmpassword")}
//             />
//             {errors.confirmpassword?.message}
//             <input
//                 className="p-3 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 type="submit"
//                 value="Submit"
//             />
//         </form>
//         </div>
//     );
// };
