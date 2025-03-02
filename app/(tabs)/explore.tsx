import { StyleSheet, SafeAreaView, Image, ScrollView } from "react-native";

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={true}>
        <Image
          source={require("@/assets/images/cake.png")}
          style={{ width: 500, height: 500, backgroundColor: "red" }}
          resizeMode={"center"}
        />
        <Image
          source={require("@/assets/images/cake.png")}
          style={{ width: 500, height: 500, backgroundColor: "red" }}
          resizeMode={"center"}
        />
        <Image
          source={require("@/assets/images/cake.png")}
          style={{ width: 500, height: 500, backgroundColor: "red" }}
          resizeMode={"center"}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
