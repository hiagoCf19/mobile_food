import { ScrollView, View } from "react-native";
import Header from "../components/header";
import Constants from "expo-constants";
import Banner from "../components/banner";
import Search from "../components/search";
import Section from "../components/section";
import TredingFoods from "../components/tranding";
import Restaurants from "../components/restaurants";
import RestaurantVerticalList from "../components/list";

const statusbarHeigth = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusbarHeigth + 8 }}>
        <Header />
        <Banner />
        <Search />
      </View>
      <Section
        name="Comidas em alta"
        label="Veja mais "
        action={() => console.log("Clicou no veja mais")}
        size="text-2xl"
      />
      <TredingFoods />

      <Section
        name="Famosos no devFood's"
        label="Veja todos"
        action={() => console.log("Clicou no veja mais")}
        size="text-xl"
      />
      <Restaurants />
      <Section
        name="Restaurantes"
        label="Veja todos"
        action={() => console.log("Clicou no veja mais")}
        size="text-xl"
      />
      <RestaurantVerticalList />
    </ScrollView>
  );
}
