import logo from './logo.svg';
import './App.css';

import React from "react";
import { Home, Reviews } from './pages';
import { Routes, Route } from "react-router-dom";


// function Header(props){
//   return(
//     <header>
//       <div id ="header">
//       <h1>{props.name} Movies Reviews</h1>
//       </div>
//     </header>
//   );
// }


// function Main(props){
//   return(
//     <main>
//       <div id="head">
//       <p>The Most {props.adjective} Movies Reviews Wepsite</p>
//       </div>
//       <img src={image} alt="site logo "/>
//       <ul style={{textAlign: "left"}}>
//         {props.movies.map((moive)=>(
//             <li key={moive.id}> {moive.title}</li>

//         ))}
//       </ul>
//     </main>
//   );
// }


// function Footer(props){
//   return(
//     <footer>
//       <p>CopyRight {props.year}</p>
//     </footer>
//   );
// }
// const movies =[
//   "moive1",
//   "movie2",
//   "movie3"
// ];
// const moiveObject = movies.map((moive, i) =>({id: i, title: moive}));

// function Links (){
//   return(
//     <div>
//     <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="/Reviews" element={<Reviews />} />
//     </Routes>
//   </div>

//   );
// }

function App() {
  return (
  //   <div className="App">
  //     <Header name="MO"/>
  //     <Main adjective = "Amazing" movies = {moiveObject}/>
  //     <div>
  //   <Routes>
  //       <Route path="/" element={<Home />}/>
  //       <Route path="/Reviews" element={<Reviews />} />
  //   </Routes>
  // </div>
  //     <Footer year = {new Date().getFullYear()} />
  //   </div>
  
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>


  );

}

export default App;
