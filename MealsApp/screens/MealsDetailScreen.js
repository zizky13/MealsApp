import { useLayoutEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import List from "../components/List";

/**
 * Renders the detail screen for a specific meal.
 *
 * @param {object} route - The route object containing the parameters.
 * @param {object} navigation - The navigation object for navigating between screens.
 * @returns {JSX.Element} - The JSX element representing the detail screen.
 */
export default MealsDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId; //get the meal id from the route

  const selectedMeal = MEALS.find((meal) => meal.id === mealId); //find the meal with the id

  useLayoutEffect(() => {
    //set the title of the screen to the meal title
    navigation.setOptions({
      //set the title of the screen
      title: selectedMeal.title, //set the title to the meal title
    });
  }, [mealId, navigation]); //run this effect when the meal id or navigation changes

  return (
    <ScrollView> //wrap the content in a scroll view
        <View style={styles.container}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails //render the meal details component
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
            duration={selectedMeal.duration}
            featuredStyle={styles.featured}
        />
        
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients} />

            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: "100%",
    height: 200,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },

  detailsItem: {
    flex: 1,
    fontFamily: "poppins-bold",
    borderWidth: 1,
    borderRadius: 8,
    margin: 5,
    padding: 8,
    textAlign: "center",
    color: "white",
    borderColor: "white",
  },

  text: {
    fontFamily: "poppins-reg",
  },

  title: {
    fontFamily: "poppins-bold",
    fontSize: 22,
    textAlign: "center",
    margin: 8,
    color: "white",
  },

  featured: {
    color: "white",
    borderColor: "white",
  },
});
