// -----------------------------function component  ------------------------------


// import React from "react";
// import "./App.css";
// import MyFun from "./components/NewComponent";
// function App() {
//   return (
//     <div className="App">
//       <MyFun/>
//      <h1>TATA MOTORS PANTNAGAR </h1>
//     </div>
//   );
// }

// export default App;



// -----------------------------class component  ------------------------------
// import  React from "react";

// class App extends React.Component{
//   render() {
//     return( 
//       <div>
// Rohitab singh rana 
//       </div>
//     )
//   }
// }
// export default App;


// -----------------------------fat arrow component  ------------------------------


import Tata from "./components/OldComp";


const App =() => {
  return(
    <div>Hello Snadeep Singh
      <Tata name = 'MOHIT' place='delhi' />
      
       </div>
  )
}
export default App;