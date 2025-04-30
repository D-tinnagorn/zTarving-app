import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { color } from "../src/Constant/colors";
import { IconSearch } from "../src/assets/Icon";

interface SearchProps {
  handleSubmit: () => void;
  textSearch: string;
  setTextSearch: (textSearch: string) => void;
}

const Seach: React.FC<SearchProps> = ({
  handleSubmit,
  textSearch,
  setTextSearch,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type something..."
        value={textSearch}
        onChangeText={setTextSearch}
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
      />
      <TouchableOpacity onPress={handleSubmit}>
        <IconSearch />
      </TouchableOpacity>
    </View>
  );
};

export default Seach;

const styles = StyleSheet.create({
  container: {
    // width:"100%",
    marginTop: 20,
    height: 50,
    marginHorizontal: 20,
    backgroundColor: color.white,
    padding: 10,
    borderRadius: 100,
    elevation: 5,
    shadowColor: color.black,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
