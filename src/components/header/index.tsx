import { View, Pressable, Text } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
const Header = () => {
  return (
    <View className="w-full flex flex-row  items-center justify-between">
      <Pressable className="w-10 h-10 bg-white rounded-md flex justify-center items-center">
        <Ionicons name="menu" size={20} color="#121212" />
      </Pressable>

      <View className="flex flex-col items-center justify-center">
        <Text className="text-center text-sm text-slate-800 ml-3">
          Localização
        </Text>

        <View className="flex flex-row items-center gap-1">
          <Feather name="map-pin" size={16} color={"#FF0000"} />
          <Text className="text-md font-bold">Belo Horizonte</Text>
        </View>
      </View>

      <Pressable className="w-10 h-10 bg-white rounded-md flex justify-center items-center">
        <Feather name="bell" size={20} color="#121212" />
      </Pressable>
    </View>
  );
};

export default Header;
