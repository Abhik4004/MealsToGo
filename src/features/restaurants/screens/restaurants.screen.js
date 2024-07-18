import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info.component";
// import Search from "./src/components/SearchBar";
import { Searchbar } from "react-native-paper";
const isAndroid = Platform.OS === "android";
export const RestaruntScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.search}>
        {/* <Search /> */}
        <Searchbar />
      </View>
      <View style={style.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight },
  search: { padding: 16, backgroundColor: "green" },
  list: { flex: 1, padding: 16, backgroundColor: "beige" },
});
