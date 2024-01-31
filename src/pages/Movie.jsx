import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { context } from "../context/Context";

function Movie() {
  const ImageNotFound =
    "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg";
  const id = useParams();
  const { allMovies } = useContext(context);
  let currentM = {};
  for (let i = 0; i < allMovies.length; i++)
    if (allMovies[i].show.id == Number(id["23"])) {
      currentM = allMovies[i];
      break;
    }
  return (
    <div className="w-full flex justify-center items-center  bg-black h-[500px]">
      <div className="sm:w-10/12 w-full flex bg-white sm:px-5 mt-4 sm:h-[400px] p-3 flex-wrap rounded-lg">
        <div className="img sm:w-2/5 w-full bg-green-200 flex justify-center items-center sm:h-full h-[400px]">
          <img
            src={
              currentM.show.image?.medium ||
              currentM.show.image?.original ||
              ImageNotFound
            }
            alt=""
            className="w-full sm:h-full rounded-md h-[400px]"
          />
        </div>
        <div className="info sm:w-3/5 w-full p-4">
          <div className="uppercase text-3xl font-bold flex space-x-2 justify-between items-center bg-white">
            
            <span>{currentM.show.name}</span>
            <p className="">
              {currentM.show.genres.map((g) => {
                return (
                  <span className="px-2 py-[2px] rounded-sm  mr-3 text-[12px]">
                    {g}
                  </span>
                );
              })}
            </p>
          </div>

          <p>Language: <span className="ml-2">{currentM.show.language}</span></p>
          <p>{`${currentM.show.summary}`}</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
