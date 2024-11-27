
// import Axios from "axios";
// import { useEffect, useState } from "react";


// function App() {
//             // fetch("https://catfact.ninja/fact")
//             // .then((res)=>res.json()).then((data)=>{
//             //   console.log(data);
//             // })
//             const [catFact,setcatFact] = useState("");
           

//             let handle=()=>{
//               Axios.get("https://catfact.ninja/fact").then((res)=>{
//                 setcatFact(res.data.fact);
//               });
//             }

//             useEffect(()=>{
//               handle();
//             },[]);
         
//   return (
//     <div>
//       <button onClick={handle}>generate a cat fact</button>
//       <p>{catFact}</p>
      
//     </div>
//   );
// }

// export default App;
//---------------------------------
// import Axios from "axios";
// import { useState } from "react";



// export const App =()=>{
//  const [name,setName] = useState("");
//  const [pridictAge, setPredictAge] =useState(0);
//   const fetchAge =()=>{
//     Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
//               setPredictAge(res.data);
//     })
//   }
//   return(
//  <div>
//   <input placeholder="enter the name.... ex anu" onChange={(event)=>{
//     setName(event.target.value)
//   }}></input><br></br>
//      <button onClick={fetchAge}>predict age</button>
//      <br></br>
//         <p>pridicted Age:{pridictAge?.age}</p>
//         <p>pridicted name:{pridictAge?.name}</p>
//         <p>pridicted count:{pridictAge?.count}</p>
//  </div>
//   )
// }


//-----------------------------------------------------------------------
// import Axios from "axios";
// import { useState } from "react";
// export const App=()=>{
//   const[generateExcuse, setGenerateExcuse]=useState("");
//   const excuseGenerator=(excuse)=>{
//     Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res)=>{
//       setGenerateExcuse(res.data[0].excuse);
//       })
//   }
//   return(
//     <div>
//       <button onClick={()=>excuseGenerator("developers")}>developers</button>
//       <button onClick={()=>excuseGenerator("office")}>office</button>
//       <button onClick={()=>excuseGenerator("family")}>collage</button>
//       <p>{generateExcuse}</p>
//     </div>
//   )
// }


//------------------------------------------------------------
//react-router-dom library

// import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
// import {Contact} from "./route/Contact"
// import {Mobile} from "./route/Mobile";
// import {Number} from "./route/Number";
//   return(
//     <div>
//          <Router>
//           {/* we can create seperate component also for navigation. */}
//            <Link to='/'>contact</Link><br></br>
//            <Link to='/mobile'>mobile</Link><br></br>
//            <Link to='/number'>number</Link>
//           <Routes>
//             <Route path="/" element={<Contact/>} />
//             <Route path="/mobile" element={<Mobile/>}/>
//             <Route path="/number" element={<Number/>}/>
//           </Routes>
//          </Router>
//     </div>
//   )
// }
//-------------------------------------------------------------
//example for prop drilling
// import { useState } from "react";
// export const App=()=>{
//     const [state,setState]=useState("hellow");
//     return(
//         <div>
//             <MiddleComponent  state={state}/>
//         </div>
//     )
// }
// export const MiddleComponent=(prop)=>{
//     return(
//         <div>
//             <ButtomComponent state={prop.state} />
//         </div>
//     )
// }
// export const ButtomComponent=(prop)=>{
//     return(
//         <div>
//             {prop.state}
//         </div>
//     )
// }
//-----------------------------------------
//EXAMPLE FOR prop drilling
// import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
// import {Contact} from "./route/Contact"
// import {Mobile} from "./route/Mobile";
// import {Number} from "./route/Number";
// import { useState } from "react";
// export const App =()=>{
//     const [username,setUsername] = useState("anu")
//   return(
//     <div>
//          <Router>
//           {/* we can create seperate component also for navigation. */}
//            <Link to='/'>contact</Link><br></br>
//            <Link to='/mobile'>mobile</Link><br></br>
//            <Link to='/number'>number</Link>
//           <Routes>
//             <Route path="/" element={<Contact/>} />
//             <Route path="/mobile" element={<Mobile username={username} />}/>
//             <Route path="/number" element={<Number username={username} setUsername={setUsername}/>}/>
//           </Routes>
//          </Router>
//     </div>
//   )
// }

