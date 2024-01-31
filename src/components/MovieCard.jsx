import React from "react";
import { Link } from "react-router-dom";
function MovieCard({ movie }) {
  console.log(movie);
  const ImageNotFound =
    "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg";

  return (
    <div className="sm:w-[230px] w-1/2 bg-white  sm:mr-4 p-1  sm:p-5 sm:h-auto  box-border rounded-lg mb-3">
      <div className="sm:w-12/12 rounded-md h-[240px] mx-auto flex justify-center items-center overflow-hidden"><Link to={`/movie/${movie.show.id}`}>
        <img
          className=" w-11/12  h-full rounded-lg hover:scale-110 transition-all duration-150 link"
          src={
            movie.show.image?.medium ||
            movie.show.image?.original ||
            ImageNotFound
          }
          alt=""
        /></Link>
      </div>
      <div className="info w-full  h-[50px] px-2">
        <div className="heading flex justify-between  items-center">
          <p className="uppercase mt-1 text-[15px] font-semibold">
            {movie.show.name}
          </p>
          <span className="text-[12px]">{Math.round(movie.score*10)}/10</span>
        </div>
        <div className="language bg-pink-400 inline px-2 py-1 text-[10px] rounded-md text-white ml-auto mb-5">English</div>
      </div>
    </div>
  );
}

export default MovieCard;
