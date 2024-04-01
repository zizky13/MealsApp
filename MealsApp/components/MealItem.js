import { View, Text, Image, StyleSheet, FlatList } from "react-native";

/**
 * Represents a meal item component.
 *
 * @param {Object} props - The props for the MealItem component.
 * @param {string} props.title - The title of the meal.
 * @param {string} props.image - The URL of the meal image.
 * @param {Array<string>} props.ingredients - The list of ingredients for the meal.
 * @param {Array<string>} props.steps - The list of steps to prepare the meal.
 * @param {string} props.themeColor - The theme color for the meal item.
 * @param {number} props.duration - The duration of the meal preparation in minutes.
 * @param {string} props.complexity - The complexity level of the meal (e.g., "easy", "medium", "hard").
 * @param {string} props.affordability - The affordability level of the meal (e.g., "affordable", "pricey", "luxurious").
 * @returns {JSX.Element} The rendered MealItem component.
 */
export default MealItem = ({
  title,
  image,
  ingredients,
  steps,
  themeColor,
  duration,
  complexity,
  affordability,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <Text style={[styles.titleStyle, { backgroundColor: themeColor }]}>
        {title}
      </Text>
      <View style={styles.attributesContainer}>
        <View style={styles.durationContainer}>
          <Text style={[styles.titleStyle, { fontSize: 12 }]}>
            Duration: {duration} minutes
          </Text>
        </View>
        <View style={styles.complexityContainer}>
          <Text
            style={[
              styles.titleStyle,
              { fontSize: 12 },
              complexity === "challenging"
                ? { backgroundColor: "red" }
                : complexity === "hard"
                ? { backgroundColor: "yellow" }
                : { backgroundColor: "green" },
            ]}
          >
            Complexity: {complexity}
          </Text>
        </View>
        <View style={styles.affordabilityContainer}>
          <Text
            style={[
              styles.titleStyle,
              { fontSize: 12 },
              affordability === "luxurious"
                ? { backgroundColor: "red" }
                : affordability === "pricey"
                ? { backgroundColor: "yellow" }
                : { backgroundColor: "green" },
            ]}
          >
            Affordability: {affordability}
          </Text>
        </View>
      </View>
      <FlatList
        ListHeaderComponent={
          <Text style={[styles.titleStyle]}>Ingredients</Text>
        }
        data={ingredients}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
      />
      <FlatList
        ListHeaderComponent={<Text style={[styles.titleStyle]}>Steps</Text>}
        data={steps}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
        ListFooterComponent={<View style={styles.separator}></View>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: "100%",
    height: 200,
  },

  imageContainer: {
    borderRadius: 8,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },

  titleStyle: {
    fontFamily: "poppins-bold",
    textAlign: "center",
    fontSize: 18,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },

  listItem: {
    fontFamily: "poppins-reg",
    fontSize: 16,
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
  },

  separator: {
    flex: 1,
    borderWidth: 3,
    borderRadius: 8,
    marginVertical: 8,
  },

  ingredientsAndStepsContainer: {
    flexDirection: "row",
  },

  ingredientsContainer: {
    flex: 1,
  },

  stepsContainer: {
    flex: 1,
  },

  attributesContainer: {
    flexDirection: "row",
  },

  durationContainer: {
    flex: 1,
  },

  complexityContainer: {
    flex: 1,
  },

  affordabilityContainer: {
    flex: 1,
  },
});
