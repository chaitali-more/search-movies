import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import ErrorBoundry from "./ErrorBoundry";
class App extends Component{
constructor(){
    super();
    this.state = {
        movies: [],
        searchfield:'',
    }
}
 searchMovie = (event) =>{
    this.setState({searchfield:event.target.value})
}

componentDidMount(){
    fetch("https://www.fakerestapi.com/datasets/api/v1/movie-details-dataset.json")
    .then(response => response.json())
    .then(json => {this.setState({movies:json.data})})
}

render(){
    const {movies, searchfield} = this.state;
    const filteredArray = movies.filter((movies)=>{ 
        return movies.title.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (!movies.length)? <div className="loader"><img src="https://acegif.com/wp-content/uploads/loading-29.gif" width={120}/><h1>Loading ...</h1></div> :   
            <div className="tc">
           <div style={{display:"flex",justifyContent:"space-between", alignItems:"center",margin:"0px 2em",flexWrap:"wrap"}}>
           <h1>Search Movies</h1>
           <SearchBox searchMovie = {this.searchMovie}/>
           </div>
           
            <ErrorBoundry>
               <CardList movies={filteredArray}/>
            </ErrorBoundry>
            </div>
            
}
}
export default App;
