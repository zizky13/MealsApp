import MealItem from "../components/MealsList/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

export default MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    //create a new array of meals that have the category id
    (meal) => meal.categoryIds.indexOf(catId) >= 0 //if the category id is in the array of category ids
  );

  useLayoutEffect(() => {
    //set the title of the screen to the category title
    const selectedCategory = CATEGORIES.find(
      //find the category with the id
      (category) => category.id === catId //if the category id is the same as the id
    );

    navigation.setOptions({
      title: selectedCategory.title,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals}/>;
};
