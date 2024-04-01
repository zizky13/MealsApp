import { FlatList, View, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import MenuItemGrid from "../components/MenuItemGrid";

export default CategoriesScreen = ({navigation}) => {
    const renderGridItem = (itemData) => {
        const pressHandler = () => {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
                itemColor: itemData.item.color,
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