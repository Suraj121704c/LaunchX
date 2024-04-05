import React, { useState, createRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";


// user defined imports
import { logo } from "../../../utils/images";
import { useNavigation } from "@react-navigation/native";
import { Route } from "../../../navigation/constants";
import { registerValidation } from "../../../validation/register";
import { registerAction } from "../../../redux/actions/loginaction";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./stylest";
import { Lodaer } from "../../../components/Loader/Loader";

const SignUp = () => {
  const dispatch = useDispatch<any>();
  const [textFields, setTextFields] = useState<any>({
    name: "",
    email: "",
    password: "",
  });
  const { isLoggedIn, isLoading, isError } = useSelector(
    (state: any) => state.auth
  );

  const [validationError, setValidationError] = useState<any>({
    name: "",
    email: "",
    password: "",
  });

  const emailInputRef = createRef();
  const passwordInputRef = createRef();
  const navigation = useNavigation<any>();

  const handleOnChangeText = (value: string, fieldName: string) => {
    setTextFields({ ...textFields, [fieldName]: value });
  };

  const register = () => {
    const validation = registerValidation(textFields);
    if (validation === true) {
      setValidationError({
        name: "",
        email: "",
        password: "",
      });
      dispatch(registerAction(textFields));
    } else {
      setValidationError(validation);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <Lodaer visible={isLoading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image source={logo} style={styles.image} />
        </View>
        <View style={{ alignItems: "center" }}>
          {validationError ? (
            <Text style={styles.downAlert}>
              {validationError.name ||
                validationError.email ||
                validationError.password}
            </Text>
          ) : null}
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value={textFields.name}
              onChangeText={(value: string) => {
                handleOnChangeText(value, "name");
              }}
              underlineColorAndroid="#f000"
              placeholder="Enter Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value={textFields.email}
              onChangeText={(value: string) => {
                handleOnChangeText(value, "email");
              }}
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value={textFields.password}
              onChangeText={(value: string) => {
                handleOnChangeText(value, "password");
              }}
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              blurOnSubmit={false}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={register}
          >
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(Route.Login)}>
            <Text style={styles.registerTextStyle}>Go back ?</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignUp;


