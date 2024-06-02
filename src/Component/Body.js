import RestuarantCard from "./RestuarantCard";

import { useEffect, useState } from "react";
import Shimmon from "./Shimmon";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const [listofrest, Setlistofrest] = useState([]);
  const [searchtext, setsearchtext] = useState("");
  const [filterRes, setfilterRes] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
   
    const json = await data.json();
    console.log(json);
    // Optional Chaining
    Setlistofrest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log(filterRes)
const onlineStatus=useOnlineStatus()
if (onlineStatus === false)
  return (
    <h1>
      Looks like you're offline!! Please check your internet connection;
    </h1>
  );
return listofrest.length === 0 ? (
  <Shimmon />
) : (
  <div className="body">
    <div className="filter flex">
      <div className="search m-4 p-4">
        <input
          type="text"
          className="border border-solid border-black"
          value={searchtext}
          onChange={(e) => {
            setsearchtext(e.target.value);
          }}
        />
        <button className="px-4 py-1 m-4 bg-green-100 rounded-lg"
          onClick={() => {
            const filter = listofrest.filter((res) =>
              res.info.name.toLowerCase().includes(searchtext.toLowerCase())
            );
            setfilterRes(filter);
          }}
        >
          search
        </button>
      </div>
      <div className="search m-4 p-4 flex items-center">
      <button
        className="px-4 py-1 bg-gray-100 rounded-lg"
        onClick={() => {
          const filterlist = listofrest.filter(
            (res) => res.info.avgRating > 4.1
          );
          setfilterRes(filterlist);
        }}
      >
        TopRatedRestuarant
      </button>
      </div>
      
    </div>
    <div className="flex flex-wrap">
      {filterRes.map((restuarant) => (
         <Link key={restuarant.info.id} to={"/restuarants/" + restuarant.info.id}> 
       
          <RestuarantCard resData ={restuarant}/> 
        </Link>
      ))}
    </div>
  </div>
);
}
export default Body;
