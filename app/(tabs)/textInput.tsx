import { useState } from "react";
import { View, TextInput, Pressable, Text } from "react-native";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";

export default function TextInputScreen() {
  const [textValue, changeTextValue] = useState("");
  const [passwordValue, changePasswordValue] = useState("");
  return (
    <View style={{}}>
      <TextInput
        style={{ backgroundColor: "lightblue", padding: 10, borderWidth: 1 }}
        value={textValue}
        onChangeText={(value) => {
          changeTextValue(value);
        }}
        placeholder="Please enter your name..."
        keyboardType={"default"} // default, email,numeric
        returnKeyType={"next"}
        autoFocus={false}
      />
      <TextInput
        style={{ backgroundColor: "lightblue", padding: 10, borderWidth: 1 }}
        value={passwordValue}
        onChangeText={(values) => {
          changePasswordValue(values);
        }}
        secureTextEntry={true}
        keyboardType={"default"}
        placeholder="Please enter your password..."
        returnKeyType={"done"}
        autoFocus={false}
      />
      <View style={{ alignItems: "center" }}>
        <Pressable
          style={[
            {
              backgroundColor: "blue",
              borderRadius: 50,
              width: 100,
            },
            (textValue.length === 0 || passwordValue.length < 8) && {opacity : 0.5}
          ]}
          disabled={textValue.length === 0 || passwordValue.length < 8}
          onPress={() => {
            console.log(textValue + " :  " + passwordValue);
          }}
        >
          <Text
            style={{
              color: "white",
              alignContent: "center",
              textAlign: "center",
            }}
          >
            Submit
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
