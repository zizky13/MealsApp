import { View, Text, StyleSheet } from "react-native";

export default MealDetails = ({ duration, complexity, affordability, featuredStyle, navigation }) => {


  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem, featuredStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, featuredStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, featuredStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    padding: 8,
  },

  detailItem: {
    fontFamily: "poppins-bold",
    textAlign: "center",
    flex: 1,
    borderWidth: 1,
    padding: 8,
    margin: 4,
    borderRadius: 8,
  },
});
