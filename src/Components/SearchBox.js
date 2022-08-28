import React from "react";
import 'tachyons';
const  SearchBox = ({searchMovie}) => {
        return(
            <div className="pa3">
                <input className="pa3 ba  bg-lightest-red" type='search' placeholder='Search Movies' onChange={searchMovie}/>
            </div>
        )
}

export default SearchBox;