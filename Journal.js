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



  Second

  Third

  Fourth

  Fifth