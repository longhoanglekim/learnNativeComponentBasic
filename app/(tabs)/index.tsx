import { useState } from "react";
import { Image, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [imageSource, setImage] = useState({
    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Mimus_polyglottus1_cropped.png/420px-Mimus_polyglottus1_cropped.png",
  });

  const [fallbackImage] = useState(require("@/assets/images/cake.png"));

  return (
    <SafeAreaView>
      {/* Ảnh từ thư mục local */}
      <Image
        source={require("@/assets/images/cake.png")}
        style={{ width: 100, height: 100, backgroundColor: "red" }}
        resizeMode={"center"}
      />

      {/* Ảnh từ URL */}
      <Image
        source={imageSource}
        key={imageSource.uri} // Cập nhật lại khi state thay đổi
        onError={() => {
          console.log("Error loading image");
          setImage({ uri: "" }); // Reset ảnh trước
          setTimeout(() => setImage(fallbackImage), 100); // Cập nhật lại sau
        }}
        style={{ width: 100, height: 100 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
