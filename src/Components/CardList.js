import React from "react";
import Card from './Card';

const  CardList = ({movies}) => {
        return(
            <>
             <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
            {movies.map(({title,description,poster,url,directed_by,produced_by},index)=>{
                return <Card name={title} description={description}  key={index} poster={poster} url={url} produced_by={produced_by} directed_by={directed_by}/>
             })}
             </div>
                </>
        )
}

export default CardList;