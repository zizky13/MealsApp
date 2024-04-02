import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../MealsList/MealItem";
import { useNavigation } from "@react-navigation/native";

export default MealsList = ({ items}) => {
    const navigation = useNavigation();
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
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
            horizontal={true}
          />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
      },
});