import { ScrollView, View } from "react-native";
import Header from "../components/header";
import Constants from "expo-constants";
import Banner from "../components/banner";

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
      </View>
    </ScrollView>
  );
}
