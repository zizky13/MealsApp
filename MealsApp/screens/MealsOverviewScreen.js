import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { useLayoutEffect } from "react";

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

  const renderMealItem = (itemData) => {
    const mealItemProps = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
      onSelectMeal: () => {
        navigation.navigate("MealsDetail", {
          mealId: itemData.item.id,
        });
      },
    };

    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
