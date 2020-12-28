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
  Alert,
  Modal
} from "react-native";
import elements from "../Components/element";
import { Divider } from "react-native-paper";
import PickerModal from "react-native-picker-modal-view";
import { Switch, TouchableOpacity } from "react-native-gesture-handler";
import CalculateModal from '../Modal/CalculateModal' 
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class CalculationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elementsNumber: props.route.params.data,
      answer: "",
      firstMoleValue: "",
      secondMoleValue: "",
      thirdMoleValue: "",
      fourthMoleValue: "",
      fifthMoleValue: "",
      firstSelectedElement: {},
      secondSelectedElement: {},
      thirdSelectedElement: {},
      fourthSelectedElement: {},
      fifthSelectedElement: {},
      showModal:false,
    };
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={this.calculate}
          title="Calculate"
          color="#007aff"
        />
      )
    })
  }

  calculate = () => {
    this.setState({
      showModal: true
    })
  }

  firstSelected = (selected) => {
    this.setState({
      firstSelectedElement: selected,
    });
  };

  secondSelectedElement = (selected2) => {
    this.setState({
      secondSelectedElement: selected2,
    });
  };

  thirdSelectedElement = (selected3) => {
    this.setState({
      thirdSelectedElement: selected3,
    });
  };

  fourthSelectedElement = (selected4) => {
    this.setState({
      fourthSelectedElement: selected4,
    });
  };

  fifthSelectedElement = (selected5) => {
    this.setState({
      fifthSelectedElement: selected5,
    });
  };

  _renderViews = () => {
    switch (this.state.elementsNumber) {
      case "2":
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
              <Text
                style={{
                  color: "#fff",
                  marginRight: 8,
                  fontSize: 18,
                  paddingVertical: 10,
                  textAlign: "center",
                  borderColor: "#fff",
                  borderWidth: 1,
                }}
              >
                {JSON.stringify(this.state.firstSelectedElement.Name)}
              </Text>
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
                        Pick Your 1st Element
                      </Text>
                    </TouchableOpacity>
                  )}
                  onSelected={(selected) => this.firstSelected(selected)}
                  onRequestClosed={() => console.warn("closed...")}
                  onBackRequest={() => console.warn("back key pressed")}
                  items={elements}
                  sortingLanguage={"tr"}
                  showToTopButton={true}
                  selected={this.state.firstSelectedElement}
                  showAlphabeticalIndex={true}
                  autoGenerateAlphabeticalIndex={true}
                  selectPlaceholderText={"Choose one..."}
                  onEndReached={() => console.log("list ended...")}
                  searchPlaceholderText={"Search..."}
                  requireSelection={false}
                  autoSort={false}
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
                  onChangeText={(text) =>
                    this.setState({ numberSelected: text })
                  }
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
              <Text
                style={{
                  color: "#fff",
                  marginRight: 8,
                  fontSize: 18,
                  paddingVertical: 10,
                  textAlign: "center",
                  borderColor: "#fff",
                  borderWidth: 1,
                }}
              >
                {JSON.stringify(this.state.secondSelectedElement.Name)}
              </Text>
              <View style={styles._ElementSelect}>
                <Text style={styles._text}>Select Second Element:</Text>
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
                  onSelected={(selected2) =>
                    this.secondSelectedElement(selected2)
                  }
                  onRequestClosed={() => console.warn("closed...")}
                  onBackRequest={() => console.warn("back key pressed")}
                  items={elements}
                  sortingLanguage={"tr"}
                  showToTopButton={true}
                  selected={this.state.secondSelectedElement}
                  showAlphabeticalIndex={true}
                  autoGenerateAlphabeticalIndex={true}
                  selectPlaceholderText={"Choose one..."}
                  onEndReached={() => console.log("list ended...")}
                  searchPlaceholderText={"Search..."}
                  requireSelection={false}
                  autoSort={false}
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
                  onChangeText={(text) =>
                    this.setState({ numberSelected: text })
                  }
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
        break;
      case "3":
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
              <Text
                style={{
                  color: "#fff",
                  marginRight: 8,
                  fontSize: 18,
                  paddingVertical: 10,
                  textAlign: "center",
                  borderColor: "#fff",
                  borderWidth: 1,
                }}
              >
                {JSON.stringify(this.state.firstSelectedElement.Name)}
              </Text>
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
                        Pick Your 1st Element
                      </Text>
                    </TouchableOpacity>
                  )}
                  onSelected={(selected) => this.firstSelected(selected)}
                  onRequestClosed={() => console.warn("closed...")}
                  onBackRequest={() => console.warn("back key pressed")}
                  items={elements}
                  sortingLanguage={"tr"}
                  showToTopButton={true}
                  selected={this.state.firstSelectedElement}
                  showAlphabeticalIndex={true}
                  autoGenerateAlphabeticalIndex={true}
                  selectPlaceholderText={"Choose one..."}
                  onEndReached={() => console.log("list ended...")}
                  searchPlaceholderText={"Search..."}
                  requireSelection={false}
                  autoSort={false}
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
                  onChangeText={(text) =>
                    this.setState({ numberSelected: text })
                  }
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
              <Text
                style={{
                  color: "#fff",
                  marginRight: 8,
                  fontSize: 18,
                  paddingVertical: 10,
                  textAlign: "center",
                  borderColor: "#fff",
                  borderWidth: 1,
                }}
              >
                {JSON.stringify(this.state.secondSelectedElement.Name)}
              </Text>
              <View style={styles._ElementSelect}>
                <Text style={styles._text}>Select Second Element:</Text>
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
                  onSelected={(selected2) =>
                    this.secondSelectedElement(selected2)
                  }
                  onRequestClosed={() => console.warn("closed...")}
                  onBackRequest={() => console.warn("back key pressed")}
                  items={elements}
                  sortingLanguage={"tr"}
                  showToTopButton={true}
                  selected={this.state.secondSelectedElement}
                  showAlphabeticalIndex={true}
                  autoGenerateAlphabeticalIndex={true}
                  selectPlaceholderText={"Choose one..."}
                  onEndReached={() => console.log("list ended...")}
                  searchPlaceholderText={"Search..."}
                  requireSelection={false}
                  autoSort={false}
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
                  onChangeText={(text) =>
                    this.setState({ numberSelected: text })
                  }
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
              <Text
                style={{
                  color: "#fff",
                  marginRight: 8,
                  fontSize: 18,
                  paddingVertical: 10,
                  textAlign: "center",
                  borderColor: "#fff",
                  borderWidth: 1,
                }}
              >
                {JSON.stringify(this.state.thirdSelectedElement.Name)}
              </Text>
              <View style={styles._ElementSelect}>
                <Text style={styles._text}>Select Third Element:</Text>
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
                  onSelected={(selected3) => this.thirdSelectedElement(selected3)}
                  onRequestClosed={() => console.warn("closed...")}
                  onBackRequest={() => console.warn("back key pressed")}
                  items={elements}
                  sortingLanguage={"tr"}
              showToTopButton={true}
              selected={this.state.thirdSelectedElement}
              showAlphabeticalIndex={true}
              autoGenerateAlphabeticalIndex={true}
              selectPlaceholderText={"Choose one..."}
              onEndReached={() => console.log("list ended...")}
              searchPlaceholderText={"Search..."}
              requireSelection={false}
              autoSort={false}
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
                  onChangeText={(text) =>
                    this.setState({ numberSelected: text })
                  }
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
        break;
      case "4":
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
              <Text
                style={{
                  color: "#fff",
                  marginRight: 8,
                  fontSize: 18,
                  paddingVertical: 10,
                  textAlign: "center",
                  borderColor: "#fff",
                  borderWidth: 1,
                }}
              >
                {JSON.stringify(this.state.firstSelectedElement.Name)}
              </Text>
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
                        Pick Your 1st Element
                      </Text>
                    </TouchableOpacity>
                  )}
                  onSelected={(selected) => this.firstSelected(selected)}
                  onRequestClosed={() => console.warn("closed...")}
                  onBackRequest={() => console.warn("back key pressed")}
                  items={elements}
                  sortingLanguage={"tr"}
                  showToTopButton={true}
                  selected={this.state.firstSelectedElement}
                  showAlphabeticalIndex={true}
                  autoGenerateAlphabeticalIndex={true}
                  selectPlaceholderText={"Choose one..."}
                  onEndReached={() => console.log("list ended...")}
                  searchPlaceholderText={"Search..."}
                  requireSelection={false}
                  autoSort={false}
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
                  onChangeText={(text) =>
                    this.setState({ numberSelected: text })
                  }
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
              <Text
                style={{
                  color: "#fff",
                  marginRight: 8,
                  fontSize: 18,
                  paddingVertical: 10,
                  textAlign: "center",
                  borderColor: "#fff",
                  borderWidth: 1,
                }}
              >
                {JSON.stringify(this.state.secondSelectedElement.Name)}
              </Text>
              <View style={styles._ElementSelect}>
                <Text style={styles._text}>Select Second Element:</Text>
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
                  onSelected={(selected2) =>
                    this.secondSelectedElement(selected2)
                  }
                  onRequestClosed={() => console.warn("closed...")}
                  onBackRequest={() => console.warn("back key pressed")}
                  items={elements}
                  sortingLanguage={"tr"}
                  showToTopButton={true}
                  selected={this.state.secondSelectedElement}
                  showAlphabeticalIndex={true}
                  autoGenerateAlphabeticalIndex={true}
                  selectPlaceholderText={"Choose one..."}
                  onEndReached={() => console.log("list ended...")}
                  searchPlaceholderText={"Search..."}
                  requireSelection={false}
                  autoSort={false}
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
                  onChangeText={(text) =>
                    this.setState({ numberSelected: text })
                  }
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
              <Text
                style={{
                  color: "#fff",
                  marginRight: 8,
                  fontSize: 18,
                  paddingVertical: 10,
                  textAlign: "center",
                  borderColor: "#fff",
                  borderWidth: 1,
                }}
              >
                {JSON.stringify(this.state.thirdSelectedElement.Name)}
              </Text>
              <View style={styles._ElementSelect}>
                <Text style={styles._text}>Select Third Element:</Text>
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
                  onSelected={(selected3) => this.thirdSelectedElement(selected3)}
                  onRequestClosed={() => console.warn("closed...")}
                  onBackRequest={() => console.warn("back key pressed")}
                  items={elements}
                  sortingLanguage={"tr"}
              showToTopButton={true}
              selected={this.state.thirdSelectedElement}
              showAlphabeticalIndex={true}
              autoGenerateAlphabeticalIndex={true}
              selectPlaceholderText={"Choose one..."}
              onEndReached={() => console.log("list ended...")}
              searchPlaceholderText={"Search..."}
              requireSelection={false}
              autoSort={false}
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
                  onChangeText={(text) =>
                    this.setState({ numberSelected: text })
                  }
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
              <Text
                style={{
                  color: "#fff",
                  marginRight: 8,
                  fontSize: 18,
                  paddingVertical: 10,
                  textAlign: "center",
                  borderColor: "#fff",
                  borderWidth: 1,
                }}
              >
                {JSON.stringify(this.state.fourthSelectedElement.Name)}
              </Text>
              <View style={styles._ElementSelect}>
                <Text style={styles._text}>Select Fourth Element:</Text>
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
                  onSelected={(selected4) => this.fourthSelectedElement(selected4)}
                  onRequestClosed={() => console.warn("closed...")}
                  onBackRequest={() => console.warn("back key pressed")}
                  items={elements}
                  sortingLanguage={"tr"}
              showToTopButton={true}
              selected={this.state.fourthSelectedElement}
              showAlphabeticalIndex={true}
              autoGenerateAlphabeticalIndex={true}
              selectPlaceholderText={"Choose one..."}
              onEndReached={() => console.log("list ended...")}
              searchPlaceholderText={"Search..."}
              requireSelection={false}
              autoSort={false}
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
                  onChangeText={(text) =>
                    this.setState({ numberSelected: text })
                  }
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
        break;
      case "5":
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
              <Text
                style={{
                  color: "#fff",
                  marginRight: 8,
                  fontSize: 18,
                  paddingVertical: 10,
                  textAlign: "center",
                  borderColor: "#fff",
                  borderWidth: 1,
                }}
              >
                {JSON.stringify(this.state.firstSelectedElement.Name)}
              </Text>
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
                        Pick Your 1st Element
                      </Text>
                    </TouchableOpacity>
                  )}
                  onSelected={(selected) => this.firstSelected(selected)}
                  onRequestClosed={() => console.warn("closed...")}
                  onBackRequest={() => console.warn("back key pressed")}
                  items={elements}
                  sortingLanguage={"tr"}
                  showToTopButton={true}
                  selected={this.state.firstSelectedElement}
                  showAlphabeticalIndex={true}
                  autoGenerateAlphabeticalIndex={true}
                  selectPlaceholderText={"Choose one..."}
                  onEndReached={() => console.log("list ended...")}
                  searchPlaceholderText={"Search..."}
                  requireSelection={false}
                  autoSort={false}
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
                  onChangeText={(text) =>
                    this.setState({ numberSelected: text })
                  }
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
              <Text
                style={{
                  color: "#fff",
                  marginRight: 8,
                  fontSize: 18,
                  paddingVertical: 10,
                  textAlign: "center",
                  borderColor: "#fff",
                  borderWidth: 1,
                }}
              >
                {JSON.stringify(this.state.secondSelectedElement.Name)}
              </Text>
              <View style={styles._ElementSelect}>
                <Text style={styles._text}>Select Second Element:</Text>
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
                  onSelected={(selected2) =>
                    this.secondSelectedElement(selected2)
                  }
                  onRequestClosed={() => console.warn("closed...")}
                  onBackRequest={() => console.warn("back key pressed")}
                  items={elements}
                  sortingLanguage={"tr"}
                  showToTopButton={true}
                  selected={this.state.secondSelectedElement}
                  showAlphabeticalIndex={true}
                  autoGenerateAlphabeticalIndex={true}
                  selectPlaceholderText={"Choose one..."}
                  onEndReached={() => console.log("list ended...")}
                  searchPlaceholderText={"Search..."}
                  requireSelection={false}
                  autoSort={false}
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
                  onChangeText={(text) =>
                    this.setState({ numberSelected: text })
                  }
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
              <Text
                style={{
                  color: "#fff",
                  marginRight: 8,
                  fontSize: 18,
                  paddingVertical: 10,
                  textAlign: "center",
                  borderColor: "#fff",
                  borderWidth: 1,
                }}
              >
                {JSON.stringify(this.state.thirdSelectedElement.Name)}
              </Text>
              <View style={styles._ElementSelect}>
                <Text style={styles._text}>Select Third Element:</Text>
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
                  onSelected={(selected3) => this.thirdSelectedElement(selected3)}
                  onRequestClosed={() => console.warn("closed...")}
                  onBackRequest={() => console.warn("back key pressed")}
                  items={elements}
                  sortingLanguage={"tr"}
              showToTopButton={true}
              selected={this.state.thirdSelectedElement}
              showAlphabeticalIndex={true}
              autoGenerateAlphabeticalIndex={true}
              selectPlaceholderText={"Choose one..."}
              onEndReached={() => console.log("list ended...")}
              searchPlaceholderText={"Search..."}
              requireSelection={false}
              autoSort={false}
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
                  onChangeText={(text) =>
                    this.setState({ numberSelected: text })
                  }
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
              <Text
                style={{
                  color: "#fff",
                  marginRight: 8,
                  fontSize: 18,
                  paddingVertical: 10,
                  textAlign: "center",
                  borderColor: "#fff",
                  borderWidth: 1,
                }}
              >
                {JSON.stringify(this.state.fourthSelectedElement.Name)}
              </Text>
              <View style={styles._ElementSelect}>
                <Text style={styles._text}>Select Fourth Element:</Text>
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
                  onSelected={(selected4) => this.fourthSelectedElement(selected4)}
                  onRequestClosed={() => console.warn("closed...")}
                  onBackRequest={() => console.warn("back key pressed")}
                  items={elements}
                  sortingLanguage={"tr"}
              showToTopButton={true}
              selected={this.state.fourthSelectedElement}
              showAlphabeticalIndex={true}
              autoGenerateAlphabeticalIndex={true}
              selectPlaceholderText={"Choose one..."}
              onEndReached={() => console.log("list ended...")}
              searchPlaceholderText={"Search..."}
              requireSelection={false}
              autoSort={false}
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
                  onChangeText={(text) =>
                    this.setState({ numberSelected: text })
                  }
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
              <Text
                style={{
                  color: "#fff",
                  marginRight: 8,
                  fontSize: 18,
                  paddingVertical: 10,
                  textAlign: "center",
                  borderColor: "#fff",
                  borderWidth: 1,
                }}
              >
                {JSON.stringify(this.state.fifthSelectedElement.Name)}
              </Text>
              <View style={styles._ElementSelect}>
                <Text style={styles._text}>Select Fifth Element:</Text>
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
                  onSelected={(selected5) => this.fifthSelectedElement(selected5)}
                  onRequestClosed={() => console.warn("closed...")}
                  onBackRequest={() => console.warn("back key pressed")}
                  items={elements}
                  sortingLanguage={"tr"}
              showToTopButton={true}
              selected={this.state.fifthSelectedElement}
              showAlphabeticalIndex={true}
              autoGenerateAlphabeticalIndex={true}
              selectPlaceholderText={"Choose one..."}
              onEndReached={() => console.log("list ended...")}
              searchPlaceholderText={"Search..."}
              requireSelection={false}
              autoSort={false}
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
                  onChangeText={(text) =>
                    this.setState({ numberSelected: text })
                  }
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

        break;
      default:
        Alert.alert(
          "You inputted wrong variables!!!",
          "Number of elements should be between 2 and 5. Please fix this error - Go back to the previous screen",
          [
            {
              text: "Ok",
              onPress: () => this.props.navigation.goBack(),
              style: "cancel",
            },
          ],
          { cancelable: false }
        );
    }
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
              <View style={{ flex: 1, backgroundColor: "#000" }}>
                {this._renderViews()}
                  <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => {
                      console.info("Modal has been closed")
                    }}>
                      <View style={styles._modal}>
                          <Button
                            title="Close Modal"
                            onPress={() => {
                              this.setState({
      showModal: !true
    })
                            }}/>
                      </View>
                    </Modal>
              </View>
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
  _modal:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 100,
  }
});

export default CalculationScreen;
