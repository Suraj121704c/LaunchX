import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: "row",
    height: hp(6),
    marginTop: hp(3),
    marginLeft: wp(9),
    marginRight: wp(9),
    margin: hp(1),
  },

  image: {
    width: wp(50),
    height: hp(20),
    resizeMode: "contain",
    margin: hp(3),
  },

  buttonStyle: {
    backgroundColor: "#7DE24E",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: hp(6),
    alignItems: "center",
    borderRadius: wp(2),
    marginLeft: wp(9),
    marginRight: wp(9),
    marginTop: hp(3),
    marginBottom: hp(3),
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: hp(1.6),
    fontSize: hp(2),
  },
  inputStyle: {
    flex: 1,
    color: "white",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dadae8",
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  successTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    padding: 30,
  },
  registerTextStyle: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    padding: 10,
  },
  downAlert: {
    color: "red",
    fontWeight: "bold",
  },
});
