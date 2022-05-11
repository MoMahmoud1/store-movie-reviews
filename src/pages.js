import React from "react";
import { Link } from "react-router-dom";
import image from "./1.jpg";

// function Header(props){
//     return(
//       <header>
//         <div id ="header">
//         <h1>{props.name} Movies Reviews</h1>
//         </div>
//       </header>
//     );
//   }
  
  
//   function Main(props){
//     return(
//       <main>
//         <div id="head">
//         <p>The Most {props.adjective} Movies Reviews Wepsite</p>
//         </div>
//         <img src={image} alt="site logo "/>
//         <ul style={{textAlign: "left"}}>
//           {props.movies.map((moive)=>(
//               <li key={moive.id}> {moive.title}</li>
  
//           ))}
//         </ul>
//       </main>
//     );
//   }
  
  
//   function Footer(props){
//     return(
//       <footer>
//         <p>CopyRight {props.year}</p>
//       </footer>
//     );
//   }
//   const movies =[
//     "moive1",
//     "movie2",
//     "movie3"
//   ];
//   const moiveObject = movies.map((moive, i) =>({id: i, title: moive}));
  




export function Home(){
    return(
        <div>
       {/* <Header name="MO"/>
       <Main adjective = "Amazing" movies = {moiveObject}/>
       <Footer year = {new Date().getFullYear()} /> */}
        <nav>
            <Link to = "reviews"> Reviews</Link>
        </nav>
        </div>

    );
}
export function Reviews(){
    return(
        <div>
            <nav>
                {/* <Link to="movie reviews ">Home</Link>
                <Link to = "submit movie reviews"> Reviews</Link> */}
                <h1>Reviews</h1>
            </nav>
        </div>

    )
}