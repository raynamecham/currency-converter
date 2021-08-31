import React from "react";
import { TouchableOpacity, Text, SafeAreaView } from "react-native";

export default () => {
  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Text>Themes</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>React Native Basics</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>React Native by Example</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
