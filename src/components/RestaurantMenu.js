import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = ()=>{

    const [resInfo, setResInfo] = useState();

    useEffect(()=>{
        fetchMenu();
    },[]);
    
    const fetchMenu = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=656392&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
        console.log("hello");
        console.log(resInfo?.cards[2]?.card?.card?.info?.name);
    }
    // if(resInfo === null) <Shimmer/>;

    // console.log(resInfo?.cards[2]?.card?.card?.info?.name);
    const {name,cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    // const {itemCards} = resInfo?.cards?.card[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return  (
        <div className="menu">
            <h1>{name}</h1>
            <h3></h3>
            <ul>
                <li></li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
};
export default RestaurantMenu;