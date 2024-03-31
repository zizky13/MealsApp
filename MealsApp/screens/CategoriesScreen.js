import { FlatList, View, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import MenuItemGrid from "../components/MenuItemGrid";

export default CategoryScreen = () => {
    const renderGridItem = (itemData) => {
        return (
            <MenuItemGrid title={itemData.item.title} color={itemData.item.color} />
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