<<<<<<< HEAD
// app/textInput.tsx
import { useState } from "react";
import { View, TextInput } from "react-native";

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
        onChangeText={(value) => {
          changePasswordValue(value);
        }}
        secureTextEntry={true}
        keyboardType={"default"}
        placeholder="Please enter your password..."
        returnKeyType={"done"}
        autoFocus={false}
      />
    </View>
  );
}
=======
// app/textInput.tsx
import { useState } from "react";
import { View, TextInput } from "react-native";

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
        onChangeText={(value) => {
          changePasswordValue(value);
        }}
        secureTextEntry={true}
        keyboardType={"default"}
        placeholder="Please enter your password..."
        returnKeyType={"done"}
        autoFocus={false}
      />
    </View>
  );
}
>>>>>>> c27444aea867ed87574263e841300179355e1d38
