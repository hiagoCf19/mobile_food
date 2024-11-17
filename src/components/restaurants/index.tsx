import { FlatList } from "react-native";
import { useState, useEffect } from "react";
import RestaurantsItem from "./horizontal";
export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}
const Restaurants = () => {
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
    <FlatList
      horizontal
      data={restaurants}
      renderItem={({ item }) => <RestaurantsItem item={item} />}
      contentContainerClassName="gap-4 px-4"
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Restaurants;
