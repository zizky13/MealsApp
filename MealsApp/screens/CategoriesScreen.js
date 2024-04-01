import { FlatList, View, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import MenuItemGrid from "../components/MenuItemGrid";

export default CategoriesScreen = ({navigation}) => { //screen to display the categories
    const renderGridItem = (itemData) => { //render each item in the grid
        const pressHandler = () => { //function to handle the press
            navigation.navigate('MealsOverview', { //navigate to the meals overview screen
                categoryId: itemData.item.id
            });
        }

        return (
            <MenuItemGrid title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
        );
    };

    return (
        <FlatList 
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
        />
    );
}