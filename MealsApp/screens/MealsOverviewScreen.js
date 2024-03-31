import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default MealsOverviewScreen = ({ route }) => {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    const renderMealItem = (itemData) => {
        return (
            <MealItem 
            title={itemData.item.title} 
            image={itemData.item.imageUrl} 
            ingredients={itemData.item.ingredients}
            steps={itemData.item.steps}/>
            //TODO: try to implement ingredients and steps as a section list
        );
    };

    return (
        <View style={styles.container}>
            <FlatList 
            data={displayedMeals}
            keyExtractor={item => item.id}
            renderItem = {renderMealItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});