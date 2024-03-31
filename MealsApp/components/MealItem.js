import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

export default MealItem = ({ title, image, ingredients, steps}) => {
    return (
        <View style={{flex: 1}}>
            <View style={styles.imageContainer}>
                <Image source={{uri: image}} style={styles.image}/>
            </View>
            <Text>{title}</Text>
            <FlatList 
            data={ingredients}
            keyExtractor={item => item}
            renderItem={({item}) => <Text>{item}</Text>}
            />
            <FlatList
            data={steps}
            keyExtractor={item => item}
            renderItem={({item}) => <Text>{item}</Text>}
            />
            {/* TODO: try to implement ingredients and steps as a section list */}
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },

    imageContainer: {
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    }
});