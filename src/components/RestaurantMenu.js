import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = ()=>{
    const  [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=10576&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };
    const {name, cuisines,costForTwoMessage} = resInfo?.cards[2].card?.card?.info;
    return resInfo === null ? (
    <Shimmer/>
    ):(
        <div>
            <h1>{name} </h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            {/* <h3>{resInfo?.cards[2].card?.card?.info?.costForTwoMessage}</h3> */}
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Pizza</li>
                <li>Coffee</li>
            </ul>
        </div>
    );
};
export default RestaurantMenu;