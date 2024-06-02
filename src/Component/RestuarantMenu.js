import { useParams } from "react-router-dom";
import Shimmon from "./Shimmon";
import useRestaurantMenu from "../Utils/useRestuarantMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";


const RestuarantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex,setShowIndex]=useState(null)

  //console.log(resInfo);
  // useEffect(()=>{
  //     fetchMenu();
  // },[])

  // const fetchMenu=async ()=>{
  //     const data=await fetch(MENU_API+resId)
  //     const json=await data.json()
  //     console.log(json)
  //     setResInfo(json.data)
  // }
  if (resInfo === null) return <Shimmon />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //console.log( resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories)
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold">
        {cuisines.join(", ")}-{costForTwoMessage}
      </p>
      {/* categories */}
      {categories.map((categories,index) => (
        <ResCategory
          key={categories?.card?.card?.title}
          data={categories?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestuarantMenu;
