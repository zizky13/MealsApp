import { StatusBar, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailScreen from "./screens/MealsDetailScreen";
import { useFonts } from "expo-font";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoriteScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "#fff",
        sceneContainerStyle: {
          backgroundColor: "#222831",
        },
        drawerContentStyle: {
          backgroundColor: "#222831",
        },
        drawerInactiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="fast-food" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen name="FavoriteScreen" component={FavoriteScreen} options={{
          title: "Favourite",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  const [loaded] = useFonts({
    "poppins-reg": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-semi-bold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "poppins-italic": require("./assets/fonts/Poppins-Italic.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "#fff",
            contentStyle: {
              backgroundColor: "#222831",
            },
          }}
        >
          <Stack.Screen
            name="DrawerScreen"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealsDetail" component={MealsDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
