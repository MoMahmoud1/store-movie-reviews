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

export function Home1(){
    return(
        <div className="App">
       <Header name="MO"/>
       <div id="nav">
            <Link to="/">Home</Link>
        </div>
        <div id="nav2">
          <Link to = "reviews"> Reviews</Link>
        </div>
          <Main adjective = "Amazing" />
          <Footer year = {new Date().getFullYear()} />
        </div>

    );
}

function Form(){
  return(
        <div id="uplode">
            <h3> add new movie rate</h3>
            <form method="get" id ="form1">
              
            <input type={"file"} name={"file"} accept={".jpg,.png,.jpeg"} required></input><br></br>
            
            <label for={"name"} >Name</label>
            <input type={"text"} required></input><br></br>


            <label for={"rate"} >Rate</label>
            <input type={"text"} required></input><br></br>
            <input type={"submit"} value={"sumbit"}></input>
            </form>



        </div>
  );

}

export function Reviews(){
    return(
        <div>
            <div id="nav1">
                <Link to="/">Home</Link>
            </div>
            <Form/>
        </div>

    )
}

export default function Movie({
  Title,
  Poster,
  Released,
  Actors,
  Rating,
  onRemove = (f) => f,
}) {


  return (
    <div >
      <div >
        <img
          className="poster"
          src={"./images/" + Poster}
          alt={Title}
          width={400}
          height={400}
        />
      </div>
      <div >
        <div>
          <h2>Movie Name: {Title}</h2>
        </div>
        <div>
          <p> Released: {Released}</p>
        </div>
        <div>
          <p>
            Actors :{Actors[0]} ,{Actors[1]} ,{Actors[2]}
            and {Actors[3]}
          </p>
        </div>
        <div>
          <p>Rating : {Rating}</p>
        </div>
      </div>
      <div >
        <button
          className="delete"
          onClick={() => {
            onRemove(Title);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
const initialFormData = Object.freeze({
  Title: "",
  Rating: "",
  Released: "",
  Actors: "",
  Poster: "",
});

export function Home2({ movies = [], onRemoveMovie = (f) => f }){

    return(
      <>
      <Home1/>
      <div>
        {movies.map((movie,key) =>(
          <Movie
          key={key}
          Title={Movie.Title}
          Actors={movie.Actors}
          Poster={movie.Poster}
          Rating={movie.Rating}
          Release={movie.ReleaseD}
          onRemove={onRemoveMovie}
        ></Movie>

        ))}

      </div> 
      </>

    );
}

