import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Details = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")
  const [deptName, setDeptName] = useState("")


  useEffect(() => {
    getDataName();
    getDataDeptName();
    getDataEamil();
    getDataPassword();
  }, []);


  const getDataName = () => {
    try {
      AsyncStorage.getItem("name").then((value) => {
        setName(value);
      });
    } catch (error) {
      Alert.alert(error);
    }
  };

  const getDataDeptName = () => {
    try {
      AsyncStorage.getItem("deptName").then((value) => {
        setDeptName(value);
      });
    } catch (error) {
      Alert.alert(error);
    }
  };

  const getDataEamil = () => {
    try {
      AsyncStorage.getItem("email").then((value) => {
        setEmail(value);
      });
    } catch (error) {
      Alert.alert(error);
    }
  };
  const getDataPassword = () => {
    try {
      AsyncStorage.getItem("password").then((value) => {
        setPassword(value);
      });
    } catch (error) {
      Alert.alert(error);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 14 }}>
          Get Data From AsyncStorages in Login Screen!
        </Text>
      </View>
      <View style={{ marginTop: 200 }}>
        <View style={{ flexDirection: "row", marginLeft: 30 }}>
          <Text style={{ marginTop: 10, color: "red" }}>Name:</Text>
          <Text style={{ marginTop: 10, color: "blue", marginLeft: 30 }}>
            {name}
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 30 }}>
          <Text style={{ marginTop: 10, color: "red" }}>Department:</Text>
          <Text style={{ marginTop: 10, color: "blue", marginLeft: 30 }}>
            {deptName}
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 30 }}>
          <Text style={{ marginTop: 10, color: "red" }}>Email:</Text>
          <Text style={{ marginTop: 10, color: "blue", marginLeft: 30 }}>
            {email}
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 30 }}>
          <Text style={{ marginTop: 10, color: "red" }}>Password:</Text>
          <Text style={{ marginTop: 10, color: "blue", marginLeft: 10 }}>
            {password}
          </Text>
        </View>
      </View>
      {/* <TouchableOpacity
        style={{
          width: 100,
          height: 34,
          backgroundColor: "red",
          borderRadius: 20,
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Text style={{ color: "#FFF" }}>Details</Text>
      </TouchableOpacity> */}
    </KeyboardAvoidingView>
  );
};

export default Details;
