import { CDN_URL } from "../utils/constents";
import { motion } from "framer-motion";

const RestaurantCard = ({ resData }) => {
    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        cloudinaryImageId,
        sla,
        aggregatedDiscountInfo
    } = resData?.info;

    return (
        <motion.div 
            className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:scale-[1.05] hover:shadow-xl relative border border-gray-200"
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.2)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Discount Badge */}
            {aggregatedDiscountInfo?.header && (
                <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-lg">
                    {aggregatedDiscountInfo.header}
                </div>
            )}

            {/* Restaurant Image */}
            <img 
                className="w-full h-44 object-cover rounded-t-2xl"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId} 
            />

            {/* Restaurant Details */}
            <div className="p-5 flex flex-col gap-3 hover:shadow-indigo-500 hover:shodow-2xl hover:scale-105">
                <h3 className="text-lg font-semibold text-gray-900 ">{name}</h3>
                <p className="text-sm text-gray-500">{cuisines.join(", ")}</p>
                
                <div className="flex justify-between items-center text-sm font-medium">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-md text-xs">⭐ {avgRating}</span>
                    <span className="text-gray-600">⏳ {sla?.deliveryTime} mins</span>
                </div>

                <h4 className="text-gray-800 font-semibold">{costForTwo}</h4>
            </div>
        </motion.div>
    );
};

export default RestaurantCard;
