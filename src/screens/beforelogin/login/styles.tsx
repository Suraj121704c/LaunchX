import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
    alignContent: "center",
  },

  image: {
    width: wp(50),
    height: hp(20),
    resizeMode: "contain",
    margin: hp(3),
  },

  SectionStyle: {
    flexDirection: "row",
    height: hp(6),
    marginTop: hp(2),
    marginLeft: wp(9),
    marginRight: wp(9),
    margin: hp(2),
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
    marginTop: hp(2),
    marginBottom: hp(5),
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
  registerTextStyle: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    padding: 10,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },

  downAlert: {
    color: "red",
    fontWeight: "bold",
  },
});
