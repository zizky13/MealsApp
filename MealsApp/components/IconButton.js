import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default IconButtons = ({ icon, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1, // You can change this to any style you want when the button is pressed
      })}
    >
      {({ pressed }) => (
        <Ionicons name={icon} size={24} color={pressed ? "yellow" : color} />
      )}
    </Pressable>
  );
};