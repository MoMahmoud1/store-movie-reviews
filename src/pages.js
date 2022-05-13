import React from "react";
import { Link } from "react-router-dom";
import image from "./1.jpg";

function Header(props){
    return(
      <header>
        <div id ="header">
        <h1>{props.name} Movies Reviews Website</h1>
        </div>
        <br></br>
        <br></br>
      </header>
    );
  }
  
  
  function Main(props){
    return(
      <main>
        <div id="head">
        <p>The Most {props.adjective} Movies Reviews Wepsite</p>
        </div>
        <img src={image} alt="site logo "/>
        <ul style={{textAlign: "left"}}>
          {props.movies.map((moive)=>(
              <li key={moive.id}> {moive.title}</li>
  
          ))}
        </ul>
      </main>
    );
  }
  
  
  function Footer(props){
    return(
      <footer>
        <p>CopyRight {props.year}</p>
      </footer>
    );
  }
  const movies =[
    "moive1",
    "movie2",
    "movie3"
  ];
  const moiveObject = movies.map((moive, i) =>({id: i, title: moive}));
  




export function Home(){
    return(
        <div className="App">
       <Header name="MO"/>
       <div id="nav">
            <Link to = "reviews"> Reviews</Link>
        </div>
       <Main adjective = "Amazing" movies = {moiveObject}/>
       
       <Footer year = {new Date().getFullYear()} />
     
        </div>

    );
}

function Form(){
  return(
        <div id="uplode">
             <h3> add new movie rate</h3>
          <form method="get">
             
          <input type={"file"} name={"file"} accept={".jpg,.png,.jpeg"} required></input>
          
          <label for={"name"} >Name</label>
          <input type={"text"} required></input>


          <label for={"rate"} >Rate</label>
          <input type={"text"} required></input>











          </form>



        </div>
  );

}

export function Reviews(){
    return(
        <div>
            <div id="nav1">
                <Link to="/">Home</Link>
                <Form/>
            </div>
        </div>

    )
}