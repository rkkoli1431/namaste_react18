
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () =>{

    const [listOfRestaurant,setOfListOfRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant ,setFilteredRestaurant]= useState([]);

    // Whenever state varibles updated , react triggers a reconciliation cycle (re-renders the component)

    console.log("Body Rendered");

    useEffect(()=>{
        fetchData();
        console.log("Use Effect");
    },[]);

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        
        console.log(json);
        // console.log(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setOfListOfRestaurant(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    if(listOfRestaurant.length === 0){
        return <Shimmer/>
    }
    return(
        <div className="body">
            <div className="filter">
            <div className="search">
                <input type="text" className="serch-box" value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                />

                <button onClick={()=>{
                    // Fitered Search Restaurant
                    console.log(searchText);
                    const filteredRestaurant = listOfRestaurant.filter((res)=>
                        // res.info.name.includes(searchText)
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestaurant(filteredRestaurant)
                }}>Search</button>
            </div>

            <button className="filter-btn" onClick={()=>{
                const filterdList = listOfRestaurant.filter((res)=> res.info.avgRating > 4.5);
                setOfListOfRestaurant(filterdList);
            }}>Top Rated Restaurant</button>
        
            </div>
            <div className="res-container">
            {
                filteredRestaurant.map((restaurant)=>(
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))
            }
            </div>
        </div>
    );
};

export default Body;