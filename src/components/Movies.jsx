import React, { useEffect } from "react";
import fetchMovieData from "../api/FetchData";

import MovieCard from "./MovieCard";
import { useContext } from "react";
import { context } from "../context/Context";

function Movies() {
        const { allMovies,
          setAllMovies,
          loading,
          setLoading,
          error,
          setError} =useContext(context);
        
   

    console.log(loading);
    useEffect(()=>{
        setLoading(true)
       fetchMovieData()
       .then((resp)=>{
        setLoading(false)
        return resp.json()
       }).then((resp)=>{
        setAllMovies(resp)
       })
       .catch((error)=>{
        setLoading(false)
        console.log(error);
       })
    },[])
  
  return <div className="w-full bg-black px-2 py-2  flex justify-center  items-center flex-wrap">

  {allMovies.length>0 && 
allMovies.map((m)=>{
    return <MovieCard movie={m}/>
})}
  </div>;
}
export default Movies;
