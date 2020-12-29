import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberSelected: "",
    };
  }

  render() {
    saveUserInput = () => {
      if (this.state.numberSelected <= 1 || this.state.numberSelected >= 6) {
        Alert.alert(
          "You inputted wrong variables!!!",
          "Number of elements should be between 2 and 5. Please fix this error",
          [
            {
              text: "Ok",
              style: "cancel",
            },
          ],
          { cancelable: false }
        );
      } else {
        this.props.navigation.navigate("Calculation", {
          data: this.state.numberSelected,
        });
      }
    };
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.intro_text}>Welcome to GFM-Calculator</Text>
          <Text style={styles.sub_text}>
            To start using the calculator, choose how many Chemical Elements you
            have in your formula or compound
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignSelf: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <TextInput
              style={styles._elements_input}
              textAlign={"center"}
              keyboardType="number-pad"
              placeholder="Enter the number of elements..."
              placeholderTextColor="#A8A8A8"
              onChangeText={(text) => this.setState({ numberSelected: text })}
              value={this.state.numberSelected}
              returnKeyLabel="Done"
              returnKeyType="done"
              onSubmitEditing={() => saveUserInput()}
            />
            <TouchableOpacity
              onPress={() => saveUserInput()}
              style={{
                //width: 100,
                //height: 100,
                borderRadius: 100 / 2,
                borderColor: "#fff",
                borderWidth: 1,
                paddingHorizontal: 20,
                paddingVertical: 10,

                marginTop: 10,

                paddingHorizontal: 16,
              }}
            >
              <Icon
                style={{}}
                name="arrow-right-thick"
                color="#fff"
                size={25}
              />
            </TouchableOpacity>
          </View>

          <StatusBar style="light" />
          <View style={styles.footer}>
            <Text style={styles.footer_text}>Made by Godson Umoren</Text>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    textAlignVertical: "center",
    textAlign: "center",
  },
  footer: {
    color: "#fff",
    position: "absolute",
    bottom: 0,
    marginVertical: 30,
    fontWeight: "900",
  },
  footer_text: {
    color: "#fff",
    fontWeight: "900",
  },
  _elements_input: {
    //borderColor: "#fff",
    //margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 10,
    borderRadius: 50,
    width: 300,
    backgroundColor: "rgba(52, 52, 52, 0.8)",

    marginTop: 10,
    //height: 80,
    //width: "70%",
    paddingHorizontal: 16,
    color: "#fff",
    fontWeight: "600",
  },
  _text: {
    color: "#fff",
  },
  intro_text: {
    color: "#fff",
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  sub_text: {
    color: "#fff",
    textAlign: "center",
    //padding:10,
    width: "90%",
  },
});
