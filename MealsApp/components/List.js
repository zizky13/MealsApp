import { View, Text, StyleSheet } from "react-native";

export default List = ({ data }) => {
  return data.map((dataPoint) => ( //map over the data and return a view for each data point
    <View key={dataPoint} style={styles.ingredientsContainer}> 
      <Text style={styles.renderIngredients}> 
        {dataPoint}
      </Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  renderIngredients: {
    fontFamily: "poppins-reg",
    fontSize: 16,
    color: "white",
    marginVertical: 14,
    marginHorizontal: 12,
    textAlign: "justify",
  },

  ingredientsContainer: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    margin: 4,
  },
});
