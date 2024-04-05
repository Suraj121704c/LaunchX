import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// export const styles = StyleSheet.create({
// header: {
//   height: hp(6),
//   backgroundColor: "green",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "space-around",
// },
// headerText: {
//   color: "#ffff",
//   fontSize: hp(2.8),
// },
// back: {
//   height: hp(4),
//   width: wp(5),
// },

// checkIamgeView: {
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "space-between",
//   borderWidth: wp(0.5),
//   borderColor: "#fff",
//   borderRadius: wp(2),
//   padding: wp(2),
// },

// checkimage: {
//   height: hp(4),
//   width: wp(6.5),
//   marginHorizontal: wp(2),
// },

// topbar: {
//   marginHorizontal: wp(5),
//   marginBottom: hp(1.5),
// },

// log: {
//   height: hp(4),
//   width: wp(8.5),
// },
// searchContainer: {
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "flex-start",
//   backgroundColor: "#e6e6e6",
//   borderRadius: wp(2),
//   paddingHorizontal: wp(3),
//   marginHorizontal: wp(3),
//   marginVertical: hp(2),
// },
// searchIcon: {
//   marginRight: wp(1),
//   height: hp(3),
//   width: wp(6.6),
// },
// input: {
//   flex: 1,
//   fontSize: hp(2.5),
//   color: "#000",
// },
// numberListView: {
//   marginTop: hp(2.5),
//   alignItems: "center",
//   padding: wp(5),
//   borderWidth: wp(0.5),
//   borderColor: "#fff",
//   borderRadius: wp(3),
//   width: wp(95),
//   marginLeft: wp(3),
// },
// numberText: {
//   fontSize: hp(2.1),
//   color: "#ffff",
//   fontWeight: "500",
// },

// numberText2: {
//   fontSize: hp(2),
//   color: "#b30000",
//   fontWeight: "500",
// },
// hashView: {
//   flexDirection: "row",
//   justifyContent: "space-between",
//   alignItems: "center",
//   width: wp(85),
// },

// hashView2: {
//   flexDirection: "row",
//   justifyContent: "space-between",
//   alignItems: "center",
//   width: wp(85),
//   marginTop: hp(1),
// },

// imagestyles: {
//   height: hp(5.05),
//   width: wp(10.8),
// },

// separator: {
//   height: 1,
//   backgroundColor: "#e6e6e6",
//   marginTop: hp(1.5),
//   width: wp(100),
// },
// separator2: {
//   height: 1,
//   backgroundColor: "#000",
//   marginTop: hp(1.5),
//   width: wp(90),
// },

// monthsView: {
//   position: "absolute",
//   backgroundColor: "#fff",
//   height: hp(14.5),
//   zIndex: 1,
//   paddingVertical: hp(1.5),
//   paddingHorizontal: wp(5),
//   width: wp(90),
//   borderRadius: wp(2),
//   right: wp(0),
//   top: hp(6),
//   shadowColor: "red",
//   shadowOffset: {
//     width: 0,
//     height: 2,
//   },
//   alignItems: "center",
// },

// monthsView2: {
//   position: "absolute",
//   backgroundColor: "#fff",
//   height: hp(46),
//   zIndex: 1,
//   paddingVertical: hp(1.5),
//   paddingHorizontal: wp(5),
//   width: wp(90),
//   borderRadius: wp(2),
//   right: wp(0),
//   top: hp(6),
//   shadowColor: "red",
//   shadowOffset: {
//     width: 0,
//     height: 2,
//   },
// },

// headerText2: {
//   color: "#000",
//   fontSize: hp(2.8),
//   marginTop: hp(1),
// },
// });

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },

  header: {
    width: "100%",
    height: hp(5),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
  },
  searchBox: {
    marginHorizontal: "20px",
    width: "94vw",
    marginTop: 18,
  },
  tasksContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  card: {
    backgroundColor: "#0000",
    borderRadius: 10,
    borderWidth : wp(1),
    borderColor : "#ffff",
    padding: 20,
    width: "100%",
    maxWidth: "280px",
    height: "320px",
    zIndex: -1,
    // width: screenWidth > 1024 ? '80%' : '90%',
  },
  image: {
    width: "100%",
    height: 150,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: "center",
  },
  heading: {
    fontWeight: "bold",
    paddingTop: 20,
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
  },
  picker: {
    height: 50,
    width: "45%",
    borderRadius: 6,
  },
  logoutButton: {
    position: "absolute",
    top: 1,
    right: 30,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "red",
  },
  logoutText: {
    color: "white",
    fontWeight: "bold",
  },

  topbar: {
    marginVertical: hp(1),
  },

  checkIamgeView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: wp(0.5),
    borderColor: "#fff",
    borderRadius: wp(2),
    padding: wp(2),
    width: "94vw",
  },

  monthsView2: {
    position: "absolute",
    backgroundColor: "#fff",
    height: hp(46),
    zIndex: 100,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(5),
    width: wp(90),
    borderRadius: wp(2),
    right: wp(0),
    top: hp(6),
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  headerText: {
    color: "#ffff",
    fontSize: hp(2.8),
  },

  checkimage: {
    height: hp(4),
    width: wp(6.5),
    marginHorizontal: wp(2),
  },

  monthsView: {
    position: "absolute",
    backgroundColor: "#fff",
    height: hp(14.5),
    zIndex: 1,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(5),
    width: wp(90),
    borderRadius: wp(2),
    right: wp(0),
    top: hp(6),
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    alignItems: "center",
  },

  headerText2: {
    color: "#000",
    fontSize: hp(2.8),
    marginTop: hp(1),
  },

  separator2: {
    height: 1,
    backgroundColor: "#000",
    marginTop: hp(1.5),
    width: wp(90),
  },

  hashView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp(85),
  },

  hashView2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp(85),
    marginTop: hp(1),
  },

  imagestyles: {
    height: hp(5.05),
    width: wp(10.8),
  },

  separator: {
    height: 1,
    backgroundColor: "#e6e6e6",
    marginTop: hp(1.5),
    width: wp(100),
  },
  numberText: {
    fontSize: hp(2.1),
    color: "#ffff",
    fontWeight: "500",
  },
});
