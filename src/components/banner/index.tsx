import { View, Pressable, Text, Image } from "react-native";
import PagerView from "react-native-pager-view";
const Banner = () => {
  return (
    <View className="w-full h-36 md:h-68 rounded-2xl mt-5 mb-4 ">
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={8}>
        <Pressable
          className="w-full h-36 rounded-2xl"
          key="1"
          onPress={() => console.log("clicou no slide 1")}
        >
          <Image
            source={require("../../assets/banner2.png")}
            className="w-full h-36 md:h-60 rounded-2xl"
          />
        </Pressable>
        <Pressable
          className="w-full h-36 rounded-2xl"
          key="2"
          onPress={() => console.log("clicou no slide 2")}
        >
          <Image
            source={require("../../assets/banner1.png")}
            className="w-full h-36 md:h-60 rounded-2xl"
          />
        </Pressable>
      </PagerView>
    </View>
  );
};

export default Banner;
