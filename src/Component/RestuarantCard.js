
import { CDN_URL } from "../Utils/constants";
const RestuarantCard=(props)=>{
    console.log(props)
    const {resData}=props;
    console.log(resData)
    
    const {cloudinaryImageId,name,cuisines,avgRating,areaName,}=resData?.info;
    return(
        
        <div className="m-4 p-4 w-[265px] rounded-lg bg-gray-100 hover:bg-gray-200 truncate" >
            <img
            className="rounded-lg"
            alt="res-logo"
            src={CDN_URL+
            cloudinaryImageId
            }/>
             <h3 className="font-bold py-4 text-lg">{name}</h3>
             <h4>{cuisines.join(",")}</h4>
             <h4>{avgRating}</h4>
             <h4>{areaName}</h4>
        </div>
       
    );
};
// Higher Order Component

// input =>RestaurantCard=> Restaurant Card promoted

// export const withPromotedLabel =(RestaurantCard) => {
//     return (props)=>{
//       return (
//         <div>
//           <label>Promoted</label>
//           <RestaurantCard {...props}/>
//         </div>
//       )
//     }
// }
export default RestuarantCard;