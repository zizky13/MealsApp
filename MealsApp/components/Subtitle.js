import { Text, View, StyleSheet } from "react-native";

export default Subtitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    fontFamily: "poppins-semi-bold",
    fontSize: 20,
    textAlign: "center",
    margin: 4,
    color: "white",
  },

  subTitleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    padding: 8,
    margin: 4,
  },
});
