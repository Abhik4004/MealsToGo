import { RestaruntScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
export default function App() {
  return (
    <>
      <RestaruntScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
