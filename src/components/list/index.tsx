import { Text, View } from "react-native";
import { useState, useEffect } from "react";
import { RestaurantsProps } from "../restaurants";
import RestaurantItem from "./item";
const RestaurantVerticalList = () => {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);
  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.0.124:3000/restaurants");
      const data = await response.json();
      setRestaurants(data);
      console.log(data);
    }
    getFoods();
  }, []);
  return (
    <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
      {restaurants.map((item) => (
        <RestaurantItem item={item} key={item.id} />
      ))}
    </View>
  );
};

export default RestaurantVerticalList;
