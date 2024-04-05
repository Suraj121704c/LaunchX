import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  header: {
    height: hp(6),
    position: "absolute",
    width: wp(70),
    top: hp(90),
    right: wp(15),
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: wp(2),
  },

  headerText: {
    color: "#ffff",
    fontSize: hp(2.8),
  },

  image: {
    height: hp(100),
    width: wp(100),
  },
});
