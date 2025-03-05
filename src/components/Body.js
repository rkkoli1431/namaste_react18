
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () =>{

    const [listOfRestaurant,setOfListOfRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant ,setFilteredRestaurant]= useState([]);

    // Whenever state varibles updated , react triggers a reconciliation cycle (re-renders the component)

    console.log("Body Rendered");
    // console.log(listOfRestaurant);

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
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md w-full max-w-2xl mx-auto mt-24">
            {/* Search Box */}
            <div className="flex items-center space-x-2 w-full md:w-auto">
                <input 
                    type="text" 
                    className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />

                <button 
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    onClick={() => {
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurant.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}
                > Search</button>
            </div>

            {/* Top Rated Button */}
            <button 
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                onClick={() => {
                    const filterdList = listOfRestaurant.filter((res) => res.info.avgRating > 4.3);
                    setOfListOfRestaurant(filterdList);
                    console.log("avrageRating Click");
                }}
            >Top Rated Restaurants
            </button>
        </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {
                filteredRestaurant.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
             ))
            }
</div>

        </div>
    );
};

export default Body;