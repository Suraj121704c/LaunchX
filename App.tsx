import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, LogBox } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";

// user defined imports
import Navigator from "./src/navigation/navigator";
import store from "./src/redux/store";

//@ts-ignore
Text.defaultProps = Text.defaultProps || {};
//@ts-ignore
Text.defaultProps.allowFontScaling = false;
//@ts-ignore
TextInput.defaultProps = {
  ...(TextInput.defaultProps || {}),
  allowFontScaling: false,
};
LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#000" }}
        edges={["right", "left", "top"]}
      >
        <Provider store={store}>
          <Navigator />
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
