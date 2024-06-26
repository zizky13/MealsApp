import { Text, View, StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

export default FavoriteScreen = () => {
  const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsContext.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No favorite meals found. Start adding some!</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals}/>;
};


const styles = StyleSheet.create({
   rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    
    text: {
        fontFamily: "poppins-bold",
        fontSize: 24,
        color: 'white',
        textAlign: "center",
    },
});