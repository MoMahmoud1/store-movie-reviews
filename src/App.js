import logo from './logo.svg';
import './App.css';
import image from "./1.jpg";

function Header(props){
  return(
    <header>
      <div id ="header">
      <h1>{props.name} Movies Reviews</h1>
      </div>
    </header>
  );
}


function Main(props){
  return(
    <main>
      <div id="head">
      <p>The most {props.adjective} Movies Reviews Wepsite</p>
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

function App() {
  return (
    <div className="App">
      <Header name="MO"/>
      <Main adjective = "amazing" movies = {moiveObject}/>
      <Footer year = {new Date().getFullYear()} />
      
    </div>
  );
}

export default App;