//-----------------------------------------------------------------

//Implimenting context Api

// import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
// import {Contact} from "./route/Contact"
// import {Mobile} from "./route/Mobile";
// import {Number} from "./route/Number";
// import { useState, createContext} from "react";
// export const AppContext = createContext();
// export const App =()=>{
//     const [username,setUsername] = useState("anu")
    
//   return(
//     <div>
//         <AppContext.Provider value={{username,setUsername}}>
//          <Router>
//           {/* we can create seperate component also for navigation. */}
//            <Link to='/'>contact</Link><br></br>
//            <Link to='/mobile'>mobile</Link><br></br>
//            <Link to='/number'>number</Link>
//           <Routes>
//             <Route path="/" element={<Contact/>} />
//             <Route path="/mobile" element={<Mobile />}/>
//             <Route path="/number" element={<Number />}/>
//             <Route path="*" element={<h1>page not found</h1>}/>
//           </Routes>
//          </Router>
//          </AppContext.Provider>
//     </div>
//   )
// }
//---------------------------------------------------------------

//react-query library
// import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
// import {Contact} from "./route/Contact"
// import {Mobile} from "./route/Mobile";
// import {Number} from "./route/Number";
// import {QueryClient,QueryClientProvider} from "@tanstack/react-query";
// export const App =()=>{
//   const client = new QueryClient(
//     {defaultOptions:{
//       queries:{
//         refetchOnWindowFocus:false,
//       },
//     },
// });
//   return(
//     <div>
//       <QueryClientProvider client={client}>
//          <Router>
//           {/* we can create seperate component also for navigation. */}
//            <Link to='/'>contact</Link><br></br>
//            <Link to='/mobile'>mobile</Link><br></br>
//            <Link to='/number'>number</Link>
//           <Routes>
//             <Route path="/" element={<Contact/>} />
//             <Route path="/mobile" element={<Mobile/>}/>
//             <Route path="/number" element={<Number/>}/>
//           </Routes>
//          </Router>
//          </QueryClientProvider>
//     </div>
//   )
// }

//react-hook-form, yup, @hookform/resolver/yup library.
// import {Forms}  from "./route/Forms"
// export const App =()=>{
//   return(
//     <div>
//       <Forms/>
//     </div>
//   )
// }
//------------------------------------------------------
//normal hook use
// import { useState } from "react";
// export const App =()=>{
//   const [isVisible, setIsvisible]  = useState(false);
//   const onSetbutton=()=>{
//     setIsvisible(!isVisible);
//   }
//   return(
   
//     <div  className="flex flex-col justify-center items-center min-h-screen">
//        <button onClick={onSetbutton} className="border py-2 px-6 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg">
//         {isVisible?"Hide":"show"}
//        </button>
//        {isVisible && <h1>hidden text</h1>}
//     </div>
//   )
// }
//----------------------------------------------------
//using custom-hooks
// import { useToggle} from "./route/useToggle.tsx";
// export const App =()=>{
//   const [isVisible, onSetbutton] = useToggle()
//   const [isVisible2, onSetbutton2] = useToggle();
//   // const {state:isVisible,onSetbutton} = useToggle();
//   return(
   
//     <div  className="flex flex-col justify-center items-center min-h-screen">
//        <button onClick={onSetbutton} className="border py-2 px-6 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none shadow-lg">
//         {isVisible?"Hide":"show"}
//        </button>
//        {isVisible && <h1>hidden text</h1>}
//        <button onClick={onSetbutton2} className="border py-2 px-6 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none shadow-lg">
//         {isVisible2?"Hide":"show"}
//        </button>
//        {isVisible2 && <h1>hidden text</h1>}
//     </div>
//   )
// }

// custom-hook example-2
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import {Cat} from "./route/Cat.tsx"
// export const App=()=>{
//   const queryClient = new QueryClient();
//   return(
//     <QueryClientProvider client={queryClient}>
//     < Cat />
//   </QueryClientProvider>

//   )
// }
//--------------------------------------------------------------------------
// propTypes  library in react
import {Person} from "./route/Person.tsx"
 export const App=()=>{
  return(
            <div>
              <Person  name="anu" age={21} isMarried={false} friend={["anu","kavya","arun","drakshayini"]}/>
            </div>
  )
 }

