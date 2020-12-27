import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import elements from "../Components/element";
import { Divider } from "react-native-paper";
import PickerModal from "react-native-picker-modal-view";
import { TouchableOpacity } from "react-native-gesture-handler";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class CalculationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elementsNumber: props.route.params.data,
      numberOfRows: 5,
    };
  }

  _renderItem = () => {
    return (
      <View style={styles.Calculation_View}>
        <Text style={styles.intro_text}>
          {"You selected "}
          {this.state.elementsNumber}
          {" elements"}
        </Text>
        <Divider
          style={{
            backgroundColor: "#fff",
            marginVertical: 10,
          }}
        />
        <View style={styles._Selector}>
          <View style={styles._ElementSelect}>
            <Text style={styles._text}>Select First Element:</Text>
            <PickerModal
              renderSelectView={(disabled, selected, showModal) => (
                <TouchableOpacity
                  style={
                    {
                      //paddingVertical:10,
                    }
                  }
                  disabled={disabled}
                  onPress={showModal}
                >
                  <Text style={styles._ElementText}>Pick Your 1st Element</Text>
                </TouchableOpacity>
              )}
              //onSelected={(selected) => this.selected(selected)}
              //onRequestClosed={() => console.warn("closed...")}
              //onBackRequest={() => console.warn("back key pressed")}
              items={elements}
              /*sortingLanguage={"tr"}
          showToTopButton={true}
          selected={this.state.selectedItem}
          showAlphabeticalIndex={true}
          autoGenerateAlphabeticalIndex={true}
          selectPlaceholderText={"Choose one..."}
          onEndReached={() => console.log("list ended...")}
          searchPlaceholderText={"Search..."}
          requireSelection={false}
          autoSort={false}*/
            />
          </View>
          <View style={styles._MolesSelect}>
            <View style={styles._MolesStyle}>
              <Text style={styles._text}>Number of Moles:</Text>
            </View>
            <TextInput
              style={styles._elements_input}
              textAlign={"center"}
              keyboardType="number-pad"
              placeholder="Enter the number of moles..."
              placeholderTextColor="#A8A8A8"
              onChangeText={(text) => this.setState({ numberSelected: text })}
              value={this.state.numberSelected}
              returnKeyLabel="Done"
              returnKeyType="done"
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>
        </View>
        <Divider
          style={{
            backgroundColor: "#fff",
            marginVertical: 10,
          }}
        />

        <View style={styles._Selector}>
          <View style={styles._ElementSelect}>
            <Text style={styles._text}>Select First Element:</Text>
            <PickerModal
              renderSelectView={(disabled, selected, showModal) => (
                <TouchableOpacity
                  style={
                    {
                      //paddingVertical:10,
                    }
                  }
                  disabled={disabled}
                  onPress={showModal}
                >
                  <Text style={styles._ElementText}>
                    Pick Your 2nd Element!
                  </Text>
                </TouchableOpacity>
              )}
              //onSelected={(selected) => this.selected(selected)}
              //onRequestClosed={() => console.warn("closed...")}
              //onBackRequest={() => console.warn("back key pressed")}
              items={elements}
              /*sortingLanguage={"tr"}
          showToTopButton={true}
          selected={this.state.selectedItem}
          showAlphabeticalIndex={true}
          autoGenerateAlphabeticalIndex={true}
          selectPlaceholderText={"Choose one..."}
          onEndReached={() => console.log("list ended...")}
          searchPlaceholderText={"Search..."}
          requireSelection={false}
          autoSort={false}*/
            />
          </View>
          <View style={styles._MolesSelect}>
            <View style={styles._MolesStyle}>
              <Text style={styles._text}>Number of Moles:</Text>
            </View>
            <TextInput
              style={styles._elements_input}
              textAlign={"center"}
              keyboardType="number-pad"
              placeholder="Enter the number of moles..."
              placeholderTextColor="#A8A8A8"
              onChangeText={(text) => this.setState({ numberSelected: text })}
              value={this.state.numberSelected}
              returnKeyLabel="Done"
              returnKeyType="done"
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>
        </View>
        <Divider
          style={{
            backgroundColor: "#fff",
            marginVertical: 10,
          }}
        />

        <View style={styles._Selector}>
          <View style={styles._ElementSelect}>
            <Text style={styles._text}>Select First Element:</Text>
            <PickerModal
              renderSelectView={(disabled, selected, showModal) => (
                <TouchableOpacity
                  style={
                    {
                      //paddingVertical:10,
                    }
                  }
                  disabled={disabled}
                  onPress={showModal}
                >
                  <Text style={styles._ElementText}>
                    Pick Your 3rd Element!
                  </Text>
                </TouchableOpacity>
              )}
              //onSelected={(selected) => this.selected(selected)}
              //onRequestClosed={() => console.warn("closed...")}
              //onBackRequest={() => console.warn("back key pressed")}
              items={elements}
              /*sortingLanguage={"tr"}
          showToTopButton={true}
          selected={this.state.selectedItem}
          showAlphabeticalIndex={true}
          autoGenerateAlphabeticalIndex={true}
          selectPlaceholderText={"Choose one..."}
          onEndReached={() => console.log("list ended...")}
          searchPlaceholderText={"Search..."}
          requireSelection={false}
          autoSort={false}*/
            />
          </View>
          <View style={styles._MolesSelect}>
            <View style={styles._MolesStyle}>
              <Text style={styles._text}>Number of Moles:</Text>
            </View>
            <TextInput
              style={styles._elements_input}
              textAlign={"center"}
              keyboardType="number-pad"
              placeholder="Enter the number of moles..."
              placeholderTextColor="#A8A8A8"
              onChangeText={(text) => this.setState({ numberSelected: text })}
              value={this.state.numberSelected}
              returnKeyLabel="Done"
              returnKeyType="done"
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>
        </View>
        <Divider
          style={{
            backgroundColor: "#fff",
            marginVertical: 10,
          }}
        />

        <View style={styles._Selector}>
          <View style={styles._ElementSelect}>
            <Text style={styles._text}>Select First Element:</Text>
            <PickerModal
              renderSelectView={(disabled, selected, showModal) => (
                <TouchableOpacity
                  style={
                    {
                      //paddingVertical:10,
                    }
                  }
                  disabled={disabled}
                  onPress={showModal}
                >
                  <Text style={styles._ElementText}>
                    Pick Your 4th Element!
                  </Text>
                </TouchableOpacity>
              )}
              //onSelected={(selected) => this.selected(selected)}
              //onRequestClosed={() => console.warn("closed...")}
              //onBackRequest={() => console.warn("back key pressed")}
              items={elements}
              /*sortingLanguage={"tr"}
          showToTopButton={true}
          selected={this.state.selectedItem}
          showAlphabeticalIndex={true}
          autoGenerateAlphabeticalIndex={true}
          selectPlaceholderText={"Choose one..."}
          onEndReached={() => console.log("list ended...")}
          searchPlaceholderText={"Search..."}
          requireSelection={false}
          autoSort={false}*/
            />
          </View>
          <View style={styles._MolesSelect}>
            <View style={styles._MolesStyle}>
              <Text style={styles._text}>Number of Moles:</Text>
            </View>
            <TextInput
              style={styles._elements_input}
              textAlign={"center"}
              keyboardType="number-pad"
              placeholder="Enter the number of moles..."
              placeholderTextColor="#A8A8A8"
              onChangeText={(text) => this.setState({ numberSelected: text })}
              value={this.state.numberSelected}
              returnKeyLabel="Done"
              returnKeyType="done"
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>
        </View>
        <Divider
          style={{
            backgroundColor: "#fff",
            marginVertical: 10,
          }}
        />

        <View style={styles._Selector}>
          <View style={styles._ElementSelect}>
            <Text style={styles._text}>Select First Element:</Text>
            <PickerModal
              renderSelectView={(disabled, selected, showModal) => (
                <TouchableOpacity
                  style={
                    {
                      //paddingVertical:10,
                    }
                  }
                  disabled={disabled}
                  onPress={showModal}
                >
                  <Text style={styles._ElementText}>
                    Pick Your 5th Element!
                  </Text>
                </TouchableOpacity>
              )}
              //onSelected={(selected) => this.selected(selected)}
              //onRequestClosed={() => console.warn("closed...")}
              //onBackRequest={() => console.warn("back key pressed")}
              items={elements}
              /*sortingLanguage={"tr"}
          showToTopButton={true}
          selected={this.state.selectedItem}
          showAlphabeticalIndex={true}
          autoGenerateAlphabeticalIndex={true}
          selectPlaceholderText={"Choose one..."}
          onEndReached={() => console.log("list ended...")}
          searchPlaceholderText={"Search..."}
          requireSelection={false}
          autoSort={false}*/
            />
          </View>
          <View style={styles._MolesSelect}>
            <View style={styles._MolesStyle}>
              <Text style={styles._text}>Number of Moles:</Text>
            </View>
            <TextInput
              style={styles._elements_input}
              textAlign={"center"}
              keyboardType="number-pad"
              placeholder="Enter the number of moles..."
              placeholderTextColor="#A8A8A8"
              onChangeText={(text) => this.setState({ numberSelected: text })}
              value={this.state.numberSelected}
              returnKeyLabel="Done"
              returnKeyType="done"
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>
        </View>
        <Divider
          style={{
            backgroundColor: "#fff",
            marginVertical: 10,
          }}
        />
      </View>
    );
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView
          style={{
            backgroundColor: "#000",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <KeyboardAwareScrollView>
            <ScrollView
              style={{
                backgroundColor: "#000",
                flex: 1,
                //height:"100%"
              }}
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <View>{this._renderItem()}</View>
            </ScrollView>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  Calculation_View: {
    flex: 1,
    backgroundColor: "#000",
    width: "90%",
    justifyContent: "flex-start",
    alignContent: "center",
  },
  intro_text: {
    color: "#fff",
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  _Selector: {
    flexDirection: "column",
    marginVertical: 10,
  },
  _text: {
    color: "#fff",
    marginRight: 8,
    fontSize: 18,
    paddingVertical: 10,
  },
  _MolesStyle: {
    paddingVertical: 10,
  },
  _ElementText: {
    color: "#007aff",
    //margin: 8,
    fontSize: 18,
    //backgroundColor: "rgba(52, 52, 52, 0.8)",
    paddingVertical: 10,
    fontWeight: "600",
  },
  _ElementSelect: {
    flexDirection: "row",
  },
  _MolesSelect: {
    flexDirection: "row",
  },
  _elements_input: {
    borderWidth: 10,
    borderRadius: 50,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    padding: 10,
    color: "#fff",
    fontWeight: "600",
  },
});

export default CalculationScreen;

/*<FlatList 
          data={elements}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={{flexDirection: 'row'}}>
              <Text style={{color:"#fff"}}>{item.Name}</Text>
              <Text style={{color:"#fff"}}>{item.Value}</Text>
            </View>
          )} />*/
