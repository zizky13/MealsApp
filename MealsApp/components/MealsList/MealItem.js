import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import MealDetails from "../MealDetails";

/**
 * Renders a meal item component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the meal.
 * @param {string} props.imageUrl - The URL of the meal image.
 * @param {number} props.duration - The duration of the meal in minutes.
 * @param {string} props.complexity - The complexity level of the meal.
 * @param {string} props.affordability - The affordability level of the meal.
 * @returns {JSX.Element} The rendered meal item component.
 */
export default MealItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onSelectMeal,
}) => {
  return (
    <Pressable
      style={styles.mealItemContainer}
      android_ripple={{ color: "#CCC" }}
      onPress={onSelectMeal}
    >
      <View style={styles.innerContainer}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </View>
    </Pressable>
  );
};

/**
 * Styles for the MealItem component.
 *
 * @typedef {Object} Styles
 * @property {Object} image - Styles for the image.
 * @property {string} image.width - The width of the image.
 * @property {number} image.height - The height of the image.
 * @property {number} image.borderTopLeftRadius - The border top left radius of the image.
 * @property {number} image.borderTopRightRadius - The border top right radius of the image.
 * @property {Object} title - Styles for the title.
 * @property {string} title.fontFamily - The font family of the title.
 * @property {number} title.fontSize - The font size of the title.
 * @property {string} title.textAlign - The text alignment of the title.
 * @property {number} title.margin - The margin of the title.
 * @property {Object} mealItemContainer - Styles for the meal item container.
 * @property {number} mealItemContainer.margin - The margin of the meal item container.
 * @property {number} mealItemContainer.borderRadius - The border radius of the meal item container.
 * @property {string} mealItemContainer.overflow - The overflow of the meal item container.
 * @property {string} mealItemContainer.backgroundColor - The background color of the meal item container.
 * @property {number} mealItemContainer.elevation - The elevation of the meal item container.
 * @property {string} mealItemContainer.shadowColor - The shadow color of the meal item container.
 * @property {Object} innerContainer - Styles for the inner container.
 * @property {number} innerContainer.borderRadius - The border radius of the inner container.
 * @property {string} innerContainer.backgroundColor - The background color of the inner container.
 * @property {string} innerContainer.overflow - The overflow of the inner container.
 * @property {Object} details - Styles for the details.
 * @property {string} details.flexDirection - The flex direction of the details.
 * @property {number} details.padding - The padding of the details.
 * @property {Object} detailItem - Styles for the detail item.
 * @property {string} detailItem.fontFamily - The font family of the detail item.
 * @property {number} detailItem.flex - The flex of the detail item.
 * @property {number} detailItem.borderWidth - The border width of the detail item.
 * @property {number} detailItem.padding - The padding of the detail item.
 * @property {number} detailItem.margin - The margin of the detail item.
 * @property {number} detailItem.borderRadius - The border radius of the detail item.
 * @property {Object} pressableContainer - Styles for the pressable container.
 * @property {string} pressableContainer.alignItems - The alignment of the pressable container.
 * @property {string} pressableContainer.justifyContent - The justification of the pressable container.
 */
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  title: {
    fontFamily: "poppins-semi-bold",
    fontSize: 16,
    textAlign: "center",
    margin: 12,
  },

  mealItemContainer: {
    margin: 12,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 8,
    shadowColor: "black",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  innerContainer: {
    borderRadius: 12,
    backgroundColor: "transparent",
    overflow: "hidden",
  },

  pressableContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
