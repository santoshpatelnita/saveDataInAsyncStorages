// import React from "react";
// import { View, Text, TouchableOpacity } from "react-native";

// const Home = (props) => {
//   return (
//     <TouchableOpacity
//       style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
//     >
//       <Text>Home Screen</Text>
//       <TouchableOpacity
//         style={{
//           width: 100,
//           height: 34,
//           backgroundColor: "red",
//           borderRadius: 20,
//           marginTop: 10,
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//         onPress={() => props.navigation.navigate("Details")}
//       >
//         <Text style={{ color: "#FFF" }}>Home</Text>
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );
// };

// export default Home;

// import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

export default function Home(props) {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [deptName, setDeptname] = useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const displayData = async () => {
    if (email.length == 0 && password.length == 0) {
      alert("Please Fill all fields");
    } else {
      try {
        await AsyncStorage.setItem("name", name);
        await AsyncStorage.setItem("deptName", deptName);
        await AsyncStorage.setItem("email", email);
        await AsyncStorage.setItem('password',password)
        props.navigation.navigate("Details")
      } catch(error) {
        console.log(error)
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Image style={styles.tinyLogo} source={require("../Assets/logo2.jpeg")} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Please enter your name....."
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Please enter your dept....."
          placeholderTextColor="#003f5c"
          onChangeText={(dep) => setDeptname(dep)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Please enter your Email....."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Please enter your password...."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={() => displayData()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    {/* </View> */}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  inputView: {
    backgroundColor: "#ccf2b3",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    marginTop: 10,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 10,
    backgroundColor: "#6fc736",
  },
  loginText: {
    fontSize: 15,
    color: "#FFF",
    fontWeight: "700",
  },
  tinyLogo: {
    width: 100,
    height: 40,
  },
});
