import { Image, Pressable, Text, View } from "react-native";
import { RestaurantsProps } from "../../restaurants";
import { Ionicons } from "@expo/vector-icons";
const RestaurantItem = ({ item }: { item: RestaurantsProps }) => {
  return (
    <Pressable className="flex flex-row items-center justify-start gap-2">
      <Image source={{ uri: item.image }} className="w-20 h-20 rounded-full" />
      <View className="flex gap-2">
        <Text className="font-semibold">{item.name}</Text>
        <View className="flex flex-row items-center gap-1">
          <Ionicons name="star" size={14} color="#ca8a04" />
          <Text className="text-sm">4.8</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RestaurantItem;
