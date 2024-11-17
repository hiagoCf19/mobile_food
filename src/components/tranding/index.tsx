import { FlatList } from "react-native";
import { useState, useEffect } from "react";
import CardHorizontalFood from "./food";
export interface FoodProps {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
}
const TredingFoods = () => {
  const [foods, setFoods] = useState<FoodProps[]>([]);
  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.0.124:3000/foods");
      const data = await response.json();
      setFoods(data);
      console.log(data);
    }
    getFoods();
  }, []);
  return (
    <FlatList
      horizontal
      data={foods}
      renderItem={({ item }) => <CardHorizontalFood food={item} />}
      contentContainerClassName="gap-4 px-4"
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default TredingFoods;
